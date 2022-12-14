import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    product: [
        {
            productId:{type: String},
            quantity: {type: String, default: 1}
        }
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: 'Pending'},
}, {timestamps: true})

const Order = mongoose.model('Order', OrderSchema)
export default Order