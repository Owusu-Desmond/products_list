import React from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/products/products";

const Product = ({ product }) => {
    const dispatch = useDispatch();

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

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        // dispatch updateProduct action
        dispatch(updateProduct(value));
    }

    return (
        <div className="product">
            {/* checkbox */} 
            <div className="product-checkbox">
                <input type="checkbox" value={SKU} className="delete-checkbox" onChange={handleCheckboxChange} />
            </div>
            <div >{SKU}</div>
            <div>{Name}</div>
            <div>{Price} $</div>
            <div>{productTypeDisplay()}</div>
        </div>
    );
}

export default Product;