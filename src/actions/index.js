// Action creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import fetchAuth from '../apis/auth'

export const selectGoal = goal => {
  return {
    type: 'GOAL_SELECTED',
    payload: goal
  };
};

export const userLogin = (credentials, history) => {
  return async dispatch => {
    try {
      dispatch({ type: 'USER_LOGIN_PENDING' })
      let userJson = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      })
      let token = userJson.headers.get("authorization")
      let user = await userJson.json();
      localStorage.setItem('token', token)
      if (user.error === "username or password invalid"
        || user.error === "username and password required") {
        return dispatch({
          type: 'USER_LOGIN_FAILED',
          payload: user.error
        })
      }
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: { user }
      })
      // history.push(`/profile`, user)
      // return { token, user }
    } catch (err) {
      console.log(err)
    }
  }
}

export const getAuth = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'GET_AUTH_PENDING' })

      const token = localStorage.getItem('token')
      let user = await fetchAuth(token)

      dispatch({
        type: 'GET_AUTH_SUCCESS',
        payload: { user }
      })
      // history.push(`/profile`, user)
      // return { token, user }
    } catch (err) {
      localStorage.removeItem('token')
      dispatch({
        type: 'GET_AUTH_FAILED',
        payload: err.message
      })
    }
  }
}


export const fetchTasksAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchTasks());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchTasks = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_TASKS', payload: response.data })
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
};

// export const logOutUser = () => async dispatch => {
//   // const response = await jsonPlaceholder.get('/posts');
//   dispatch({ type: 'LOGOUT_SUCCESS', payload: response.data })
// };


// user log out
// remove token from local storage
// dispatch type user logout success
// --> reducer
// case user log out success
// set state user logged in to false

