import React from "react";

const Product = ({ product }) => {
    const { sku, name, price, productType, size, weight, height, width, length } = product;

    const productTypeDisplay = () => {
        switch (productType) {
            case "DVD":
                return <div>Size: {size} MB</div>;
            case "Book":
                return <div>Weight: {weight} Kg</div>;
            case "Furniture":
                return <div>Dimension: {height}x{width}x{length}</div>;
            default:
                return null;
        }
    };

    return (
        <div className="product">
            {/* checkbox */}
            <div className="product-checkbox">
                <input type="checkbox" className="delete-checkbox"/>
            </div>
            <div >{sku}</div>
            <div>{name}</div>
            <div>{price} $</div>
            <div>{productTypeDisplay()}</div>
        </div>
    );
}

export default Product;