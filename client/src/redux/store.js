import products from "./product/products";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        products: products,
    },
});