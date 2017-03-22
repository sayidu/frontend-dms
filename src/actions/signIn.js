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
            localStorage.setItem('userName', res.data.existingUser);
            axios.defaults.headers.common['Authorization'] = res.data.token;
            dispatch(verifyUser(userData));
        })
  }
}