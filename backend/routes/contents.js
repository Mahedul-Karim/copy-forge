import { Router } from "express";
import { verifyUser } from "../middleware/auth.js";
import { getRecentContents } from "../controller/content.js";

const router = Router();

router.route("/").get(verifyUser, getRecentContents);

export const contentRoutes = router;
