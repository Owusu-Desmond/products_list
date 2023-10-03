import React from "react";

const Product = ({ product }) => {
    const { SKU, Name, Price, Type, Size, Weight, Height, Width, Length } = product;

    const productTypeDisplay = () => {
        switch (Type) {
            case "DVD":
                return <div>Size: {Size} MB</div>;
            case "Book":
                return <div>Weight: {Weight} Kg</div>;
            case "Furniture":
                return <div>Dimension: {Height}x{Width}x{Length}</div>;
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
            <div >{SKU}</div>
            <div>{Name}</div>
            <div>{Price} $</div>
            <div>{productTypeDisplay()}</div>
        </div>
    );
}

export default Product;