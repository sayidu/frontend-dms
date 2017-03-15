import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';

class SignIn extends Component {
  render () {
    return (
          <form>
              <div className="input-field col s10">
                   <input placeholder="Email" id="email" type="email" className="validate"/>
              </div>
              <div className="input-field col s10">
                   <i className="material-icons prefix">lock</i>
                   <input placeholder="Password" id="password" type="password" className="validate"/>
              </div>
              <p>
                  <a className="waves-effect waves-light btn" id="button">Sign In</a>
              </p>
         </form>
     );
  }
}

export default SignIn;
