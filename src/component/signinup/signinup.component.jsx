import React from 'react';
import './signinup.style.scss';
import SignIn from '../../component/signin/signin.component';
import SignUp from '../signup/signup.component';

const Sign_In_Up = () => (
    <div className="signinup">
       <SignIn />
       <SignUp />
    </div>
) 

export default Sign_In_Up;