import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { goalsReducer } from './goalsReducer'
import { selectedGoalReducer } from './selectedGoalReducer'
import taskListReducer from './taskListReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  form: formReducer,
  goals: goalsReducer,
  selectedGoal: selectedGoalReducer,
  taskList: taskListReducer,
  users: usersReducer
});