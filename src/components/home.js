import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';
import '../App.css';
let userView;


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      changedView : 'signUp'
    };
  }

  signUpView = (e) => {
    this.setState({ changedView : 'signUp'});
  }

  signInView = (e) => {;
    this.setState({changedView : 'signIn'});
  }

  render() {
      if(this.state.changedView === 'signIn') {
          userView = <SignIn> </SignIn>
      } else {
          userView =  <SignUp> </SignUp>
      }
    return (
       <div className="container">
         <div className="row">
            <div className="col s6" id="left">
              <h1> Welcome to Document Management System </h1>
              <i id="book" className="fa fa-book fa-5x" aria-hidden="true"></i>
            </div>
            <div className="col s6" id="right">
              <div className="accessButtons right-align">
                <a className="waves-effect waves-light btn" id="button1"  onClick={this.signUpView}> Sign Up </a>
                <a className="waves-effect waves-light btn" id="button2"  onClick={this.signInView}>Sign In </a>
              </div>
                {userView}
            </div>
          </div>
      </div>
    );
  }
}


export default Home;
