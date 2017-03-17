import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/signIn';
import { Redirect } from 'react-router-dom';

let view;

class SignIn extends React.Component {
  constructor(props){
      super(props);
      this.state= {
          email: '',
          password: '',
          done: false
      }
  }

  handleChange = (e) => {
     this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state).then(() => {
        this.setState({done: true});
    });
  }
  render () {
     if(this.state.done === true) {
         view=  <Redirect to="/document"/>
      }
    return (
          <form onSubmit={this.handleSubmit}>
              <div className="input-field col s10">
                   <input placeholder="Email" name="email"  onChange={this.handleChange} className="validate" required/>
              </div>
              <div className="input-field col s10">
                   <i className="material-icons prefix">lock</i>
                   <input placeholder="Password" name="password" type="password" onChange={this.handleChange} className="validate" required/>
              </div>
              <p>
                  <input type="submit" value="Sign In" className="waves-effect waves-light btn" />
              </p>
                       {view}
         </form>
     );
  }
}

export default connect(null, { loginUser })(SignIn);
