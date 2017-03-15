import React from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import './App.css';

class App extends React.Component {
  render() {
    return (
       <div className="container">
         <div className="row">
            <div className="col s6" id="left">
              <h1> Welcome to Document Management System </h1>
              <i id="book" className="fa fa-book fa-5x" aria-hidden="true"></i>
            </div>
            <div className="col s6" id="right">
            <div>
              <div className="accessButtons right-align">
                <Link to="/"  className="waves-effect waves-light btn" id="button1"> Sign Up </Link>
                <Link to="/signIn" className="waves-effect waves-light btn" id="button2">Sign In </Link>
              </div>
            </div>
            <div>
            </div>
            <Route path="/" component={SignUp} exact/>
            <Route path="/signIn"  component={SignIn} />
            </div>
         </div>
      </div>
    );
  }
}

export default App;
