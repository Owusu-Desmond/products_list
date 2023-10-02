import React from "react";

const Product = ({ product }) => {
    const { sku, name, price, productType, size, weight, height, width, length } = product;

    const productTypeDisplay = () => {
        switch (productType) {
            case "DVD":
                return <div>{size} MB</div>;
            case "Book":
                return <div>{weight} Kg</div>;
            case "Furniture":
                return <div>{height}x{width}x{length}</div>;
            default:
                return null;
        }
    };

    return (
        <div className="product">
            <div className="product__sku">{sku}</div>
            <div className="product__name">{name}</div>
            <div className="product__price">{price}</div>
            <div className="product__productType">{productType}</div>
            <div className="product__productTypeDisplay">{productTypeDisplay()}</div>
        </div>
    );
}

export default Product;