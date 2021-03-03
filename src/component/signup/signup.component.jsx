import React from 'react';
import './signup.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth,createUserProfileDoc } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPass:""
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    
    async handleSubmit(event){
        event.preventDefault();
        const { displayName,email,password,confirmPass } = this.state;
        if(password !== confirmPass){
            alert("Password should match Confirm Password");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            console.log(user);
            await createUserProfileDoc(user, {displayName});
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPass:""
            })
        }catch(error){
            console.log("Error registering new user",console.error.message)
;        }
    }
    handleChange(event){
        const { name, value } = event.target;
        this.setState({[name]:value});
        console.log(this.state);
    }

    render(){
        return(
            <div className="signup">
                <h1 className="title">New User? Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Name: </label>
                    <FormInput type="text" onChange={this.handleChange} name="displayName" value={this.state.displayName} required/>
                    <label className="label">Email: </label>
                    <FormInput type="email" onChange={this.handleChange} name="email" value={this.state.email} required/>
                    <label className="label">Password: </label>
                    <FormInput type="password" onChange={this.handleChange} name="password" value={this.state.password} required/>
                    <label className="label">Confirm Password: </label>
                    <FormInput type="password" onChange={this.handleChange} name="confirmPass" value={this.state.confirmPass} required/>
                    <Button type="submit">Register</Button>
                </form>
            </div>
        );
    }
}
export default SignUp;