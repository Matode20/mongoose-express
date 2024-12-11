import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  loginUser,
  loginWithOTP,
  sendOTP,
  updateUser,
} from "../controllers/userController.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { loginlimiter } from "../middlewares/loginLimiter.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).send("holla");
// });

router.post("/create", createUser);
router.get("/all-users", validateJWT, getAllUser);
router.get("/:id", validateJWT, getSingleUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", validateJWT, deleteUser);
router.post("/login", loginlimiter, loginUser);
router.post("/send-otp", sendOTP); //Send otp to the user
router.post("/otp-login/:id", loginWithOTP);

export default router;
