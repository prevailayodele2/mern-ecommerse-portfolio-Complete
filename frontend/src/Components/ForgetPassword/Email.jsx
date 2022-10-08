import axios from 'axios'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { ErrorOutlineRounded } from '@mui/icons-material';
import { toast } from 'react-toastify';

const Email = () => {
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const formik = useFormik({
        initialValues: {
               email: '',
        },
        validationSchema: Yup.object({
                email: Yup.string().email('Invalid email').required('Required'),
        }),
        onSubmit: async (values) => {
          let email = values.email
          setLoading(true)
          console.log('clicked')
          try {
            const result = await axios.post('http://localhost:5000/api/auth/reset', {email})
            if(result.data) {
              setLoading(false)
              toast.success('Password reset link has been sent')
              setShow(true)
            }
            if (result.data.error) {
              setError(true)
              toast.error('something went wrong...,Try again')
              setShow(false)
            }
          }catch {}
          handleSubmit()
        }
    })  

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <>
      <NewEmail sx={{overflow: 'hidden'}} >
        <img src="/images/poster/img.png" alt="backg" className='formimg' />
        <form onSubmit={formik.handleSubmit}  > 
          {show ? <section>
            <p><ErrorOutlineRounded sx={{color: 'red', fontSize: '25px'}}/>A password reset Link has been sent to your Email, Click the link in your Email to reset your password,</p>
            <Link style={{color: 'red', textDecoration: 'none', fontSize: '15px'}} to='/signin'>Click here to login with new password</Link>
          </section> : ''}
          <div >
           <label >
             Email Verification
            </label>  <br />
            <input 
              type="text"
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />  <br />
           <span style={{color: 'red'}}>{error ? 'Something went wrong...Try Again! and be sure to add a verifired Email Account': ''}</span>
            <span style={{fontSize: '20px'}} className={formik.errors.email && formik.touched.email ? 'failed' : 'pass'}>{formik.touched.email && formik.errors.email ? formik.errors.email : ''}</span>
            <br />
          <button type='submit' >{loading ? 'loading..' : "continue"}</button>
          </div>
        </form>
       </NewEmail>
    </>
  )
}
const NewEmail = styled('div')(({theme})=> ({
  '*':{ overflow: 'hidden'},
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
  
  }, 
  p: {
    fontSize: '16px',
    fontFamily: `san-serif`,
    fontWeight: 400
  },
  div: {
    flexDirection: 'column',
    border: '2px solid white',
    margin: 'auto',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    padding: '100px',
  },
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
    section: {
      lineHeight: '13px',
      backgroundColor: 'white',
      margin:' auto',
      padding: '10px 30px',
    }
   
}))
export default Email