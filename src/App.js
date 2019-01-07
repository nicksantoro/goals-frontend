import React, { Component } from 'react';
import './App.css';
import Static from './components/Static/Static'

import GoalList from './components/Goals/GoalList'
import GoalDeadline from './components/Goals/GoalDeadline'
import TaskList from './components/Tasks/TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Static />
        <GoalList />
        <GoalDeadline />
        <TaskList />

      </div>
    );
  }
}

export default App;
