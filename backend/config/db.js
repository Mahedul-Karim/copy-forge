import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connection successfull!!"))
    .catch((err) => {
      console.log("Something went wrong while connecting database", err);
      process.exit(1);
    });
};
