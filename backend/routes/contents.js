import { Router } from "express";
import { verifyUser } from "../middleware/auth.js";
import { generateContent, getRecentContents } from "../controller/content.js";

const router = Router();

router.route("/").get(verifyUser, getRecentContents);
router.route("/generate").post(verifyUser, generateContent);

export const contentRoutes = router;
