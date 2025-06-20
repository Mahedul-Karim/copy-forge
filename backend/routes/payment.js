import { Router } from "express";
import {
  buyPackage,
  cancelPackage,
  deleteCard,
  purchaseSuccess,
  savePaymentMethod,
  setupIntent,
} from "../controller/payment.js";
import { verifyUser } from "../middleware/auth.js";

const router = Router();

router.route("/").post(verifyUser, buyPackage).delete(verifyUser, deleteCard);
router.route("/cancel").post(verifyUser, cancelPackage);
router.route("/success").post(verifyUser, purchaseSuccess);
router.route("/setup-intent").post(verifyUser, setupIntent);
router.route("/save").post(verifyUser, savePaymentMethod);

export const paymentRoutes = router;
