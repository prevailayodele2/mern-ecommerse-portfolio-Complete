import express  from "express";
import Cart from "../models/CartModels.js";
import {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuth} from "./VerifyToken.js";



const CartRoute = express.Router()
//CREATE
CartRoute.post('/', verifyToken, async (req, res) =>{
    const newCart = new Cart (req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
CartRoute.put('/:id', verifyTokenAndAuth, async (req, res) => {

   try{
       const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
        $set: req.body 
       }, {new: true})
       res.status(200).json(updatedCart)
   }catch(err) {
       res.status(500).json(err)
   }
})
//DELETE
CartRoute.delete('/:id', verifyTokenAndAuth, async (req, res)=>{
    try{
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json('Cart has been deleted ')
    }catch(err){
        res.status(500).json(err)
    }
})
//GET USER CART
CartRoute.get('/find/:userId', verifyTokenAndAuth, async (req, res)=>{
    try{   const cart = await Cart.findOne({ userId: req.params.userId})        
      res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})
// //GET Product all
CartRoute.get('/', verifyTokenAndAdmin, async (req, res) => {
    try{
      const carts = await Cart.find()
      res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})


export default CartRoute