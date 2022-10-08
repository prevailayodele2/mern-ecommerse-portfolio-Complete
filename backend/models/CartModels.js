import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
    userId: {type: String, required: true},
    product: [
        {
            productId:{type: String},
            quantity: {type: String, default: 1}
        }
    ]
  },{timestamps: true}
)

const Cart = mongoose.model('Cart', CartSchema)
export default Cart