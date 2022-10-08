import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material';
import { ErrorOutlineRounded } from '@mui/icons-material';
import { toast } from 'react-toastify';

const NewPassword = () => {
    const [loadingButton, setLoadingButton] = useState(false)
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const  params = useParams()
    const { token } = params

    const formik = useFormik({
        initialValues: {
               password: '',
                confirmpassword: '',
        },
        validationSchema: Yup.object({
                password: Yup.string().min(4, 'Password is Too Weak')
                .matches(/^(?=.*[a-z])(?=.*[!@#$%^&*])/, 'Must Contain 6 Characters and 1 special Case Character')
                .required('Password is Required'),
                confirmpassword: Yup.string().oneOf(
                    [Yup.ref('password'), null],
                    'Password must Match'
                )   
        }),
        onSubmit: async (values) => {
          setLoadingButton(true)
          let password = values.password
          try {
            const result = await axios.post('http://localhost:5000/api/auth/newpassword/'+token, {password})
            if(result.data){
              console.log(result)
              setLoadingButton(false)
              toast.success('Password has been reset successfully')
              setShow(true)
            }
            if (result.data.error) {
              setError(true)
              toast.error('Something went wrong..,Try again')
              setShow(false)
              setLoadingButton(false)
            }
          }catch {}
          handlesubmit()
        }
    })  

    const handlesubmit = async (e) => {
       e.preventDefault()
    }

  return (
    <>
     <NewPasswordset>
      <img src="/images/poster/img2.jpg" alt="new-passowrd" className='formimg'/>
        <form onSubmit={formik.handleSubmit}>
         {show ? <section>
            <p><ErrorOutlineRounded sx={{color: 'red', fontSize: '25px'}}/>Password reset Successful, Redirect to Sign In page to log in with new password </p>
            <Link style={{color: 'red', textDecoration: 'none', fontSize: '15px'}} to='/signin'>Click here to login with new password</Link>
          </section> : ''}
        <div>
          <InputOne>
              <label className={formik.errors.password && formik.touched.password ? 'failed' : 'pass'}>
              {formik.touched.password && formik.errors.password ? 
              `${formik.errors.password}`: `Password`
              }</label>
              <br />
              <input 
              type="password"
              name='password'
              autoComplete='off' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              />
          </InputOne>
          <InputTwo>
              <label className={formik.errors.confirmpassword && formik.touched.confirmpassword ? 'failed' : 'pass'}>
              {formik.touched.confirmpassword && formik.errors.confirmpassword ? 
              `${formik.errors.confirmpassword}`: `Confirm Password`
              }</label>
              <br />
              <input 
              type="password"
              name='confirmpassword'
              autoComplete='off' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
              />
          </InputTwo>
         <button type='submit'disabled={loadingButton} >{loadingButton ? 'Loading...' : 'Continue' }</button>
         <span style={{color: 'red'}}>{error ? 'Something went wrong...Try Again! and be sure to add a verifired Email Account': ''}</span>
         </div>
      </form>
    </NewPasswordset>
    </>
  )
}

 const NewPasswordset = styled('div')(({theme})=>({
    width: '100%',
    display: 'flex',
    height: '80%',
    overflow: 'hidden',
    flexDirection: 'column',
    position: 'relative',
    img: {
      position: 'relative',
      overflow: 'hidden',
      backgroundPosition: 'cover',
      objectFit: 'cover',
      width: '140vw',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    form: {
      width: '100%',
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      justifyContent:'center',
      alignItem: 'center',
      textAlign: 'center',
      p: {
        fontSize: '16px',
        fontFamily: `san-serif`,
        fontWeight: 400
      },
      section: {
      lineHeight: '13px',
      backgroundColor: 'white',
      margin:' auto',
      padding: '10px 30px',
    }
    }, 
    div: {
      flexDirection: 'column',
      margin: 'auto',
      button: {
        padding: '12px 13px',
        borderRadius: theme.spacing(1.5),
        backgroundColor: 'white',
        fontSize: '22px',
        fontWeight: 400,
        border: 'none',
        margin: '7px',
        cursor: 'pointer',
        '&:hover':{
          backgroundColor: 'inherit',
          border: '1px solid white',
          color: 'white'
        }
      },
    },
 }))
 const InputOne = styled('div')(({theme})=>({
  flexDirection: 'column',
  borderBottom: 'white',
  margin: 'auto',
  input: {
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 400,
    fontFamily: 'monospace',
    borderRadius: theme.spacing(0.5),
    margin: '15px',
    border: 'none',
    width: '400px',
    height: '31px',
  },
  label: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '15px',
    fontSize: '25px',
    fontWeight: 600,
    fontStyle : 'italic'
  } ,
 }))
 const InputTwo = styled('div')(({theme})=>({
  flexDirection: 'column',
  margin: 'auto',
  input: {
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 400,
    fontFamily: 'monospace',
    borderRadius: theme.spacing(0.5),
    margin: '15px',
    border: 'none',
    width: '400px',
    height: '31px',
  },
  label: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '15px',
    fontSize: '25px',
    fontWeight: 600,
    fontStyle : 'italic'
  } ,
  
 }))

export default NewPassword