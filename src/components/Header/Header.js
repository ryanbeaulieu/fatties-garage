import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const header = (props) => {
    return (
        <header className="Header">
            <img src={require('../../assets/images/logo.png')} alt="Fattie's Garage Logo" id="brand-logo" />
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/shop" exact>Shop</NavLink>
                <NavLink to="/contact" exact>Contact</NavLink>
            </nav>
        </header>
    )
}

export default header;