import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingLogo className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);