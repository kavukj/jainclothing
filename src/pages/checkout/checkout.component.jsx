import React from 'react'
import './checkout.styles.scss';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../component/checkout-items/checkout-item.component';
import StripeButton from '../../stripe/stripe.button';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';

const Checkout = ({cartItems, total}) => (
    <CheckoutPageContainer>
       <CheckoutHeaderContainer> 
       <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
            </CheckoutHeaderContainer> 
        
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123 
        </WarningContainer>
        <StripeButton price={total} />
        </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
});
export default connect(mapStateToProps)(Checkout);