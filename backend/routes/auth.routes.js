import express from "express";
const router = express.Router();
import Auth from "../controllers/auth.controller.js";
import { isUserAuthenticated } from "../middleware/auth.js";

const authController = new Auth();

router.route('/auth/register').post(authController.signUp);
router.route('/auth/login').post(authController.login);
router.route('/auth/logout').get(authController.logout);

export default router;