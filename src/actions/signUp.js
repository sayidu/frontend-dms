import axios from 'axios';

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
              debugger;
              dispatch(newUser(res.data));
            })
  }
}