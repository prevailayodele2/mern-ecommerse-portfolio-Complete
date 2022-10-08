import express  from "express";
import Order from "../models/OrderModels.js";
import {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuth} from "./VerifyToken.js";



const OrderRoute = express.Router()
//CREATE
OrderRoute.post('/', verifyToken, async (req, res) =>{
    const newOrder = new Order (req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
OrderRoute.put('/:id', verifyTokenAndAdmin, async (req, res) => {
   try{
       const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
        $set: req.body 
       }, {new: true})
       res.status(200).json(updatedOrder)
   }catch(err) {
       res.status(500).json(err)
   }
})
//DELETE
OrderRoute.delete('/:id', verifyTokenAndAdmin, async (req, res)=>{
    try{
      await Order.findByIdAndDelete(req.params.id)
      res.status(200).json('Order has been deleted ')
    }catch(err){
        res.status(500).json(err)
    }
})
//GET USER Order
OrderRoute.get('/find/:userId', verifyTokenAndAuth, async (req, res)=>{
    try{   const orders = await Order.find({ userId: req.params.userId})        
      res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})
// //GET Product all
OrderRoute.get('/', verifyTokenAndAdmin, async (req, res) => {
    try{
      const orders = await Order.find()
      res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})
//GET MONHLY INCOME
OrderRoute.get('/income', verifyTokenAndAdmin, async (req,res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() -1))
    const previosMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1))
    try{
       const income = await Order.aggregate([
           {$match: {createdAt: {$gte: previosMonth}}},
           {
               $project: {
                    month: {$month: "$createdAt"},
                    sales: '$amount'
               },
           },  
            {
                $group: {
                        _id: '$month',
                        total: {$sum: '$sales'}
                }
            }
       ]);
       res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

export default OrderRoute