import { Router } from "express";
import { verifyUser } from "../middleware/auth.js";
import {
  generateContent,
  getRecentContents,
  getSingleContent,
  updateDocument,
} from "../controller/content.js";

const router = Router();

router.route("/").get(verifyUser, getRecentContents);
router.route("/generate").post(verifyUser, generateContent);
router
  .route("/:documentId")
  .get(verifyUser, getSingleContent)
  .patch(verifyUser, updateDocument);

export const contentRoutes = router;
