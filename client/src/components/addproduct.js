import React, { useState, useRef } from "react";

const AddProduct = () => {

    let formRef = useRef(null);

    const [productData, setProductData] = useState({
        sku: "",
        name: "",
        price: "",
        productType: "DVD",
        size: "",
        weight: "",
        height: "",
        width: "",
        length: "",
    });

    const [error, setError] = useState("");
    const [notification, setNotification] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProductData({ ...productData, [id]: value });
    };

    const handleProductTypeChange = (e) => {
        const { value } = e.target;
        setProductData({ ...productData, productType: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (!productData.sku || !productData.name || !productData.price) {
            setError("Please, submit required data");
        } else if (
            (productData.productType === "DVD" && !productData.size) ||
            (productData.productType === "Book" && !productData.weight) ||
            (productData.productType === "Furniture" &&
                (!productData.height || !productData.width || !productData.length))
        ) {
            setError("Please, provide the data of indicated type");
        } else {
            setNotification("Product saved successfully!");
            setProductData({
                sku: "",
                name: "",
                price: "",
                productType: "DVD",
                size: "",
                weight: "",
                height: "",
                width: "",
                length: "",
            });
        }
    };

    return (
        <div>
            <form ref={formRef} id="product_form" onSubmit={handleSubmit}>
                <div>
                    <label>SKU</label>
                    <input type="text" id="sku" value={productData.sku} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" id="name" value={productData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" id="price" value={productData.price} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Type Swither</label>
                    <select id="productType" value={productData.productType} onChange={handleProductTypeChange}>
                        <option value="DVD" id="DVD">DVD</option>
                        <option value="Book" id="Book">Book</option>
                        <option value="Furniture" id="Furniture">Furniture</option>
                    </select>
                </div>
                {productData.productType === "DVD" && (
                    <div id="size">
                        <label>Size</label>
                        <input type="text" id="size" value={productData.size} onChange={handleInputChange} />
                    </div>
                )}
                {productData.productType === "Book" && (
                    <div id="weight">
                        <label>Weight</label>
                        <input type="text" id="weight" value={productData.weight} onChange={handleInputChange} />
                    </div>
                )}
                {productData.productType === "Furniture" && (
                    <>
                        <div id="height">
                            <label>Height</label>
                            <input type="text" id="height" value={productData.height} onChange={handleInputChange} />
                        </div>
                        <div id="width">
                            <label>Width</label>
                            <input type="text" id="width" value={productData.width} onChange={handleInputChange} />
                        </div>
                        <div id="length">
                            <label>Length</label>
                            <input type="text" id="length" value={productData.length} onChange={handleInputChange} />
                        </div>
                    </>
                )}
                {error && <div style={{ color: "red" }}>{error}</div>}
                {notification && <div style={{ color: "green" }}>{notification}</div>}
            </form>
        </div>
    );
};

export default AddProduct;
