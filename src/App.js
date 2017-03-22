import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Document from './components/document';
import Dashboard from './components/dashboard';
import viewDocs from './components/viewDocs';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    );
  }
}

export default App;
