import { combineReducers } from 'redux'
import { goalsReducer } from './goalsReducer'
import { selectedGoalReducer } from './selectedGoalReducer'
import taskListReducer from './taskListReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  goals: goalsReducer,
  selectedGoal: selectedGoalReducer,
  taskList: taskListReducer,
  users: usersReducer
});