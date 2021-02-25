import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => (
    <div className="header">
        <div className="logo">
            <Link to="/">
                <img src={logo}/>
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/signin">Sign In</Link>
            <Link className="option" to="/contact">Contact Us</Link>
        </div>
    </div>
)

export default Header;