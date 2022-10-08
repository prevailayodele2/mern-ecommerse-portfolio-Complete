import { styled } from '@mui/material/styles'
import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import logger from 'use-reducer-logger'
import Advert from './Advert/Advert'
import ItemSlider from './ItemSlider'


const Containerr = styled('div')(({theme}) => ({
 width: '100vw',
 position: 'relative',
 height: 'auto',
}))
const ContainerRow = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row'
}))
// const ContainerColOne= styled('div')(({theme}) => ({
//    diplay:' flex',
//    margin: '15px',
//    boxShadow:theme.shadows[2],
//    borderRadius: '9px',
//    background: 'white',
//    width: '290px',
//    [theme.breakpoints.down('tablet')] : {
//     justifyContent: 'center',
//     height: 'auto'
//    }
// }))
const ContainerColTwo = styled('div')(({theme}) => ({
 padding: '32px',
 marginRight: '60px',
 background: 'white',
 borderRadius: '7px',
 boxShadow:theme.shadows[5],
 height: 'auto',
 width: 'auto',

}))

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST' :
            return{...state, loading: true}
        case 'FETCH_SUCCESS' :
            return{...state, slider: action.payload, loading: false}
        case 'FETCH_FAIL' :
            return{...state, error: action.payload, loading: false}
            default:
                return state
    }
  }


const Container = () => {
    const [{loading, error, slider}, dispatch] = useReducer(logger(reducer), {
        slider: [],
        loading: true,
        error: ''
    })

    useEffect(()  => {
        const fetchData = async () => {
          dispatch({type: 'FETCH_REQUEST'})
          try {
            const result = await axios.get('http://localhost:5000/api/slider')
            dispatch({type: 'FETCH_SUCCESS', payload: result.data})
          } catch(err) {
            dispatch({type: 'FETCH_FAIL', payload : err.message})
          }
    
        }
    
        fetchData();
      }, [])
  return (
    <>
        <Containerr>
            {loading ? (<img style={{width: '200px', justifyContent: 'center'}} src='/images/spinner1.gif' alt='loading' /> ) : error ? (<h1>{error}</h1>) : (
                <ContainerRow>
                    {/* <ContainerColOne><ItemSlider /> </ContainerColOne> */}
                    <ContainerColTwo> <Advert slider={slider} /> </ContainerColTwo>
                </ContainerRow>
            )}
        </Containerr>

    </>
  )
}

export default Container