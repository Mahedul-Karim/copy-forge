import { Package } from "../model/package.js";
import { Stats } from "../model/stats.js";
import { User } from "../model/user.js";
import { asyncWrapper } from "../util/asyncWrapper.js";

const createUser = asyncWrapper(async (req, res, next) => {
  const { email, fullName } = req.body;

  const pricing = await Package.findOne({ type: "Free" });

  const limits = {};

  for (const feature in pricing.features) {
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

  res.status(201).json({
    success: true,
    message: "User registered successfully!",
    user,
  });
});

const getUser = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  const stats = await Stats.findById(user?.status);

  res.status(200).json({
    success: true,
    user,
    stats,
  });
});

export { createUser,getUser };
