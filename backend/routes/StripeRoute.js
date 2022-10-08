import express  from "express";
import Stripe from "stripe"

const StripeRoute = express.Router()
//const stripe = new Stripe(process.env.STRIPE_KEY)

StripeRoute.post('/payment', (req, res) => {
    Stripe('sk_test_51LbIPXJshLZ1YDTiJSniXFwWdLCPtgDm8A19sepHSDZhq4NyBSgFnboSUsbUCJMbkX0GXVc1Up02vFIOnPj8CLlW00vgEPkDwW').charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
            console.log('this is the idiot')
        } else {
            res.status(200).json(stripeRes)
        }
    })
})


export default StripeRoute