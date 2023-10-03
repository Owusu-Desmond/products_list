import products from "./products/products";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        products: products,
    },
});