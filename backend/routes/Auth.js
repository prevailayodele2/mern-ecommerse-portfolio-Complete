import express  from "express";
import User from '../models/UserModels.js'
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import mg from 'mailgun-js'

const Auth = express.Router()

const DOMIAN = "sandbox42af3a222eab47cfa6ba9c5982e7cced.mailgun.org"

const mailgun = () => mg({apiKey: process.env.MAILGUN_APIKEY, domain: DOMIAN})

//{apiKey: process.env.MAILGUN_APIKEY, domain: DOMIAN}

// let transporter = Nodemailer.createTransport( MailgunTransport({
//     auth: {
//         domain: DOMIAN,
//         apiKey: process.env.MAILGUN_APIKEY
//     }
// }))

Auth.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SEC).toString(),
    })
    if(req.body.username && req.body.email && req.body.phone && req.body.password === false){
        res.status(400).json({error: 'Error Logging In'})
    }

   try{
    const  SavedUser = await newUser.save()
    res.status(200).json(SavedUser)
   }catch(error) {
       res.status(500).json({error: 'something went wrong'})
   }
})



Auth.post('/login', async (req, res)=> {
    
    try{
        const user = await User.findOne({
            email: req.body.email
        })
        !user && res.status(401).json({error:'Wrong Credentiallls'})
        const hashedPassword = CryptoJS.AES.decrypt(user.password,  process.env.PASSWORD_SEC)
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
       // let originalPassword = 'cookies'
        originalPassword !== req.body.password && 
         res.status(401).json({error:'Wrong Credentials'})
         const accessToken = jwt.sign({
             id: user._id,
             isAdmin: user.isAdmin
         }, process.env.JWT_KEY,
         {expiresIn: "3d"}
          )

        const { password, ...others } = user._doc

        res.status(200).json({...others, accessToken})
    }catch (err){
        res.status(500).json({error: 'Something went wrong.....'})
    }
} )

Auth.post('/reset', (req, res)=> {
    const { email } = req.body

    User.findOne({email}, (err, user)=> {
        if (err || !user) {
            return res.status(400).send({error: 'User with this email does not exist'})
        }
        const token = jwt.sign({_id: user._id}, process.env.RESET_PASSKEY, {expiresIn: '60m'})
        const data = {
            from: 'Exicited User <prevail@samples.mailgun.org>',
            to: `${email}`,
            subject: 'Password Reset',
            text: 'Testing Mailgun',
            html: `
             <h2>Your request for a password Reset has been granted </h2>
             <p>Please click the link below to reset your password</p>
             <a href="http://localhost:3000/auth/newpassword/${token}">Click Here!</a>
            `
        }
        return user.updateOne({resetLink: token}, function(err, success) {
            if (err) {
                return res.status(400).json({error: 'Reset password Link error'})
            } else{
               mailgun().messages().send(data , function (err, body) {
                   if (err){
                       return res.json({error: err.message,  })
                   }
                   return res.status(200).json({message: 'Email has been sent successfully, Kindly follow the instruction', body})
               })
            }
        })
    })
})

Auth.post('/newpassword/:token', (req, res)=> {
    const { password } = req.body
    const resetLink = req.params.token
    if (resetLink) {
      jwt.verify(resetLink, process.env.RESET_PASSKEY, (error, decodedData)=> {
        if (error){
            return res.status(401).json({error: 'Incorrect Token or Token has Expired'})
        }
        User.findOne({resetLink}, (err, user) => {
           if (err || !user) {
             return res.status(400).send({error: 'User with this Token does not exist'})
           }
           const data = {
               password:password,
               resetLink: ''
           }
           user = _.extend(user, data);
           user.save((err, result) => {
            if (err) {
                return res.status(400).json({error: 'Reset password Link error'})
            } else{
                  
                return res.status(200).json({message: 'Password reset successful', result})
                
               
            }
           })
        })
      })
    } else {
        return res.status(400).send({error: 'Authentication Error try Again'})
    }
})

export default Auth
