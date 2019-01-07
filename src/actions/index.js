// Action creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const selectGoal = goal => {
  return {
    type: 'GOAL_SELECTED',
    payload: goal
  };
};

export const fetchTasks = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_TASKS', payload: response.data })
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
}

// --------- memoize ---------- //

// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }

// // memoize outside of the action creator

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data })
// });