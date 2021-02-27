import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange,label, ...otherProps}) => (
    <div className="group">
        <input className="input" onChange={handleChange} {...otherProps} />
    </div>
)

export default FormInput;