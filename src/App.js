import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Home from './components/Static/Home'
import NavBar from './components/NavBar/NavBar'
import ProfilePage from './components/Profile/ProfilePage'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={ProfilePage} />
        </div>
      </Router>
    );
  }
}

export default App;
