import axios from 'axios';

export function verifyUser(user){
   return {
      type: 'LOGIN_USER',
      user
   }
}

export function loginUser(userData){
  return dispatch => {
    return axios.post('/users/login', userData)
        .then((res) => {
            localStorage.setItem('loginToken', res.data.token);
            dispatch(verifyUser(userData));
        })
  }
}