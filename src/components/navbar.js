import React, { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/products/products';

const Navbar = () => {
    let formRef = useRef(null);
    const products = useSelector((state) => state.products.products);
    let dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        formRef.current = document.getElementById('product_form');
    }, [location.pathname]); // update formRef.current when location.pathname changes

    const handleSaveClick = (e) => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })); // dispatch submit event on the form cancelable will allow to preventDefault and bubbles will
        }
    };

    const handleDeleteClick = () => {
        // return products SKU as an array that are checked
        const checkedProductsSKU = products.filter(product => product.checked).map(product => product.SKU);
        dispatch(deleteProduct(checkedProductsSKU));
    };

    const isProductsChecked = products.filter(product => product.checked).length === 0;

    if (location.pathname === '/') {
        return (
            <nav>
                <div>
                    <h2>Product List</h2>
                </div>
                <div className='nav-btn'>
                    <NavLink to="/addproduct">ADD</NavLink>
                    <button id='delete-product-btn' disabled={isProductsChecked} onClick={handleDeleteClick}>MASS DELETE</button>
                </div>
            </nav>
        );
    }

    if (location.pathname === '/add-product') {
        return (
            <nav>
                <div>
                    <h2>Product Add</h2>
                </div>
                <div className='nav-btn'>
                    <button onClick={handleSaveClick} className='save-product-btn'>Save</button>
                    <NavLink to="/">Cancel</NavLink>
                </div>
            </nav>
        );
    }
};

export default Navbar;
