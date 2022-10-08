import { styled } from '@mui/material/styles'
import { ArrowBack, Diamond, GppGoodOutlined } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Star from '../../Components/Star'
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material'
import { Badge, Fab  } from '@mui/material'
import { Store } from '../../store'

const ProductScreenCard = ({product}) => {
 
  const [selectedImage, setSelectedImage] = useState('')  

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { cart, wish } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity  + 1 : 1;
    ctxDispatch({type: "CART_ADD_ITEM", payload: {...product, quantity },})
  }
  const navigate = useNavigate()
  const addToWishHandler = async () => {
    const existItem = wish.wishItems.find((x) => x._id === product._id)
      const quantity = existItem ? existItem.quantity : 1;
   
      if (existItem) {
        window.alert('Product has already been added to your wish list');
        return;
      }
    ctxDispatch({type: "WISH_ADD_ITEM", payload: {...product, quantity},})
    navigate('/wish')
  }
  //let image = "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

  return (
    <>
      <ProductScreenContainer>
        <ProductScreenHead>
          <Logo>
            <Link to='/'>
              <Diamond sx={{fontSize: '40px'}} />
            </Link>
          </Logo>
          <Back>
           <Link to='/category'>
             <ArrowBack /> Back
           </Link>
          </Back>
          <Cart>
             <Fab onClick={() => navigate('/cart')} aria-label='cart'>
              <Badge badgeContent={cart.cartItems.length > 0 && (cart.cartItems.reduce((a, c) => a + c.quantity, 0))} color="primary">
                <ShoppingCart />
              </Badge>
          </Fab>
          </Cart>
        </ProductScreenHead>
        <ProductScreenMiddle>
          <ProductRowOne>
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <Productdesc>{product.description}</Productdesc>
            </div>
            <ProductImageSlide>
              <img src={product.image[0] ? product.image[0] : ''} alt='' onClick={() => setSelectedImage(`${product.image[0]}`)}/>
              {product.image[1] ?  <img src={product.image[1]} alt='' onClick={() => setSelectedImage(`${product.image[1]}`)}/> : ''}
              {product.image[2] ? <img src={product.image[2]} alt='' onClick={() => setSelectedImage(`${product.image[2]}`)}/> : '' }
              {product.image[3] ? <img src={product.image[3]} alt='' onClick={() => setSelectedImage(`${product.image[3]}`)}/> : ""}
              {product.image[4] ? <img src={product.image[4]} alt='' onClick={() => setSelectedImage(`${product.image[4]}`)}/> : ""}
            </ProductImageSlide>
          </ProductRowOne>
          <ProductRowTwo>
            <ProductMainImage>
              <img src={selectedImage || product.thumbnail} alt={product.title} />
            </ProductMainImage>
          </ProductRowTwo>
          <ProductRowThree>
            <ProductSize>{product.protected} <GppGoodOutlined sx={{ color: '#00e676'}}/></ProductSize>
            <ProductSize2>Posted by:  <span>{product.posterName}</span></ProductSize2>
            <ProductSize2>Brand:  <span>{product.brand}</span></ProductSize2>
            <ProductReview>Review:  <Star step1 step2 step3 step4 /> </ProductReview>
            <ProductPrice>Price: <span>${product.price}</span></ProductPrice>
            <ProductPrice>Discount Percentage: <span>{product.discountPercentage}</span></ProductPrice>
          </ProductRowThree>
        </ProductScreenMiddle>
        <ProductScreenBottom>
          <ProductToggleeImage></ProductToggleeImage>
          <div style={{display: 'flex', textAlign: 'center' }}>
            <ProductToCart>
               <button onClick={addToCartHandler}>Add to Cart</button>
            </ProductToCart>
            <ProductToWish>
                <FavoriteBorder onClick={addToWishHandler } />
            </ProductToWish>
          </div>
        </ProductScreenBottom>
      </ProductScreenContainer>

    </>
  )
}

const ProductScreenContainer = styled('div')(({theme})=> ({
  width: '92%',
  height: "auto",
  marginRight: '60px',
  margin: '30px',
}))
const ProductScreenHead = styled('div')(({theme})=> ({
  display: 'flex',
  padding: '20px',
  justifyContent: 'space-between',
}))
const Logo = styled('div')(({theme})=> ({
  a: {
    textDecoration: 'none',
    color: 'black',
  }
}))
const Back = styled('span')(({theme})=> ({
  a: {
    textDecoration: 'none',
    color: 'black',
    marginRight: '12px',

  },
  textTransform: 'uppercase',
  fontSize: '23px',
}))
const Cart = styled('div')(({theme})=> ({}))
const ProductScreenMiddle = styled('div')(({theme})=> ({
  display: 'flex',
  gap: '-30px',
  justifyContent: 'space-between',
}))
const ProductRowOne = styled('div')(({theme})=> ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',

  div: {
display: 'flex',
width: '400px',
  flexWrap: 'wrap',
  }
}))
const ProductTitle = styled('h1')(({theme})=> ({
  fontSize: '39px',
  fontWeight: 600,
}))
const Productdesc = styled('span')(({theme})=> ({
  fontSize: '19px',
  display: 'flex',
  flexWrap: 'wrap',
  color: '#363636',
  fontWeight:500,
}))
const ProductImageSlide = styled('div')(({theme})=> ({
  img: {
    width: '70px',
    cursor: 'pointer',
    margin: '7px',
    height: '64px',
    borderRadius : theme.spacing(1.5),
    objectFit: 'cover',
  }
}))
const ProductRowTwo = styled('div')(({theme})=> ({}))
const ProductMainImage = styled('div')(({theme})=> ({
  img: {
    width: '380px',
    borderRadius : theme.spacing(2.5),
    height: '310px',
    objectFit: 'cover',
  }
}))
const ProductRowThree = styled('div')(({theme})=> ({
  display: 'flex',
  flexDirection:'column',
  marginTop: '60px',
  gap: '26px',
}))
const ProductSize = styled('div')(({theme})=> ({
  fontSize:'22px',
  display: 'flex',
  fontWeight: 500,
  justifyContent: 'space-between',
}))
const ProductReview = styled('div')(({theme})=> ({
  display: 'flex',
  gap: '37px',
}))
const ProductSize2 = styled('div')(({theme})=> ({
  display: 'flex',
  gap: '35px',
  span: {
    fontSize: '20px',
    fontWeight: 700,
  }
}))
const ProductPrice = styled('div')(({theme})=> ({
  display: 'flex',
  gap: '40px',
  span: {
    fontSize: '20px',
    fontWeight: 700,
  }
}))
const ProductScreenBottom = styled('div')(({theme})=> ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '40px'
}))
const ProductToggleeImage = styled('div')(({theme})=> ({}))
const ProductToCart = styled('div')(({theme})=> ({
  button: {
    padding: '20px 14px 20px 14px',
    backgroundColor: '#131313',
    color: 'white',
    fontSize: '15px',
    cursor: 'pointer',
    marginRight: '15px',
    border: 'none',
    borderRadius: theme.spacing(1.2)
  }
}))
const ProductToWish = styled('div')(({theme})=> ({
  svg: {
    fontSize:'30px',
    marginTop: '12px',
    cursor: 'pointer',
  }
}))

export default ProductScreenCard

