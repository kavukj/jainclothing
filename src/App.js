import './App.css';
import { Route, Switch , Redirect } from 'react-router-dom';
import HomePage from './homepage/homepage.component';
import Shop from './component/shop/shop.component';
import Header from './component/header/header.component';
import Sign_In_Up from './component/signinup/signinup.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { Component } from 'react';
import { setCurrentUser } from './redux/users/user.action';
import Checkout from '../src/pages/checkout/checkout.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/users/user.selector';
import { createStructuredSelector } from 'reselect';

//function App() {
  //We will make it class component as we need state to store user login state.
class App extends Component{
  /**constructor(){
    super();
    //By default this user will be null and will change everytime authentication state is changed and a user is logged in or out.
    this.state={
      currentUser:null
    };
  }*/
  //unsubscribeFromAuth = null;

  componentDidMount(){
    //to fetch the authentication state,we have a firebase function which takes a function with parameter as the user who changed the auth state.
    auth.onAuthStateChanged(async user => {
      //createUserProfileDoc(user);
      /*this.setState({
        currentUser:user
      })*/
      //Set state using firebase data.
      if(user){
        const userRef = await createUserProfileDoc(user);
        console.log("Before sign in ",this.state);
        //This have a function to read snapshot inside reference whihc returns snapshot object.
        userRef.onSnapshot(snapShot => {
          /**this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data() //to save other data
            }
          },()=>{
            console.log("After sign in ",this.state);
          });*/
          this.props.setUser({
            id:snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else{
        this.props.setUser(user);
        console.log("After sign out ",this.state);
      }
      
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signinup" render={()=>
            this.props.currentUser ? (<Redirect to ='/' />) : 
            (<Sign_In_Up />)
          }  />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

//Now a problem is that, we can access signup page even after login. So we need redirect for that.
//For redirect, we need to pass value of state. So we need mapStateToProps
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  //We pass the prop name that we want to dispatch the action
  setUser:user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
