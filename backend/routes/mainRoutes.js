import data from "../data.js";
import Product from "../models/productModels.js";
import express from "express"

const mainRoutes = express.Router()

mainRoutes.get('/', async (req, res) => {
    await Product.deleteOne({})
    const  createdProducts = await Product.insertMany(data.product);

    res.send({createdProducts})
})

export default mainRoutes