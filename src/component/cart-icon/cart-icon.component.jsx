import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartQuantity } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

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
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartQuantity
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);