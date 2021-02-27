import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './homepage/homepage.component';
import Shop from './component/shop/shop.component';
import Header from './component/header/header.component';
import Sign_In_Up from './component/signinup/signinup.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';

//function App() {
  //We will make it class component as we need state to store user login state.
class App extends Component{
  constructor(){
    super();
    //By default this user will be null and will change everytime authentication state is changed and a user is logged in or out.
    this.state={
      currentUser:null
    };
  }

  //unsubscribeFromAuth = null;

  componentDidMount(){
    //to fetch the authentication state,we have a firebase function which takes a function with parameter as the user who changed the auth state.
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  //one problem is , google will not automatically logout even after closing the browser if we dont manuualy signout.
  //To prevent this, we have method which by default is null. We change its value while mounting and remove again while unmounting.

  componentWillUnmount(){
    //this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signinup" component={Sign_In_Up} />
      </div>
    );
  }
}

export default App;
