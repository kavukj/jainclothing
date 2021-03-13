import React from 'react';
import './signinup.style.scss';
import SignIn from '../../component/signin/signin.component';
import SignUp from '../signup/signup.component';

const SignInUp = () => (
    <div className="signinup">
       <SignIn />
       <SignUp />
    </div>
) 

export default SignInUp;