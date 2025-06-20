import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { handleError } from "./controller/error.js";
import { configCloudinary } from "./config/cloudinary.js";
import { connectDB } from "./config/db.js";
import { userRoutes } from "./routes/user.js";
import { packageRoutes } from "./routes/package.js";
import { statsRoutes } from "./routes/stats.js";
import { contentRoutes } from "./routes/contents.js";
import { paymentRoutes } from "./routes/payment.js";

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
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

connectDB();
configCloudinary();

app.use("/user", userRoutes);
app.use("/package", packageRoutes);
app.use("/stats", statsRoutes);
app.use("/contents", contentRoutes);
app.use("/payment", paymentRoutes);

app.use(handleError);

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
});

app.listen(PORT, () => {
  console.log(`Server running port in ${PORT}`);
});
