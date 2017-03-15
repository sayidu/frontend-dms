import React, { PropTypes, Component } from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import actions from '../store/actions';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let newState = this.state;
    console.log("New state", newState);
    // this.store.dispatch(actions.signUpAction({
    //     userName: this.state.user.userName,
    //     firstName: this.state.user.firstName,
    //     lastName: this.state.user.lastName,
    //     email: this.state.user.email,
    //     password: this.state.user.password
    // })).then((info) => {
    //   newState = this.state;
    //   console.log('This User was created', newState);
    // });
  }

 componentDidMount() {
    this.store = this.context.store;
    console.log("Mounting store", this.store);
 }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
              <div className="input-field col s10">
                   <input placeholder="User Name" name="userName" onChange={this.handleChange} value={this.state.userName} type="text" />
              </div>
              <div className="input-field col s10">
                   <input placeholder="First Name"  onChange={this.handleChange}  value={this.state.firstName} name="firstName" type="text" className="validate"/>
              </div>
              <div className="input-field col s10">
                   <input placeholder="Last Name" onChange={this.handleChange}  value={this.state.lastName} name="lastName" type="text" className="validate"/>
              </div>
              <div className="input-field col s10">
                   <input placeholder="Email" name="email"  onChange={this.handleChange} value={this.state.email} type="email" className="validate"/>
              </div>
              <div className="input-field col s10">
                   <i className="material-icons prefix">lock</i>
                   <input placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} type="password" className="validate"/>
                  <p>
                      <input type="submit" value="Sign Up" className="waves-effect waves-light btn" />
                 </p>
              </div>
         </form>
    );
  }
}

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({actions}, dispatch);
}

export default connect(null,mapDispatchToProps) (SignUp);
*/
export default SignUp;