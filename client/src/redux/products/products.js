import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// backend deployed at https://bundanatechnologies.com/react/

const PRODUCTS_URL = 'http://localhost/products_list/server/';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(PRODUCTS_URL);
    // add checked property to each product
    response.data.forEach(product => {
        product.checked = false;
    });
    return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
    const response = await axios.post(PRODUCTS_URL, product);
    return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productIds) => {
    const response = await axios.delete(PRODUCTS_URL, { data: { skus: productIds } });
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null,
        error: null
    },
    reducers: {
        updateProduct: (state, action) => {
            const productSKU = action.payload;
            const updatedProducts = state.products.map(product => {
                if (product.SKU === productSKU) {
                    return {
                        ...product,
                        checked: !product.checked
                    };
                }
                return product;
            });
            state.products = updatedProducts;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { updateProduct } = productsSlice.actions;

export default productsSlice.reducer;