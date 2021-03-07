import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-items/cart-items.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems , history }) => {
    return (
        <div className="cart-dropdown">
            {
                cartItems.length ? (

                    <div className="cart-items">
                        {
                            cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            ))
                        }
                        <Button type="submit" onClick={()=>history.push("/checkout")}>Checkout</Button>
                    </div>
                )
                :
                    <span className="empty">Your cart is empty</span>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));