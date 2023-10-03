import React, { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    let formRef = useRef(null); // reference to the form element

    // Assign the formRef after the component is mounted
    useEffect(() => {
        formRef.current = document.getElementById('product_form');
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    const handleSaveClick = () => {
        if (formRef.current) {
            formRef.current.submit();
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
                    <button onClick={handleSaveClick} className='save-product-btn'>SAVE</button>
                    <NavLink to="/">CANCEL</NavLink>
                </div>
            </nav>
        );
    }
};

export default Navbar;
