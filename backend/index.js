import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { handleError } from "./controller/error.js";
import { configCloudinary } from "./config/cloudinary.js";
import { connectDB } from "./config/db.js";

dotenv.config({ path: "./.env.local" });

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

connectDB();
configCloudinary();

app.use(handleError);

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
});

app.listen(PORT, () => {
  console.log(
    `Server running port in ${PORT}`
  );
});
