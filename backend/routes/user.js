import { Router } from "express";
import upload from "../config/multer.js";
import {
  createUser,
  getUser,
  googleSignin,
  removeSelectedCard,
  selectCard,
  setAutoBilling,
  updateUser,
} from "../controller/user.js";
import { verifyUser } from "../middleware/auth.js";

const router = Router();

router
  .route("/")
  .post(createUser)
  .patch(verifyUser, upload.single("avatar"), updateUser);
router.route("/me").post(getUser);
router.route("/google").post(googleSignin);
router
  .route("/billing")
  .post(verifyUser, setAutoBilling)
  .patch(verifyUser, selectCard)
  .delete(verifyUser,removeSelectedCard);

export const userRoutes = router;
