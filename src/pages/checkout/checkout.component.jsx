import React from 'react'
import './checkout.styles.scss';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../component/checkout-items/checkout-item.component';
import StripeButton from '../../stripe/stripe.button';

const Checkout = ({cartItems, total}) => (
    <div className="checkout">
        <div className="heading">
            <div className="title">
                <span>Product</span>
            </div>
            <div className="title">
                <span>Description</span>
            </div>
            <div className="title">
                <span>Quantity</span>
            </div>
            <div className="title">
                <span>Price</span>
            </div>
            <div className="title">
                <span>Remove</span>
            </div>
        </div>
        <div className="items">
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        </div>
        <div className="total">
           Total : ${total}
        </div>
        <div className="test-warning">
            *Please use following details for card Payment:
            <br /><strong>Card Number:</strong> 4242 4242 4242 4242 <strong>EXP:</strong> 01/22 <strong>CVV:</strong> 123 
        </div>
        <StripeButton price={total} />
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
});
export default connect(mapStateToProps)(Checkout);