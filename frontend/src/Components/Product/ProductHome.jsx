import React, { useEffect, useReducer, useRef, useState } from 'react'
//import data from '../../data'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from './Product'
import {
ProductHomeContainer,
ProductHomeCol, ProductNavButton, Left, Right
} from './ProductModule'
import { KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import logger from 'use-reducer-logger';
import axios from 'axios';
import { useMediaQuery, useTheme } from '@mui/material';

const reducer = (state, action) => {
  switch(action.type) {
      case 'FETCH_REQUEST' :
          return{...state, loading: true}
      case 'FETCH_SUCCESS' :
          return{...state, product: action.payload, loading: false}
      case 'FETCH_FAIL' :
          return{...state, error: action.payload, loading: false}
          default:
              return state
  }
}


const ProductHome = ( ) => {
    
    const [{loading, error, product}, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: ''
  })
  const [show, setShow] = useState(4)
  
        const sliderRef = useRef(null)
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            ref: sliderRef,
            slidesToShow: show,
            slidesToScroll: 1,
        };
         const theme = useTheme()
         const size = useMediaQuery(theme.breakpoints.down('1111'))
         const sizes = useMediaQuery(theme.breakpoints.down('808'))
         const sizess = useMediaQuery(theme.breakpoints.down('550'))
        useEffect(() => {
          if (size) {
            setShow(3)
          }else{
            setShow(4)
          }
          if (sizes) {
            setShow(2)
          }
          if (sizess) {
            setShow(1)
          }

        }, [size, sizes, sizess])


  useEffect(()  => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'})
      try {
        const result = await axios.get('http://localhost:5000/api/products/')
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload : err.message})
      }

    }

    fetchData();
  }, [])

  return (
    <>
        <ProductHomeContainer>
           <h2>Product near You</h2>
            <ProductNavButton>
              <Left onClick={() => sliderRef.current.slickPrev()} ><KeyboardArrowLeft /></Left>
               <Right onClick={() => sliderRef.current.slickNext()} ><KeyboardArrowRight /></Right>
            </ProductNavButton>
           <Slider {...settings}>
             {loading ? (<img sx={{width: '500px'}} src='/images/spinner.gif' alt='loading' /> ) : error ? (<h1>{error}</h1>) : (
                product.slice(0, 8).map((item) => (
                    <ProductHomeCol>
                        <Product
                        item={item}
                        key={item._id}
                        />
                    </ProductHomeCol>
                ))
             )}
            </Slider>
        </ProductHomeContainer>
    </>
  )
}


export default ProductHome