import { ArrowBack, DeleteOutline } from '@mui/icons-material';
import { styled } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import DiamondIcon from '@mui/icons-material/Diamond'
import { Store } from '../../store'

const Wish = () => {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {
    wish: {wishItems},
  } = state

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "WISH_REMOVE_ITEM", 
      payload: item 
    })
  }
  return (
    <>
      <WishContainer>
       <WishTop>
          <Link to='/'>
              <DiamondIcon sx={{fontSize: '42px', color: 'red'}} />
          </Link>
         <h1>My Wish List</h1>
         <Link to='/category' style={{textDecoration: 'none', color: '#ff0000'}}><ArrowBack /><span>Go to category</span></Link> 
       </WishTop>
       {wishItems.length === 0 ? (<h3 style={{color: 'red' }}>Your Wish List Is Empty.</h3>) : (
        <div style={{display: 'flex',width: 'auto',height: 'auto', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
        {wishItems.map((item) => (
          <Wishes key={item._id}>
            <WishHead>
              <button onClick={()=> removeItemHandler(item)}><DeleteOutline sx={{fontSize: '25px', color: 'red'}} /> </button>
            </WishHead>
            <WishImage>
              <Link to={`/products/${item._id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
            </WishImage>
            <WishFooter>
              <RowOne>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </RowOne>
              <RowTwo>
                <span>${item.price}</span>
                 <button>Add to Cart</button>
              </RowTwo>
            </WishFooter>
          </Wishes>
        ))}
        </div>
        )}
      </WishContainer>
    </>
  )
}
const WishContainer = styled('div')(({theme})=> ({
  width: '100%',
  height: '100%',
  padding: '20px',
}))
const WishTop = styled('div')(({theme})=> ({
  display: 'flex',
  justifyContent: 'space-around',
  h1: {
    fontSize: '50px',
    fontWeight : 700,
    color: '#ff0000',
    fontStyle: 'italic',
  },
  a: {
    textDecoration: 'none',
  },
  span: {
    fontSize: '19px',
    fontWeight: 500,
   '&:hover': {
      textDecoration: 'underline'
   }
  }
}))
const Wishes = styled('div')(({theme})=> ({
  display: 'flex',
  flexDirection: 'column',
 boxShadow: theme.shadows[4],
 borderRadius: theme.spacing(2),
 width: '220px',
 height: 'auto',
 padding: '10px',
 flexWrap: 'wrap',
 margin: '10px',
}))
const WishHead = styled('div')(({theme})=> ({
  textAlign: 'right',
  button: {
    border: 'none',
    background: 'inherit',
    cursor: 'pointer',
  }
}))
const WishImage = styled('div')(({theme})=> ({
  padding: '5px',
  img:{
    objectFit: 'cover',
    width: '200px',
    borderRadius: theme.spacing(0.8),
    height: '150px',
  '&:hover':{
    boxShadow: theme.shadows[3],
  }
  }
}))
const WishFooter = styled('div')(({theme})=> ({}))
const RowOne = styled('div')(({theme})=> ({
  lineHeight: '13px',
}))
const RowTwo = styled('div')(({theme})=> ({
  marginTop: '10px',
  display:'flex',
  justifyContent: 'space-between',
  span: {
    fontSize: '20px',

  },
  button: {
    color: '#ff0000',
    borderRadius: theme.spacing(1),
    padding: '8px',
    border: '2px solid #f44336',
    background: 'inherit',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:hover':{
      boxShadow: theme.shadows[3]
    }
  }
}))
export default Wish