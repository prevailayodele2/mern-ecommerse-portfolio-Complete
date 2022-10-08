import {createSlice} from '@reduxjs/toolkit'


const cartSilce = createSlice({
    name: 'cart',
    initialState: {
        product: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addproduct:stat
    }
})

