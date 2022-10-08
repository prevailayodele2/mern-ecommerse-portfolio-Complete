import { loginFailure, loginStart, loginSuccess, signupStart,signupSuccess,signupFaliure } from "./UserSlice"
import axios from 'axios'
export const login = async (dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
export const register = async (dispatch,user)=>{
    dispatch(signupStart())
    try {
        const res = await axios.post('http://localhost:5000/api/auth/register', user)
        dispatch(signupSuccess(res.data))
    } catch (error) {
        dispatch(signupFaliure())
    }
}
