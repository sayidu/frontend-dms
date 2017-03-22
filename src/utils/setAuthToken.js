import axios from 'axios';

export default function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
    console.log("Token is assigned", token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}