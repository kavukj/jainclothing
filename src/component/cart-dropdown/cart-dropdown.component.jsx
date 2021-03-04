import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-items/cart-items.component';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem =>(
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <Button type="submit">Checkout</Button>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
});


export default connect(mapStateToProps)(CartDropdown);