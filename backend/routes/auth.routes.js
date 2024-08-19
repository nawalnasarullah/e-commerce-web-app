import express from "express";
const router = express.Router();
import Auth from "../controllers/auth.controller.js";

const authController = new Auth();

router.route('/auth/register').post(authController.signUp);
router.route('/auth/login').post(authController.login);


export default router;