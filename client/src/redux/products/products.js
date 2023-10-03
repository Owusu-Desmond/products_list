import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCT_URL = 'http://localhost/products_list/products_list/server/api.php';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(PRODUCT_URL);
    return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
    console.log(product);
    const response = await axios.post(PRODUCT_URL, product);
    return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productIds) => {
    const response = await axios.delete(PRODUCT_URL, { data: { ids: productIds } });
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            return {
                ...state,
                status: 'succeeded',
                products: action.payload
            };
        },
        [fetchProducts.rejected]: (state, action) => {
            return {
                ...state,
                status: 'failed',
                error: action.error.message
            };
        },
        [addProduct.pending]: (state, action) => {
            return {
                ...state,
                status: 'loading'
            };
        },
        [addProduct.fulfilled]: (state, action) => {
            return {
                ...state,
                status: 'succeeded',
                products: state.products.push(action.payload)
            };
        },
        [addProduct.rejected]: (state, action) => {
            return {
                ...state,
                status: 'failed',
                error: action.error.message
            };
        },
        [deleteProduct.pending]: (state, action) => {
            return {
                ...state,
                status: 'loading'
            };
        },
        [deleteProduct.fulfilled]: (state, action) => {
            return {
                ...state,
                status: 'succeeded',
                products: state.products.filter(product => !action.payload.includes(product.id))
            }
        },
        [deleteProduct.rejected]: (state, action) => {
            return {
                ...state,
                status: 'failed',
                error: action.error.message
            };
        }
    }
});

export default productsSlice.reducer;