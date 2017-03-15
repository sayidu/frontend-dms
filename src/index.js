import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
// import routes from './routes';
// import './index.css';


const store = createStore(function (){});

ReactDOM.render(
  <Router>
    <Provider store={store}>
       <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


