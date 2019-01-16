import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import challengeReducer from './challengeReducer'
import { selectedGoalReducer } from './selectedGoalReducer'
import taskListReducer from './taskListReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  // form: formReducer,
  goals: challengeReducer,
  selectedGoal: selectedGoalReducer,
  taskList: taskListReducer,
  users: usersReducer
});



