import mongoose from "mongoose";

const productschema = new mongoose.Schema(
    {
       image: {type: Array},
       slug: {type: String, required: true},
       price: {type: Number, required: true},
       title: {type: String, required: true,unique:true},
       protected: {type: String, required: true},
       description: {type: String, required: true},
       thumbnail: {type: String, required: true},
       adImage: {type: String},
       discountPercentage: {type: Number},
       brand:{type: String, required: true},
       category: {type: String, required: true},
       posterName: {type: String},
       inStock: {type:Boolean, default: true }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productschema)
export default Product

/*

{
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      slug: 4.57,
            brand: 'APPle',
      category: 'laptops',
      thumbnail: 'https://dummyjson.com/image/i/products/6/thumbnail.png',
      images: [
        'https://dummyjson.com/image/i/products/6/1.png',
        'https://dummyjson.com/image/i/products/6/2.jpg',
        'https://dummyjson.com/image/i/products/6/3.png',
        'https://dummyjson.com/image/i/products/6/4.jpg',
      ],
    },

*/