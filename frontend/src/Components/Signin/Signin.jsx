import React, {useState} from 'react'
import './SigninModule'
import { login } from '../../redux/apiCall'
import { Link,useNavigate } from 'react-router-dom'
import { Diamond } from '@mui/icons-material'
import {
    SignUpContainer, SignUpRow,SignUpCol,SignUpHeader,
    SignUpTitle,SignupinputCont,SignupLowerLevel,
    ForgetPassword,SignUpButton,SignUpRedirect,SignUpcolTwo,Social,
} from '../SignUp/SignUpModule'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'

const Signin = () => {
  const [loadingButton, setLoadingButton] = useState(false)
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
                email: '',
                password: ''
        },
        validationSchema: Yup.object({
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().min(4, 'Password is Too Weak')
                .matches(/^(?=.*[a-z])(?=.*[!@#$%^&*])/, 'Must Contain 6 Characters and 1 special Case Character')
                .required('Password is Required'),

        }),
        onSubmit: async (values) => {
          let email = values.email
          setLoadingButton(true)  
          let password = values.password
          const resdata = await login(dispatch, {email, password})
          if (resdata) {
            setLoadingButton(false)
          }
          if (resdata.error){
            toast.error('Something went wrong')
            setErrors(true)
          }
            handleSubmit()
        }
    })

  const handleSubmit = (e) => {
     setLoadingButton(true)
     
     e.preventDefault()
  }
  const user = useSelector((state)=>state.user.currentUser)
  if(user){
    navigate('/')
    toast.success('log in successful')
  }
  return (
    <>
         <SignUpContainer>
         <img src="/images/poster/img2.jpg" alt="/" />
           <button className='buttonSignup'><Link className='buttonSignupLInk' to='/'>Back</Link></button>
             <SignUpRow>
                
                 <SignUpCol>
                     <SignUpHeader>
                      <Link to='/'>
                       <Diamond sx={{fontSize: '40px'}} />
                     </Link>
                     </SignUpHeader>
                     <SignUpTitle>LogIn</SignUpTitle>
                     
                     <form onSubmit={formik.handleSubmit}>
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
                     {errors ? <span style={{color: '#ff0000'}}>Something went Wrong Try Again....</span> : '' }
                     <SignupLowerLevel>
                         <div>
                            <input type="radio" />
                            <label>Keep me signed in</label>
                         </div>
                         <ForgetPassword><Link to='/forgetpassword'>Forget Password?</Link> </ForgetPassword>
                     </SignupLowerLevel>
                     <SignUpButton type='submit'disabled={loadingButton} >{loadingButton ? 'Loading...' : 'Continue' }</SignUpButton>
                     </form>
                 </SignUpCol>
                 <SignUpRedirect>Don't have an account? <Link to='/signup'>Sign Up</Link></SignUpRedirect>
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

export default Signin