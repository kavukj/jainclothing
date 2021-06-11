import React from 'react';
import './checkout-item.styles.scss';
import { clearItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { increaseItem, decreaseItem } from '../../redux/cart/cart.action';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, increaseItem, decreaseItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'></img>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <span className="price">{price}</span>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    increaseItem: item => dispatch(increaseItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
