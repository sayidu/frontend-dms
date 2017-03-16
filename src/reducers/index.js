import { combineReducers } from 'redux';
import signUp from './signUp';
import signIn from './signIn';

export default combineReducers({
  signUp,
  signIn
});