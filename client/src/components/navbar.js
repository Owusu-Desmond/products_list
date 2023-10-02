import React, { useRef} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    let formRef = useRef(null); // reference to the form element

    const handleSaveClick = () => {
        formRef.current.submit();
    };

    const location = useLocation();

    if (location.pathname === '/') {
        return (
            <nav>
                <NavLink to="/addproduct">ADD</NavLink>
                <NavLink to="/delete_product" id='delete-product-btn'>
                    MASS DELETE
                </NavLink>
            </nav>
        );
    }

    if (location.pathname === '/addproduct') {
        return (
            <nav>
                <NavLink to="/addproduct">Product Add</NavLink>
                <button onClick={handleSaveClick} id='save-product-btn'>SAVE</button>
                <NavLink to="/">CANCEL</NavLink>
            </nav>
        );
    }
};

export default Navbar;
