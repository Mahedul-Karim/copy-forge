import { Router } from "express";
import upload from "../config/multer.js";
import { createUser, getUser } from "../controller/user.js";

const router = Router();

router.route("/").post(createUser).get(getUser);

export const userRoutes = router;
