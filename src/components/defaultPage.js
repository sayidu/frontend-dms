import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
//import _ from '../styles/main.scss';

class DefaultPage extends Component {
  render () {
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
                <Link to="/signIn"className="waves-effect waves-light btn" id="button2">Sign In </Link>
              </div>
            </div>
            <div>
              {this.props.children}
            </div>
            </div>
         </div>
      </div>
    );
  }
}

DefaultPage.propTypes = {
  children: PropTypes.node
};

export default DefaultPage;
