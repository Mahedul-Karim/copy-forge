import { Package } from "../model/package.js";
import { Stats } from "../model/stats.js";
import { User } from "../model/user.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";
import { generateToken } from "../util/util.js";

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

  const token = generateToken({ email: user.email },process.env.JWT_SECRET);

  res.status(201).json({
    success: true,
    message: "User registered successfully!",
    user,
    stats: stat,
    token,
  });
});

const getUser = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({
      success: true,
      user: null,
      stats: null,
    });
  }

  const stats = await Stats.findById(user?.status);

  const token = generateToken({ email: user.email },process.env.JWT_SECRET);

  res.status(200).json({
    success: true,
    user,
    stats,
    token,
  });
});

export { createUser, getUser };
