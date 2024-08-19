import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide the title'],
    minLength:[5, 'Title must have at least 5 characters in length'],
    maxLength:[50, 'Title must have at most 50 characters in length'], 
    unique: true
  },
  desc: String,
  price: {
    required: [true, 'Please provide the price'],
    type: Number,
    min: [100, 'Please set price more than 100'],
    max: [10000, 'Price cannot exceed more than 10000']
  },
  product: {
    type: String,
    required: [true, 'Please provide the product category'],
    enum: ['Electronics', 'Fashion', 'Home', 'Kitchen', 'Outdoor']
  },
});

export const Product = mongoose.model("product", productSchema);
