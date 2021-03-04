import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden , itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingLogo className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

//To calculate total quantity of items
const mapStateToProps = ({cart:{cartItems}}) => ({
    itemCount: cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity+cartItem.quantity , 0)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);