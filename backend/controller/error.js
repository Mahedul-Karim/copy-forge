import AppError from "../config/error.js";

export const handleError = (err, req, res, next) => {
  const status = err.status || 500;

  let error = { ...err };

  error.message = err.message;

  if (err.message === "fetch failed" && !err.name) {
    const message =
      "Storage service is currently inactive now! Please try again later!";
    error = new AppError(message);
  }

  if (err.name === "ValidationError") {
    const missingField = Object.keys(err.errors)[0];
    error = new AppError(`${missingField} is required`, 400);
  }

  if (err.name === "CastError") {
    const message = "Resources not found for this id";
    error = new AppError(message, 404);
  }

  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token! Please log in again";
    error = new AppError(message, 400);
  }

  if (err.name === "TokenExpired" || err.name === "TokenExpiredError") {
    const message = "Token has expired! Please log in again!";
    error = new AppError(message, 400);
  }

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)}`;
    error = new AppError(message, 400);
  }

  if (err.status === 429) {
    const message = "Rate limit exceeded. Please try again later.";
    error = new AppError(message, 429);
  }

  res.status(status).json({
    success: false,
    message: error.message || "Internel Server error",
    error: err,
    stack: err.stack,
  });
};
