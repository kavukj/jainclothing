import React from 'react';
import './button.styles.scss';

//We need to create a custom button component for a condition with google button. So, we will add custom classname
const Button =({children, inverted, isGoogleSignIn, ...otherProps}) =>(
    <button className = {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-button' : ''} button`} {...otherProps}>
        {children}
    </button>
)

export default Button;