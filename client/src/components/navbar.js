import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/products';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let formRef = useRef(null);

    useEffect(() => {
        formRef.current = document.getElementById('product_form');
    }, []); 

    const handleSaveClick = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })); // dispatch submit event on the form cancelable will allow to preventDefault and bubbles will
        }
    };

    const location = useLocation();

    if (location.pathname === '/') {
        return (
            <nav>
                <div>
                    <h2>Product List</h2>
                </div>
                <div className='nav-btn'>
                    <NavLink to="/addproduct">ADD</NavLink>
                    <NavLink to="/delete_product" id='delete-product-btn'>
                        MASS DELETE
                    </NavLink>
                </div>
            </nav>
        );
    }

    if (location.pathname === '/addproduct') {
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
