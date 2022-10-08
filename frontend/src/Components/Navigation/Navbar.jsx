import React, { useContext } from 'react'
import DiamondIcon from '@mui/icons-material/Diamond'
import { styled} from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { alpha, Badge, Fab, IconButton, InputBase, MenuItem} from '@mui/material'
import { AccountCircle,  FavoriteBorder,  Login, ShoppingCart} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../store'
import { useSelector } from 'react-redux'
import Profile from '../ProfilePage/Profile'


const NavContainer = styled('nav')(({ theme }) => ({
   height: 'auto',
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   gap: '30px',
   textAlign: 'center',
   flexDirection: 'row',
   borderBottom: '2px solid #1313'
}))
const NavLogo = styled('div')(({ theme }) => ({
   flex: 1, 
   justifyContent: 'center',
  'svg': {
    textDecoration: 'none',
    cursor: 'pointer',
  },'a': {
    color: 'black'
  },
}))
const NavItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 4,
  textAlign: 'center',
}))
const ItemThree = styled('div')(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'flex-end',
  marginLeft: '10px',
  flexDirection: 'row',
  textAlign: 'center',
  alignItems: 'center',
  'a': {
    display: 'flex',
    color: 'black',
    flexDirection: 'row',
    textDecoration:'none',
    'svg': {
      marginTop: '19px'
    }
  }
 
}))
const ItemFour = styled('div')(({ theme }) => ({

  alignItems: 'center', justifyContent: 'flex-end',
  marginleft: '10px',
  cursor: 'pointer',
}))
const UserText = styled('p')(({ theme }) => ({
  marginLeft: '10px',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0px'
}))
const Itemfive = styled('p')(({ theme }) => ({
 justifyContent: 'flex-end',
 margin: '10px',
}))
const NavText = styled('p')(({ theme }) => ({
  marginLeft: '18px',
  fontSize: '20px',
  fontWeight: 500,
  cursor: 'pointer',
  letterSpacing: '0px'
}))



const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store); 
  const { cart, wish } = state
  const [anchor, setAnchor] = React.useState(null)
  const [show, setShow] = React.useState(false)
  const [mobileAnchor, setMobileAnchor] = React.useState(null)
  
  
   const navigate = useNavigate()

  const handleMenuOpen = (event) => {
    setAnchor(event.currentTarget)
  } 
  const handleMobileMenuClose = () => {
    setMobileAnchor(null)
  }
  const handleMobileMenuOpen = (event) => {
    setMobileAnchor(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchor(null)
    handleMobileMenuClose()
  }
  
  
  const  user  = useSelector((state) => state.user);

  // const renderMenu = (
  //   <Menu
  //    anchorEl={anchor}
  //    anchorOrigin={{
  //      vertical: 'top',
  //      horizontal: 'right'
  //    }}
  //    id='primary-search-menu'
  //    keepMounted
  //    transformOrigin={{
  //      vertical: 'top',
  //      horizontal: 'right'
  //    }}
  //    open={Boolean(anchor)}
  //    onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
  //   </Menu>
  // )

  const renderMobileMenu = (
    <Menu
    anchorEl={mobileAnchor}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    id='mobile-menu'
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    open={Boolean(mobileAnchor)}
    onClose={handleMobileMenuClose}
   >
     <MenuItem>
       <IconButton size='large' aria-label='Show 4 new mails' color='inherit'>
         <Badge badgeContent={4} color="error">
           <MailIcon />
         </Badge>
       </IconButton> 
       <p>Mail</p>
     </MenuItem>
     <MenuItem>
       <IconButton size='large' aria-label='Show 17 new notification' color='inherit'>
         <Badge badgeContent={17} color="error">
           <NotificationsIcon />
         </Badge>
       </IconButton> 
       <p>Notification</p>
     </MenuItem>
   </Menu>
  )
  return (
    <>
      <NavContainer>
        <NavLogo aria-label='Logo' >
          <Link to='/'>
            <DiamondIcon sx={{fontSize: '40px'}} />
          </Link>
        </NavLogo>
        <NavItem>
          <NavText>About</NavText>
          <NavText>Contact</NavText>
        </NavItem>
            <ItemThree>
             <Link to='/signin'>
                <Login sx={{fontSize: '25px', marginTop: '15px'}} />
                <UserText>{user ? 'Hi '+ user.currentUser.username :  'Signin'}</UserText>
             </Link>
          </ItemThree>
            <ItemFour 
            aria-label='Show menu Bar'
            aria-controls='mobile-menu'
            aria-haspopup='true'
            color='inherit'
            onClick={handleMobileMenuOpen}
            >
             <Badge badgeContent={'.'} color="error">
              <MenuIcon />
             </Badge>
            </ItemFour>
          <Itemfive>
              <IconButton size='large' 
                aria-label='Account of current User'
                color='inherit'
                onClick={()=> setShow((noshow)=> !noshow)}
                aria-controls='primary-search-menu'
                aria-haspopup='true'
                >
                
                  <AccountCircle sx={{fontSize: '34px'}} />
              </IconButton>
            </Itemfive>
        {renderMobileMenu}
        {/* {renderMenu} */}
      </NavContainer>
      <ShopingCart>
        <Fab sx={{position: 'fixed'}} onClick={() => navigate('/wish')} aria-label='wish'>
          <Badge badgeContent={wish.wishItems.length > 0 && (wish.wishItems.length) } color="error">
            <FavoriteBorder />
          </Badge>
        </Fab>
      </ShopingCart>
      <ShopingCartTWO>
      <Fab sx={{position: 'fixed'}} onClick={() => navigate('/cart')} aria-label='cart'>
          <Badge badgeContent={cart.cartItems.length > 0 && (cart.cartItems.reduce((a, c) => a + c.quantity, 0))} color="error">
            <ShoppingCart />
          </Badge>
      </Fab>
      </ShopingCartTWO>
      {show && <Profile />}
    </>
  )
}
const ShopingCart = styled('div')(({theme}) => ({
  position: 'absolute',
  marginRight: '80px',
  right: 0,
  textAlign: 'right',
  marign:'20px',
}))
const ShopingCartTWO = styled('div')(({theme}) => ({
  position: 'absolute',
  marginRight: '80px',
  marginTop: '60px',
  right: 0,
  textAlign: 'right',
  marign:'20px',
}))

export default Navbar
