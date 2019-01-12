import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Static from './components/Static/Static'
import NavBar from './components/NavBar/NavBar'




// import GoalList from './components/Goals/GoalList'
// import GoalDeadline from './components/Goals/GoalDeadline'
// import TaskList from './components/Tasks/TaskList'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Static} />
          {/* <Static />
          <GoalList />
          <GoalDeadline />
          <TaskList /> */}
        </div>
      </Router>
    );
  }
}

export default App;
