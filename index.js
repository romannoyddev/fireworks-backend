import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/product-routes.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => {
    console.log("DB ERROR", err);
  });

app.use("/products", productRoutes);

const PORT = process.env.PORT || 4444;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
