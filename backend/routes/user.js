import { Router } from "express";
import upload from "../config/multer.js";
import { createUser, getUser } from "../controller/user.js";

const router = Router();

router.route("/").post(createUser);
router.route("/me").post(getUser);

export const userRoutes = router;
