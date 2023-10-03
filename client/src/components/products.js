import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/products";
import Product from "./product";

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect");
        dispatch(fetchProducts());
    }, []);

    const products = useSelector((state) => state.products.products);

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.sku} product={product} />
            ))}
        </div>
    );
}

export default Products;
