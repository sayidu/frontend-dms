import React from 'react';
import { connect } from 'react-redux'
import { createUser } from '../actions/signUp';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userState: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 2
      }
  }

//It autobinds.
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
              <div className="input-field col s10">
                   <input placeholder="User Name" name="username" required onChange={this.handleChange}  type="text" />
              </div>
              <div className="input-field col s10">
                   <input placeholder="First Name"  onChange={this.handleChange}  required  name="firstName" type="text" className="validate"/>
              </div>
              <div className="input-field col s10">
                   <input placeholder="Last Name" onChange={this.handleChange} required  name="lastName" type="text" className="validate"/>
              </div>
              <div className="input-field col s10">
                   <input placeholder="Email" name="email"  onChange={this.handleChange} required   type="email" className="validate"/>
              </div>
              <div className="input-field col s10">
                    <i className="material-icons">lock</i>
                   <input placeholder="Password" name="password" onChange={this.handleChange}  required type="password" className="validate"/>
              </div>
                  <p>
                      <input type="submit" value="Sign Up" className="waves-effect waves-light btn" />
                 </p>

         </form>
    );
  }
}

export default connect(null, { createUser })(SignUp);
