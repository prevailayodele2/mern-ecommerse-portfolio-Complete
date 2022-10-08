import React from 'react'
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors'
import ProductScreen from './Pages/ProductScreen/ProductScreen';
import Categoryshop from './Components/CategoryPage/Categoryshop';
import Cart from './Pages/Cart/Cart';
import Wish from './Pages/Wish/Wish';
import Testone from './Testone';
import Signin from './Components/Signin/Signin';
import Signup from './Components/SignUp/Signup';
import Successpage from './Pages/Success/Successpage';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import Email from './Components/ForgetPassword/Email';
import NewPassword from './Components/ForgetPassword/NewPassword';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme({
  palette: {
    common: {
     white: '#fff'
    },
    primary: {
      main: '#795548'
    },
    secondary: {
      main: red[300]
    },
    
  },
  breakpoints:  {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    }
  }
})

function App() {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <>
      <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-center' limit={1} pauseOnHover/>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/products/:id' element={<ProductScreen /> } />
         <Route path='/category' element={<Categoryshop /> } />
         <Route path='/cart' element={<Cart /> } />
         <Route path='/wish' element={<Wish /> } />
         <Route path='/test' element={<Testone /> } />
         <Route path='/signin' element={<Signin /> } />
         <Route path='/signup' element={ <Signup /> } />
         <Route path='/success' element={<Successpage /> } />
         <Route path='/forgetpassword' element={<Email /> } />
         <Route path='/auth/newpassword/:token' element={<NewPassword /> } />
       </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
