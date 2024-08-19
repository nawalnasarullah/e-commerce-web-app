import express from "express";
const router = express.Router();
import Products from "../controllers/products.controller.js";
import { isUserAuthenticated, isUserAuthorised } from "../middleware/auth.js";

const productsController = new Products();

router.route('/product/all').get(isUserAuthenticated, isUserAuthorised('admin'), productsController.getAllProducts);
router.route('/product').get(productsController.getProduct);
router.route('/product/new').post(productsController.createNewProducts);
router.route('/product/update').put(productsController.updateProduct);
router.route('/product/delete').delete(productsController.deleteProduct);

export default router;