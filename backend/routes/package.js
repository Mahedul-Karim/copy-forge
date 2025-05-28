import { Router } from "express";
import { getPackages } from "../controller/package.js";

const router = Router();

router.route("/").get(getPackages);

export const packageRoutes = router;
