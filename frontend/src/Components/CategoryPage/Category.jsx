import { FavoriteBorder, GppGoodOutlined, ShoppingCart } from '@mui/icons-material'
import { Badge, Fab, styled } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../store'
import {
 CategoryContainer,CategoryCol,CategoryHeader,
 CatImage,CatBody,Catspan,CatTitle,CatDesc,
 CatStar,CatText,CatFooter,CatFooterHead,CatBottom
} from './CategoryModule'

const Category = ({item}) => {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { cart, wish } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === item._id)
    const quantity = existItem ? existItem.quantity  + 1 : 1;
    ctxDispatch({type: "CART_ADD_ITEM", payload: {...item, quantity },})
  }
  const navigate = useNavigate()
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
        <CategoryContainer>
            <CategoryCol>
                <CategoryHeader onClick={addToWishHandler}>
                  <FavoriteBorder />
                </CategoryHeader>
                <CatImage>
                 <Link to={`/products/${item._id}`}>
                  <img src={item.thumbnail} alt="" />
                  </Link>
                </CatImage>
                <CatBody>
                    <Catspan>S{item.price}</Catspan>
                    <br />
                    <CatTitle>{item.title}</CatTitle>
                    <CatDesc>{item.description}</CatDesc>
                    <p><GppGoodOutlined sx={{ color: '#00e676'}}/>{item.protected}</p>
                </CatBody>
                <CatFooter>
                  <CatFooterHead>
                   
                    <img src={item.adImage} alt={item.title} />
                     <span className='cat-one'>
                        <span className='cat-two'>ad Posted by</span>
                       
                        <h2 className="cat-three">{item.posterName}</h2>
                     </span>
                  </CatFooterHead>  
                  <CatBottom>
                      <a onClick={addToCartHandler}>Add To Cart</a>
                  </CatBottom>
                </CatFooter>
            </CategoryCol>
        </CategoryContainer>
        <ShopingCart>
        <Fab sx={{position: 'fixed'}} onClick={() => navigate('/wish')} aria-label='wish'>
          <Badge badgeContent={wish.wishItems.length > 0 && (wish.wishItems.length) } color="error">
            <FavoriteBorder />
          </Badge>
        </Fab>
      </ShopingCart>
      <ShopingCartTWO>
      <Fab sx={{position: 'fixed'}} onClick={() => navigate('/cart')} aria-label='cart'>
          <Badge badgeContent={cart.cartItems.length > 0 && (cart.cartItems.reduce((a, c) => a + c.quantity, 0))} color="error">
            <ShoppingCart />
          </Badge>
      </Fab>
      </ShopingCartTWO>
    </>
  )
}

const ShopingCart = styled('div')(({theme}) => ({
  position: 'absolute',
  marginRight: '80px',
  right: 0,
  textAlign: 'right',
  marign:'20px',
}))
const ShopingCartTWO = styled('div')(({theme}) => ({
  position: 'absolute',
  marginRight: '80px',
  marginTop: '60px',
  right: 0,
  textAlign: 'right',
  marign:'20px',
}))

export default Category