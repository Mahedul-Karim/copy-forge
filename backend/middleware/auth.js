import { User } from "../model/user.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";

export const verifyUser = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError("Invalid request! Please log in again", 400));
  }

  const user = await User.findOne({ email });

  req.user = user;

  next();
});
