import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAllProducts = createAsyncThunk('fetch-all-products',async(apiUrl)=>{
    const response = await axios.get(apiUrl)
    console.log(response.data)
    return response.data;


})


const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        fetchStatus:''
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.data=action.payload
            state.fetchStatus='success'
        }).addCase(fetchAllProducts.pending,(state)=>{
            state.fetchStatus='loading'
        }).addCase(fetchAllProducts.rejected,(state)=>{
            state.fetchStatus='error'
        })
    },

})


export default productSlice;