import React from "react";
import Product from "./product";

const Products = () => {

    const products = [
        {
            id: 1,
            sku: "123",
            name: "Product 1",
            price: 100,
            productType: "DVD",
            size: 100,
            weight: 100,
            height: 100,
            width: 100,
            length: 100,
        },
        {
            id: 2,
            sku: "456",
            name: "Product 2",
            price: 200,
            productType: "Book",
            size: 100,
            weight: 100,
            height: 100,
            width: 100,
            length: 100,
        },
        {
            id: 3,
            sku: "789",
            name: "Product 3",
            price: 300,
            productType: "Furniture",
            size: 100,
            weight: 100,
            height: 100,
            width: 100,
            length: 100,
        },
        {
            id: 4,
            sku: "133",
            name: "Product 4",
            price: 100,
            productType: "DVD",
            size: 100,
            weight: 100,
            height: 100,
            width: 100,
            length: 100,
        },
        {
            id: 5,
            sku: "453",
            name: "Product 5",
            price: 200,
            productType: "Book",
            size: 100,
            weight: 100,
            height: 100,
            width: 100,
            length: 100,
        }
    ];

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Products;
