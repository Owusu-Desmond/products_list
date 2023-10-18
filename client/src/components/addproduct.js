import React, { useState, useRef } from "react";
import { addProduct } from "../redux/products/products";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // clear error and notification on input change
    const clearError = () => {
        setError("");
        setNotification("");
    };

    let formRef = useRef(null);

    const [productData, setProductData] = useState({
        sku: "",
        name: "",
        price: "",
        type: "",
        attributes: {
            size: "",
            weight: "",
            height: "",
            width: "",
            length: "",
        },
        checked: false,
    });

    const [error, setError] = useState("");
    const [notification, setNotification] = useState("");

    const handleInputChange = (e) => {
        clearError();
        const { id, value } = e.target;
        setProductData(prevProductData => {
            if (prevProductData.attributes.hasOwnProperty(id)) {
                return {
                    ...prevProductData,
                    attributes: { ...prevProductData.attributes, [id]: value }
                };
            }
            return { ...prevProductData, [id]: value };
        });
    };

    const handleProductTypeChange = (e) => {
        clearError();
        const { value } = e.target;
        setProductData({ ...productData, type: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (!productData.sku || !productData.name || !productData.price || !productData.type) {
            setError("Please, submit required data");
        } else if (
            (productData.type === "DVD" && !productData.attributes.size) ||
            (productData.type === "Book" && !productData.attributes.weight) ||
            (productData.type === "Furniture" &&
                (!productData.attributes.height || !productData.attributes.width || !productData.attributes.length))
        ) {
            setError("Please, provide the data of indicated type");
        } else {
            setNotification("Product saved successfully!");
            setProductData({
                sku: "",
                name: "",
                price: "",
                type: "",
                attributes: {
                    size: "",
                    weight: "",
                    height: "",
                    width: "",
                    length: "",
                },
                checked: false,
            });
            // Dispatch the action
            dispatch(addProduct(productData));
            navigate("/");
        }
    };

    return (
        <div>
            <form ref={formRef} id="product_form" onSubmit={handleSubmit}>
                <div>
                    <label>SKU</label>
                    <input type="text" id="sku" value={productData.sku} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" id="name" value={productData.name} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Price ($)</label>
                    <input type="number" id="price" value={productData.price} onChange={handleInputChange} required/>
                </div>
                <div>
                    <label>Type Switcher</label>
                    <select id="productType" value={productData.type} onChange={handleProductTypeChange} required>
                        <option value="">Type Switcher</option>
                        <option value="DVD" id="DVD">DVD</option>
                        <option value="Book" id="Book">Book</option>
                        <option value="Furniture" id="Furniture">Furniture</option>
                    </select>
                </div>
                {productData.type === "DVD" && (
                    <div className="option-container">
                        <div>
                            <label>Size (MB)</label>
                            <input type="number" id="size" value={productData.attributes.size} onChange={handleInputChange} required/>
                        </div>
                        <p>Please, provide size</p>
                    </div>
                )}
                {productData.type === "Book" && (
                    <div className="option-container">
                        <div>
                            <label>Weight (KG)</label>
                            <input type="number" id="weight" value={productData.attributes.weight} onChange={handleInputChange} required/>
                        </div>
                        <p>Please, provide weight</p>
                    </div>
                )}
                {productData.type === "Furniture" && (
                    <div className="option-container">
                        <div>
                            <label>Height (CM)</label>
                            <input type="number" id="height" value={productData.attributes.height} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label>Width (CM)</label>
                            <input type="number" id="width" value={productData.attributes.width} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label>Length (CM)</label>
                            <input type="number" id="length" value={productData.attributes.length} onChange={handleInputChange} required/>
                        </div>
                        <p>Please, provide dimensions</p>
                    </div>
                )}
                {error && <div style={{ color: "red" }}>{error}</div>}
                {notification && <div style={{ color: "green" }}>{notification}</div>}
            </form>
        </div>
    );
};

export default AddProduct;
