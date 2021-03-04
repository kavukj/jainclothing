import React from 'react';
import './cart-items.styles.scss';

const CartItem = ({item: {imageUrl,price,name,quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="Item Image"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;
