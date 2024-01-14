import mongoose, { Schema } from "mongoose";

const cart = mongoose.model('Carts', new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            img: { type: String, required: true },
            quantity: {
                type: Number,
                default: 1,
                required: true
            }
        }
    ]
}, { versionKey: false, timestamps: true }))

export default cart
