import { Stats } from "../model/stats.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";

export const getStats = asyncWrapper(async (req, res, next) => {
  const userId = req.user._id;

  const stats = await Stats.findOne({ user: userId });

  if (!stats) {
    return next(new AppError("Something went wrong while fetching stats", 501));
  }

  const now = new Date();

  const createdAt = stats.createdAt;
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const timePassedSinceCreation = now.getTime() - new Date(createdAt).getTime();

  const lastReset = stats.lastResetedAt || new Date(0);
  const oneDay = 24 * 60 * 60 * 1000;
  const timePassedSinceLastReset =
    now.getTime() - new Date(lastReset).getTime();

  let isUpdated = false;

  if (timePassedSinceCreation >= oneMonth) {
    stats.usage = {
      dailyLimitUsed: 0,
      saveLimitUsed: 0,
      totalContentUsed: 0,
    };
    stats.createdAt = now;
    stats.lastResetedAt = now;
    isUpdated = true;
  } else if (timePassedSinceLastReset >= oneDay) {
    stats.usage.dailyLimitUsed = 0;
    stats.lastResetedAt = now;
    isUpdated = true;
  }

  if (isUpdated) {
    await stats.save();
  }

  res.status(200).json({
    success: true,
    stats,
  });
});

export const getUserPackage = asyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const stats = await Stats.findOne({ user: userId })
    .select("package renewedAt")
    .populate("package");

  res.status(200).json({
    success: true,
    stats,
  });
});
