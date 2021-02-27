import React from 'react';
import './button.styles.scss';

//We need to create a custom button component for a condition with google button. So, we will add custom classname
const Button =({children, isGoogleSignIn, ...otherProps}) =>(
    <button className = {`${isGoogleSignIn ? 'google-button' : ''} button`} {...otherProps}>
        {children}
    </button>
)

export default Button;