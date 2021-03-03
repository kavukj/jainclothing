import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({currentUser}) => (
    <div className="header">
        <div className="logo">
            <Link to="/">
                <img src={logo}/>
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact Us</Link>
            {
                currentUser ?
                <Link className="option" onClick={() => auth.signOut()}>Sign Out</Link>
                :
                <Link className="option" to="/signinup">Sign In</Link>
            }
            {
                currentUser ?
                <div className="name">{currentUser.displayName}</div>
                :
                null
            }
        </div>
    </div>
)
//this name can be anything but this is standard with redux
const mapPropsToState = state => ({
    currentUser:state.user.currentUser
})
export default connect(mapPropsToState)(Header);