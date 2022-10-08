import { FavoriteBorder, GppGoodOutlined} from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import { Store } from '../../store'
import {
    ProductContainer,ProductRow,
    ProductHeader,ProductImage, ProductDesc,
    ProductBody, ProductSpan, ProductTitle,
    ProductStar, Ptext, ProductFooter, ProductFooterHead,
    ProductBottom
} from './ProductModule'


const Product = ({item}) => {
    const {state, dispatch: ctxDispatch} = useContext(Store);
  const { cart, wish } = state;
  const addToCartHandler = () => {
    const existItem = cart.cartItems.find((x) => x._id === item._id)
    const quantity = existItem ? existItem.quantity  + 1 : 1;
    ctxDispatch({type: "CART_ADD_ITEM", payload: {...item, quantity },})
  }

  const addToWishHandler = async () => {
    const existItem = wish.wishItems.find((x) => x._id === item._id)
      const quantity = existItem ? existItem.quantity : 1;
   
      if (existItem) {
        window.alert('Product has already been added to your wish list');
        return;
      }
    ctxDispatch({type: "WISH_ADD_ITEM", payload: {...item, quantity},})
  }

  return (
    <>
        <ProductContainer>
          
            <ProductRow>
             <ProductHeader onClick={addToWishHandler}>
                 <FavoriteBorder />
             </ProductHeader>
             <ProductImage>
                 <Link to={`/products/${item._id}`}>    
                   <img src={item.thumbnail} alt="" />
                 </Link>
             </ProductImage>
             <ProductBody>
                 <ProductSpan>${item.price}</ProductSpan>
                 <br />
                 <ProductTitle>{item.title}</ProductTitle>
                 <ProductDesc>{item.description}</ProductDesc>
                 <br />
                 <Ptext><GppGoodOutlined sx={{ color: '#00e676'}}/> <p>{item.protected}</p></Ptext>
             </ProductBody>
             <ProductFooter>
                 <ProductFooterHead>
                     <img src={item.adImage} alt={item.title} />
                     <span className='product-one'>
                        <span className='product-two'>ad Posted by</span>
                       
                        <h2 className="product-three">{item.posterName}</h2>
                     </span>
                 </ProductFooterHead>
                 <ProductBottom onClick={addToCartHandler}>
                     Add to Cart
                 </ProductBottom>
             </ProductFooter>
            </ProductRow>
        </ProductContainer>
    </>
  )
}

export default Product