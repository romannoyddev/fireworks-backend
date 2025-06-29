import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: ["rocket", "fountain", "party-pack", "sparklers"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
