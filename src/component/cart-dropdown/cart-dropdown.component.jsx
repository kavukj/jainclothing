import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <Button type="submit">Checkout</Button>
        </div>
    )
}

export default CartDropdown;