import {Product} from '../models/products.models.js'

export default class Products {
  
  async createNewProducts(req, res, next) {
    try{
    const product = req.body;
    await Product.create(product);

    // console.log(req.body);
      res.json({
        message: "New products created successfully"
      });
    }catch(error){
      next(error);
    }
  }

  async getAllProducts(req, res, next) {
    try{
      const products = await Product.find();
      res.json({
        message: "Get All Products",
        products
      });
    }catch(error){
      next(error);
    }
  }

  async getProduct(req, res, next) {
    const {id} = req.query;
    // console.log(id);
    try{
      const product = await Product.findById(id);
      res.json({
        message:"single product caleed",
        product
      });
    }catch(error){
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const body = req.body;
    const {id} = req.query;
    try{
      const product = await Product.findByIdAndUpdate(id, body);
      res.json({
        message: "Updated the product",
      });
    }catch(error){
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const {id} = req.query;
    try{
      const product = await Product.findByIdAndDelete(id);
      res.json({
        message: "Deleted the product",
      });
    }catch(error){
      next(error);
    }
  }
}
