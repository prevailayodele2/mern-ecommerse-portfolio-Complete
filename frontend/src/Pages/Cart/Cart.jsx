import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { Store } from '../../store';
import { ArrowBack, CheckBoxOutlineBlankOutlined, CheckCircle } from '@mui/icons-material'
import '../../App.css'
import { Checkbox } from '@mui/material';
import { userRequest } from '../../requestMethod'
import {
    CartContainer,CartRow,CartHead,CartBack,CartCol,
    CartColHead,CartItem,CartColTwo,CartBottom,
    CartBottomOne,BottomOneHead,BottomOneBody,One,
    Two,CartBottomTwo,SecondOne,SecondTwo,SecondThree,
    CartButton,CartCardOne,CartCardTwo,CartDetails,CardImage,CardAbout,CardPrice,
    CardQuantity,CardTotal,CardDesc,CardName
} from './CartModule'


const Cart = () => {
   // const navigate = useNavigate()
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
      cart: {cartItems},
    } = state
    const KEY = 'pk_test_51LbIPXJshLZ1YDTiSbpygxk9yIP0b0r1goxLNhsPRNN81XNMrtFJDRRktTxOnsrTjgw0U6ulm32p3oz20lewO0Ng00J2sAfNPp'
   const navigate = useNavigate()
    const updateCartHandler = (item, quantity) => {
    //   const { data } = await axios.get(`/api/products/slug/${item.slug}`);
    //   if (data.count < quantity) {
    //     window.alert('Sorry, Product is out of stock');
    //     return;
    //   }
  
      ctxDispatch({
        type: "CART_ADD_ITEM", 
        payload: {...item, quantity },
      })
    }
  
    const removeItemHandler = (item) => {
      ctxDispatch({
        type: "CART_REMOVE_ITEM", 
        payload: item 
      })
    }
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
      setStripeToken(token)
    }
    let totalItems = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)

    useEffect(()=>{
      const makeRequest = async ()=>{
        try{
          const res = await userRequest.post('/checkout/payment',{
            tokenId: stripeToken.id,
            amount: totalItems * 100,
           })
           navigate('/success', {data: res.data})
        }catch{

        }
      }
      stripeToken && makeRequest()
    }, [stripeToken, totalItems, navigate])

  const label = {inputProps: {'aria-label': 'CheckBox'}}
    // const checkoutHandler = () => {
    //   navigate('/login?redirect=/shipping')
    // }


  return (
    <>
        <CartContainer>
            
                <CartHead>My Cart</CartHead>
            <div className="ha">
                <CartBack><ArrowBack /><Link to='/category'>Continue Shopping</Link> </CartBack>   
            </div>
            <CartRow>
                  <CartCardOne>
                        <span className='product'>PRODUCT</span>
                        <CartColHead>
                            <span>PRICE</span>
                            <span>QTY</span>
                            <span>TOTAL</span>
                        </CartColHead>
                    </CartCardOne>
                    
               <CartCol>
                    {cartItems.map((item) => (
                      <>
                        <CartItem key={item._id}>
                          <span className='cancel' style={{marginRight: '20px', position: 'absolute'}} onClick={() => removeItemHandler(item)}>x</span>     
                        <CartCardTwo>
                                <a>
                                 <CardImage onClick={() => navigate(`/products/${item._id}`)}>
                                     <img style={{marginLeft: '60px'}} src={item.thumbnail} alt={item.title} />
                                 </CardImage>
                                 <CardAbout>
                                     <CardName>{item.title}</CardName>
                                     <br />
                                     <br />
                                     <CardDesc style={{width: '30px'}}>{item.description}</CardDesc>
                                 </CardAbout>
                               </a>
                                <CartDetails>
                                    <CardPrice>${item.price}</CardPrice>
                                    <CardQuantity>
                                        <button onClick={() => updateCartHandler(item, item.quantity + 1)}>+</button>
                                        <span className='quantity'>{item.quantity}</span>
                                        <button onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                                    </CardQuantity>
                                    <CardTotal>
                                    ${item.price * item.quantity}
                                    </CardTotal>
                               </CartDetails>
                           </CartCardTwo>
                        </CartItem>
                      </>  
                    ))}   

                </CartCol>
                
                <CartColTwo>
                    <CartBottom>
                        <CartBottomOne>
                            <BottomOneHead>Choose shipping mode:</BottomOneHead>
                            <BottomOneBody>
                                <One>
                                  <Checkbox {...label} icon={<CheckBoxOutlineBlankOutlined />} checkedIcon={<CheckCircle /> } />
                                  Store Pickup <span>. FREE</span>
                                </One>
                                <Two>
                                <Checkbox {...label} icon={<CheckBoxOutlineBlankOutlined />} checkedIcon={<CheckCircle /> } />
                                  Delivery at home (Under 2-5 day) . $50
                                </Two>
                            </BottomOneBody>
                        </CartBottomOne>
                        <CartBottomTwo>
                            <SecondOne>
                                <span>SUBTOTAL</span>
                                ({cartItems.reduce((a, c) => a + c.quantity, 0)} {' '}
                                items) : $ 
                                {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                            </SecondOne>
                            <SecondTwo>
                                <span>SHIPPING</span>
                                <div>0</div>
                            </SecondTwo>
                            <SecondThree>
                                <span>TOTAL</span>
                                ({cartItems.reduce((a, c) => a + c.quantity, 0)} {' '}
                                items) : $ 
                                {totalItems}
                            </SecondThree>
                            <StripeCheckout
                              name='mern-shop'
                              image='/images/poster/img2.jpg'
                              billingAddress
                              shippingAddress
                              description={`your total is ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}`}
                              amount={totalItems * 100}
                              token={onToken}
                              stripeKey={KEY}
                              >
                              <CartButton>Checkout</CartButton>
                            </StripeCheckout>
                        </CartBottomTwo>

                    </CartBottom>
                </CartColTwo>
            </CartRow>
        </CartContainer>
    </>
  )
}
export default Cart