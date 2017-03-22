import { combineReducers } from 'redux';
import signUp from './signUp';
import signIn from './signIn';
import document from './document';

export default combineReducers({
  signUp,
  signIn,
  document
});