import axios from 'axios';

//React: Redirect once the user has logged in with react.react.dom
export function newUser(user) {
  return {
    type: 'NEW_USER_ADDED',
    user
  }
}

export function createUser(userData) {
  return dispatch => {
    return axios.post('/users', userData)
      .then((res) => {
        localStorage.setItem('signUpToken', res.data.token);
        dispatch(newUser(userData));
      })
  }
}