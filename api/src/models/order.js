import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Orders",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          required: true,
        },
        dateTime: {
          type: String,
          require: true,
        },
        message: {
          type: String,
          required: false,
        },
        status: {
          type: String,
          enum: [
            "Chờ Xác Nhận",
            "Đã Xác Nhận",
            "Đang Giao Hàng",
            "Đã Nhận Hàng",
            "Đã xác nhận thanh toán",
            "Đã Hủy",
          ],
          default: "Chờ Xác Nhận",
          required: true,
        },
        // paymentMethod: {
        //   type: String,
        //   required: true,
        // },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const order = mongoose.model("Order", orderSchema);

export default order;
