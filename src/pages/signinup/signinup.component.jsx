import React from 'react';
import './signinup.style.scss';
import SignIn from '../../component/signin/signin.component';
import SignUp from '../signup/signup.component';
import { SignInAndSignUpContainer } from './signinup.styles';

const SignInUp = () => (
    <SignInAndSignUpContainer>
       <SignIn />
       <SignUp />
       </SignInAndSignUpContainer>
) 

export default SignInUp;