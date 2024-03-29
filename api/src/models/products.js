import mongoose, { Schema, ObjectId } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const product = mongoose.model(
  "Products",
  new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      quantity: { type: Number, required: true },
      categoryId: {
        type: ObjectId,
        required: true,
        default: "unCategories",
        ref: "Category",
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  ).plugin(mongoosePaginate)
);

export default product;
