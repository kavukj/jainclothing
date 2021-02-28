import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, ...otherProps}) => (
    <div className="group">
        <input className="input" onChange={handleChange} {...otherProps} />
    </div>
)

export default FormInput;