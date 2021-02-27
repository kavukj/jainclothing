import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            email:"",
            password:""
        });
    }

    handleChange(event){
        const {name,value}= event.target;
        this.setState({ [name]:value });
        //Here we are setting state dynamically. Means name will get value of input element name defined in html
        //If name is emaail,email state will be set to value
        //Is name is password, password state will change to value
    }

    render(){
        return(
            <div className="SignIn">
                <h1 className="title">I already have an account</h1>
                <span className="subtitle">SignIn with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label className="label">Email</label>
                    <FormInput handleChange={this.handleChange} name="email" type="email" required value={this.state.email} />
                    <label className="label">Password</label>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button type="submit" isGoogleSignIn onClick ={signInWithGoogle}>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;