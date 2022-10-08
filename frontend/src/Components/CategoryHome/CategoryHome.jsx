import { styled } from '@mui/material/styles'
import axios from 'axios'
import '../../App.css'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import logger from 'use-reducer-logger'

const CategoryHomeContainer = styled('div')(({theme}) => ({
    width: '100%',
    height:'100%',
    justifyContent: 'center',
    alighnItems: 'center',
    backgroundColor: '#fdffff',
    [theme.breakpoints.down('laptop')] : {
        width: 'auto',
        flexWrap: 'wrap',
        height: 'auto',
    }
}))
const CategoryRow = styled('div')(({theme}) => ({
   display: 'flex',
   justifyContent: 'center',
   margin: '20px',
   alignItems: 'center',
   textAlign: 'center',
   [theme.breakpoints.down('tablet')] : {
    display: 'grid',
    height: 'auto',
   },
}))
const CategoryAll = styled('div')(({theme}) => ({
     margin: '20px',
     textAlign: 'right',
    
     'a': {
        fontSize: '22px',
        fontWeight: 400,
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',

        }
     }
}))
const CategoryImage = styled('div')(({theme}) => ({
    'img': {
        width: '240px',
        boxShadow: theme.shadows[4],
        borderRadius: theme.spacing(2.5),
        objectFit: 'cover',
        height: '250px',
        
    }
}))
const CategoryItem = styled('div')(({theme}) => ({
    display: 'flex',
    top: 0,
    left: 0,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   position:'absolute',
}))
const CategoryMap = styled('div')(({theme}) => ({
    display: 'flex',
    flex: 1,
    margin:'3px',
    position: 'relative',
}))
const Text = styled('h2')(({theme}) => ({
    fontStyle: 'italic',
    fontSize: '28px',
}))
const CategoryName = styled('h1')(({theme}) => ({
    fontStyle: 'italic',
    fontSize: '38px',
    fontWeight: 700,
    margin: '15px',
    color: '#3e2723'
}))
const Button = styled('button')(({theme}) => ({
    background: 'transparent',
    border: '2px solid navy',
    transition: 'all 1.8s ease-out',
    borderRadius: theme.spacing(2),
    padding: '9px',
    'a': {
        textDecoration: 'none',
        color: 'black',
        fontSize: '20px',
        fontWeight: 500,
    },
    '&:hover': {
        backgroundColor: 'navy',
        color: 'white',
    }
    
}))

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST' :
            return{...state, loading: true}
        case 'FETCH_SUCCESS' :
            return{...state, categoryHomeItem: action.payload, loading: false}
        case 'FETCH_FAIL' :
            return{...state, error: action.payload, loading: false}
            default:
                return state
    }
  }

const CategoryHome = () => {
   
    const [{loading, error, categoryHomeItem}, dispatch] = useReducer(logger(reducer), {
        categoryHomeItem: [],
        loading: true,
        error: ''
      })

    useEffect(()  => {
        const fetchData = async () => {
          dispatch({type: 'FETCH_REQUEST'})
          try {
            const result = await axios.get('http://localhost:5000/api/categoryHome')
            dispatch({type: 'FETCH_SUCCESS', payload: result.data})
          } catch(err) {
            dispatch({type: 'FETCH_FAIL', payload : err.message})
          }
    
        }
    
        fetchData();
      }, [])
  return (
    <>
        <CategoryHomeContainer>
                <CategoryName>Top Categories</CategoryName>
                <CategoryAll><Link to='/category'>View All</Link></CategoryAll>
                <CategoryRow>
                        {loading ? (<img src='/images/spinner.gif' alt='loading' /> ) : error ? (<h1>{error}</h1>) : (
                            categoryHomeItem.slice(0, 5).map((item) => (
                                <CategoryMap>
                                    <CategoryImage>
                                    <img className='blur' src={item.image} alt='category' />
                                    </CategoryImage>
                                    <CategoryItem>
                                        <Text>{item.title}</Text>
                                        <Button>
                                            <Link to={item.link} >
                                                Shop Now
                                            </Link> 
                                        </Button>
                                    </CategoryItem>
                                </CategoryMap>
                        ))
                        )}  
                </CategoryRow>

        </CategoryHomeContainer>
    </>
  )
}

export default CategoryHome