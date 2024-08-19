import express from "express";
const router = express.Router();
import userController from "../controllers/user.controller.js";

const user = new userController();

router.route('/user/all').get(user.getAllUsers);
router.route('/user/delete').delete(user.deleteUser)

export default router;