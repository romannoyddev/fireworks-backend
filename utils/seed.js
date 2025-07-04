import mongoose from "mongoose";
import products from "../data/products.js";
import Product from "../models/product.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log("Seeding error:", err);
    mongoose.disconnect();
  });
