import mongoose from "mongoose";

const user = mongoose.model(
    "Users",
    new mongoose.Schema(
        {
            username: {
                type: String,
                require: true,
            },
            email: {
                type: String,
                require: true,
            },
            password: {
                type: String,
                require: true,
            },
            role: {
                type: Number,
                default: 0,
            }
            ,
            cardId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Carts',
                require: true
            }
        },
        { versionKey: false }
    )
);

export default user;
