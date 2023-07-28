import express from "express";
import {
  authUser,
  updateUserProfile,
  registerUser,
  logoutUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .put(protect, updateUserProfile)
  .get(protect, getUserProfile);

export default router;
