import { User } from "../model/user.js";
import { asyncWrapper } from "../util/asyncWrapper.js";
import AppError from "../config/error.js";
import jwt from "jsonwebtoken";

export const verifyUser = asyncWrapper(async (req, res, next) => {
  const token = req.cookies?.token || req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return next(new AppError("Token is missing. Please login again", 401));
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findOne({ email: decodedToken.email });

  req.user = user;

  next();
});
