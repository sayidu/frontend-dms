import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

export default (
  <Route>
    <Route path="/" component={SignUp} />
    <Route path="/signIn"  component={SignIn} />
  </Route>
)