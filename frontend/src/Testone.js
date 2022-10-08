import React, {useState, useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
 
const KEY = 'pk_test_51LbIPXJshLZ1YDTiSbpygxk9yIP0b0r1goxLNhsPRNN81XNMrtFJDRRktTxOnsrTjgw0U6ulm32p3oz20lewO0Ng00J2sAfNPp'

const Testone = () =>  {

    const [stripeToken, setStripeToken] = useState(null)
  
    const onToken = (token) => {
        console.log(token)
        setStripeToken(token)
    }
    useEffect(() => {
      const makeRequest = async () => {
          try{
            const res = await axios.post('/api/checkout/payment', {
                tokenId: stripeToken.id,
                amount: 2000
            })
            console.log(res.data) 
          }catch(err) {
            console.log(err)
          }
      }
      stripeToken && makeRequest()
    }, [stripeToken])
 
return (
    <StripeCheckout
    name='mern-shop'
    image='/images/poster/image2.png'
    billingAddress
    shippingAddress
    description='your total is $20'
    amount={2000}
    token={onToken}
    stripeKey={KEY}
    />
)
}

export default Testone