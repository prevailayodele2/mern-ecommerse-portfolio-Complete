import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpModule'
import { Diamond } from '@mui/icons-material'
import {
    SignUpContainer, SignUpRow,SignUpCol,SignUpHeader,
    SignUpTitle,SignupinputCont,SignupLowerLevel,
    ForgetPassword,SignUpButton,SignUpRedirect,SignUpcolTwo,Social,
} from './SignUpModule'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/apiCall';
import { toast } from 'react-toastify'



const Signup = () => {
    const [loadingButton, setLoadingButton] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
                username: '',
                email: '',
                phone: '',
                password: ''
        },
        validationSchema: Yup.object({
                username: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
                email: Yup.string().email('Invalid email').required('Required'),
                phone: Yup.string().min(6, 'Enter a valid Phone number').required('Required'),
                password: Yup.string().min(4, 'Password is Too Weak')
                .matches(/^(?=.*[a-z])(?=.*[!@#$%^&*])/, 'Must Contain 6 Characters and 1 special Case Character')
                .required('Password is Required'),
        }),
        onSubmit: (values)=> {
          let username = values.username
          let email = values.email
          let phone = values.phone
          let password = values.password
          console.log(values ,'formik')
          const resdata= register(dispatch, {username, email, phone, password})
          console.log(resdata)
          if (resdata) {
           setLoadingButton(false)
           toast.success('account creation successful')
           navigate('/signin')
          }
          if (resdata.error) {
           setLoadingButton(false)
           toast.error('something went wrong')
          }

          
            handleSubmit()
        }
    })

  const handleSubmit = (e) => {
     setLoadingButton(true)
     
     e.preventDefault()
  }
  return (
    <>
         <SignUpContainer>
         <img src="/images/poster/img1.jpg" alt="/" />
           <button className='buttonSignup'><Link className='buttonSignupLInk' to='/'>Back</Link></button>
             <SignUpRow>
                
                 <SignUpCol>
                     <SignUpHeader>
                      <Link to='/'>
                       <Diamond sx={{fontSize: '40px'}} />
                     </Link>
                     </SignUpHeader>
                     <SignUpTitle>SignUp or LogIn</SignUpTitle>
                     
                     <form onSubmit={formik.handleSubmit}>
                         <SignupinputCont>
                             <label className={formik.errors.username && formik.touched.username ? 'failed' : 'pass'}>
                             {formik.touched.username && formik.errors.username ? 
                               `${formik.errors.username}`: `Username`
                              }</label>
                             <input 
                               type="text"
                               name='username'
                              autoComplete='off' 
                              placeholder='example@gmail.com'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.username}
                              />
                         </SignupinputCont>
                         <SignupinputCont>
                             <label className={formik.errors.email && formik.touched.email ? 'failed' : 'pass'}>
                             {formik.touched.email && formik.errors.email ? 
                               `${formik.errors.email}`: `Email`
                              }</label>
                             <input 
                               type="text"
                               name='email'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                              />
                         </SignupinputCont>
                         <SignupinputCont>
                             <label className={formik.errors.phone && formik.touched.phone ? 'failed' : 'pass'}>
                             {formik.touched.phone && formik.errors.phone ? 
                               `${formik.errors.phone}`: `Phone Number`
                              }</label>
                             <input 
                               type="text"
                               name='phone'
                               autoComplete='off'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.phone}
                              />
                         </SignupinputCont>
                         <SignupinputCont>
                             <label className={formik.errors.password && formik.touched.password ? 'failed' : 'pass'}>
                             {formik.touched.password && formik.errors.password ? 
                               `${formik.errors.password}`: `Password`
                              }</label>
                             <input 
                               type="password"
                               name='password'
                               autoComplete='off' 
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                              />
                         </SignupinputCont>
                     
                     <SignupLowerLevel>
                         <div>
                            <input type="radio" />
                            <label>Keep me signed in</label>
                         </div>
                     </SignupLowerLevel>
                     <SignUpButton type='submit'>{loadingButton ? 'Loading...' : 'Continue' }</SignUpButton>
                     </form>
                 </SignUpCol>
                 <SignUpRedirect>Already have an account? <Link to='/signin'>Log In</Link></SignUpRedirect>
                 <SignUpcolTwo>
                     <Social>
                         <img src="/images/social/social.png" alt="" />
                         <span>Facebook</span>
                     </Social>
                     <Social>
                         <img src="/images/social/social3.png" alt="" />
                         <span>YouTube</span>
                     </Social>
                     <Social>
                         <img src="/images/social/social1.png" alt="" />
                         <span>Instagram</span>
                     </Social>
                 </SignUpcolTwo>
             </SignUpRow>
         </SignUpContainer>
    </>
  )
}

export default Signup