import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    //It takes price in cents
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HRLTCIdaFBNhAvidRpNmE7VhHIX6w3zLIHVjGlvUMiQ35R3B4XCaJeHdOmWYXIkIZ3dOh5pF8gnULU0GFjCVFGL00jkV8mZ4l"
    const  onToken = (token) =>{
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckout 
            label ="Pay Now"
            name="Jain Clothings"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;