import React from 'react';
import './checkout-item.styles.scss';
import {clearItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CheckoutItem = ({cartItem, clearItem}) => {
    const {imageUrl,price,name,quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item Image"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
