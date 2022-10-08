import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import data from "./data.js";
import productRouter from "./routes/ProductRoute.js";
import mainRoutes from './routes/mainRoutes.js'
import Auth from "./routes/Auth.js";
import UserRoute from "./routes/UserRoute.js";
import CartRoute from "./routes/CartRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import StripeRoute from "./routes/StripeRoute.js";
import cors from 'cors'

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('DB Connection Successfull')
}).catch((err) => {
  console.log(err.message)
})
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(cors())
 app.use('/api/main/', mainRoutes)
app.use('/api/products', productRouter)
app.use('/api/auth', Auth)
app.use('/api/users', UserRoute)
app.use('/api/orders', OrderRoute)
app.use('/api/carts', CartRoute)
app.use('/api/checkout', StripeRoute)

app.use((err, req, res, next) => (
  res.status(500).send({ message: err.message})
))

app.get('/api/categoryHome', (req, res) => {
  res.send(data.itemsliderCategory)
})
app.get('/api/category', (req, res) => {
  res.send(data.Category)
})
app.get('/api/category/brand', (req, res) => {
  res.send(data.brand)
})

// app.get('/api/products', (req, res) => {
//   res.send(data.product)
// })
// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.product.find((x) => x.slug === req.params.slug)
//     if (product) {
//       res.send(product)
//     }else {
//       res.status(404).send({message: 'product not found'})
//     }
// })

app.get('/api/slider', (req, res) => {
  res.send(data.homeSlider)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})