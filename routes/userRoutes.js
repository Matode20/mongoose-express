import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("holla");
});

router.post("/create", createUser);
router.get("/all-users", getAllUser);
router.get("/:id", getSingleUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id",deleteUser)
export default router;