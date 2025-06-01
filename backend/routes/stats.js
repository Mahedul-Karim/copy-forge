import { Router } from "express";
import { verifyUser } from "../middleware/auth.js";
import { getStats, getUserPackage } from "../controller/stats.js";

const router = Router();

router.route("/").get(verifyUser, getStats);
router.route("/package").get(verifyUser, getUserPackage);

export const statsRoutes = router;
