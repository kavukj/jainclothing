import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
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
                <CartIcon />
                {
                    hidden ? null : <CartDropdown />
                }
            </div>
        </div>
    )
}
//this name can be anything but this is standard with redux
/**const mapPropsToState = state => ({
    currentUser:state.user.currentUser
})*/

//this is the method to destruct nested components: {user:{currentUser} means user.currentUser
const mapPropsToState = (state) => ({
    currentUser: state.user.currentUser,
    hidden: selectCartHidden(state)
})
export default connect(mapPropsToState)(Header);