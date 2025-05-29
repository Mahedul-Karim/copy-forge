import { Router } from "express";
import { verifyUser } from "../middleware/auth.js";
import { getStats } from "../controller/stats.js";

const router = Router();

router.route("/").get(verifyUser, getStats);

export const statsRoutes = router;
