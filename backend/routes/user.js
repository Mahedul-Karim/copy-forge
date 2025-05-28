import { Router } from "express";
import upload from "../config/multer.js";
import { createUser, getUser, googleSignin } from "../controller/user.js";

const router = Router();

router.route("/").post(createUser);
router.route("/me").post(getUser);
router.route("/google").post(googleSignin);

export const userRoutes = router;
