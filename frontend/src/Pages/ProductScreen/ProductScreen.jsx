import React, { useEffect, useReducer } from 'react'
import ProductScreenCard from './ProductScreenCard'
import axios from 'axios';
import Loading from '../../Components/Loading/Loading'
import { useParams } from 'react-router-dom'
import { getError } from '../../error';

const reducer = (state, action) => {
  switch(action.type) {
      case 'FETCH_REQUEST' :
          return{...state, loading: true}
      case 'FETCH_SUCCESS' :
          return{...state, product: action.payload, loading: false}
      case 'FETCH_FAIL' :
          return{...state, error: action.payload, loading: false}
          default:
              return state
  }
}

const ProductScreen = () => {

    const [{loading, error, product}, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: ''
  })

  const params = useParams()
  const {id} = params

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                const result = await axios.get(`http://localhost:5000/api/products/find/`+id)
                dispatch({type: 'FETCH_SUCCESS', payload: result.data})
            } catch(err) {
                dispatch({type: 'FETCH_FAIL', payload : getError(err)})
            }
        }
        fetchData();
    }, [id])

  return (
    <>
        {loading ? (<Loading /> ) : error ? (<h1>{error}</h1>) : (
            <ProductScreenCard  product={product}/>
        )}
    </>
  )
}

export default ProductScreen