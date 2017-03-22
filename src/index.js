import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from "axios";
import App from './App';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
// import authToken from './utils/setAuthToken';
import { composeWithDevTools } from 'redux-devtools-extension';
// import routes from './routes';
// import './index.css';

axios.defaults.baseURL = "http://localhost:8000/";

const store = createStore(
  rootReducers,
   composeWithDevTools(
     applyMiddleware(thunk)
   )
);

if(localStorage.loginToken){
  axios.defaults.headers.common['Authorization'] = localStorage.loginToken;
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
       <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

