import React from 'react';
import './checkout-item.styles.scss';
import {clearItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { increaseItem, decreaseItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({cartItem, clearItem,increaseItem, decreaseItem}) => {
    const {imageUrl,price,name,quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item"/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrow" onClick={()=> decreaseItem(cartItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={()=> increaseItem(cartItem)}>&#10095;</span>
            </div>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    increaseItem: item => dispatch(increaseItem(item)),
    decreaseItem : item => dispatch(decreaseItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
