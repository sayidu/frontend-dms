import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/signIn';


class SignIn extends React.Component {
  constructor(props){
      super(props);
      this.state= {
          email: '',
          password: ''
      }
  }

  handleChange = (e) => {
     this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
  }
  render () {
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
         </form>
     );
  }
}

export default connect(null, { loginUser })(SignIn);
