import { Package } from "../model/package.js";
import { Stats } from "../model/stats.js";
import { User } from "../model/user.js";
import { Cards } from "../model/creditCard.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";
import { generateToken } from "../util/util.js";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../config/cloudinary.js";

const createUser = asyncWrapper(async (req, res, next) => {
  const { email, fullName } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new AppError("User already exists!", 400));
  }

  const pricing = await Package.findOne({ type: "Free" });

  const limits = {};

  for (const feature of pricing.features) {
    if (feature.key === "dailyLimit") {
      limits.dailyLimit = feature.value;
    }

    if (feature.key === "saveLimit") {
      limits.saveLimit = feature.value;
    }

    if (feature.key === "totalContentLimit") {
      limits.totalContentLimit = feature.value;
    }
  }

  const user = await User.create({
    fullName,
    email,
  });

  const stat = await Stats.create({
    packageType: pricing.type,
    package: pricing._id,
    user: user._id,
    limits,
  });

  user.status = stat._id;

  await user.save();

  const token = generateToken({ email: user.email }, process.env.JWT_SECRET);

  res.status(201).json({
    success: true,
    message: "User registered successfully!",
    user,
    stats: stat.packageType,
    token,
  });
});

const getUser = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email })
    .populate("creditCard")
    .populate("autoBillingCard");

  if (!user) {
    return res.status(200).json({
      success: true,
      user: null,
      stats: null,
    });
  }

  const stats = await Stats.findById(user?.status);

  const token = generateToken({ email: user.email }, process.env.JWT_SECRET);

  res.status(200).json({
    success: true,
    user,
    stats: stats.packageType,
    token,
  });
});

const googleSignin = asyncWrapper(async (req, res, next) => {
  const { email, fullName } = req.body;

  const existingUser = await User.findOne({ email })
    .populate("creditCard")
    .populate("autoBillingCard");

  if (existingUser) {
    const stats = await Stats.findById(existingUser?.status);

    const token = generateToken(
      { email: existingUser.email },
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      success: true,
      user: existingUser,
      stats: stats.packageType,
      token,
    });
  }

  const pricing = await Package.findOne({ type: "Free" });

  const limits = {};

  for (const feature of pricing.features) {
    if (feature.key === "dailyLimit") {
      limits.dailyLimit = feature.value;
    }

    if (feature.key === "saveLimit") {
      limits.saveLimit = feature.value;
    }

    if (feature.key === "totalContentLimit") {
      limits.totalContentLimit = feature.value;
    }
  }

  const user = await User.create({
    email,
    fullName,
  });

  const stats = await Stats.create({
    packageType: pricing.type,
    package: pricing._id,
    user: user._id,
    limits,
  });

  user.status = stats._id;

  await user.save();

  const token = generateToken({ email: user.email }, process.env.JWT_SECRET);

  res.status(200).json({
    success: true,
    user,
    stats: stats.packageType,
    token,
  });
});

const updateUser = asyncWrapper(async (req, res, next) => {
  const userId = req.user._id;

  const existingAvatar = req.user.avatar?.public_id || null;

  const data = { ...req.body };

  if (req.file) {
    if (existingAvatar) {
      await deleteFromCloudinary(existingAvatar);
    }

    const result = await uploadToCloudinary(req.file);

    const avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };

    data.avatar = avatar;
  }

  const user = await User.findByIdAndUpdate(userId, data, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    user,
  });
});

const setAutoBilling = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const { setBilling } = req.body;

  await User.findByIdAndUpdate(userId, {
    autoBilling: setBilling,
  });

  res.status(200).json({
    success: true,
    isAutoBilling: setBilling,
  });
});

const selectCard = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const { selectedCardId } = req.body;

  await User.findByIdAndUpdate(userId, {
    autoBillingCard: selectedCardId,
  });

  const card = await Cards.findById(selectedCardId);

  res.status(200).json({
    success: true,
    message: "Card selected successfully!",
    card,
  });
});

const removeSelectedCard = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  await User.findByIdAndUpdate(userId, {
    autoBillingCard: null,
  });

  res.status(200).json({
    success: true,
    message: "Card removed successfully!",
  });
});

export {
  createUser,
  getUser,
  googleSignin,
  updateUser,
  setAutoBilling,
  selectCard,
  removeSelectedCard,
};
