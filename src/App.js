import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Document from './components/document';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/document" component={Document}/>
      </div>
    );
  }
}

export default App;
