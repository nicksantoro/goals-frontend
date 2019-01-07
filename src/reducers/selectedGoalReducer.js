export const selectedGoalReducer = (selectedGoal = null, action) => {
  if (action.type === 'GOAL_SELECTED') {
    return action.payload;
  }
  return selectedGoal;
}