export const FETCH_CHALLENGES_SUCCESS = "FETCH_CHALLENGES_SUCCESS"
export const ADD_CHALLENGE_SUCCESS = "ADD_CHALLENGE_SUCCESS"
export const DELETE_CHALLENGE_SUCCESS = "DELETE_CHALLENGE_SUCCESS"
export const UPDATE_CHALLENGE_SUCCESS = "UPDATE_CHALLENGE_SUCCESS"
export const FILTER_CHALLENGES = "FILTER_CHALLENGES"
export const ADD_LIKE_SUCCESS = "ADD_LIKE_SUCCESS"
export const ADD_LIKE_FAILURE = "ADD_LIKE_FAILURE"
export const JOIN_CHALLENGE_SUCCESS = "JOIN_CHALLENGE_SUCCESS"
export const COMPLETED_CHALLENGE_SUCCESS = "COMPLETED_CHALLENGE_SUCCESS"
export const ADD_LIKE = "ADD_LIKE"

export const fetchChallenges = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://chirpy4-backend.herokuapp.com/goals')
      const challenges = await response.json()
      dispatch({
        type: FETCH_CHALLENGES_SUCCESS,
        payload: challenges
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const addChallenge = (payload) => {
  return async dispatch => {
    try {
      console.log(payload)
      let response = await fetch('https://chirpy4-backend.herokuapp.com/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      let challenge = await response.json();
      dispatch({ type: ADD_CHALLENGE_SUCCESS, payload: challenge[0] })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const deleteChallenge = (id) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://chirpy4-backend.herokuapp.com/goals/${id}
      `, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        })
      const challenge = await response.json()
      dispatch({
        type: DELETE_CHALLENGE_SUCCESS,
        payload: challenge
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const joinChallenge = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    //console.log('JOIN CHALLENGE GETSTATE:', state)
    ///const { user } = getState();
    const payload = { users_id: state.users.user.id }
    try {
      const response = await fetch(`https://chirpy4-backend.herokuapp.com/goals/${id}/join
      `, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
      const challenge = await response.json()
      dispatch({
        type: JOIN_CHALLENGE_SUCCESS,
        payload: challenge
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const updateChallenge = (id, payload) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://chirpy4-backend.herokuapp.com/goals/${id}
      `, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
      const result = await response.json()
      dispatch({
        type: UPDATE_CHALLENGE_SUCCESS,
        payload: result[0],
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const markCompleted = (id) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://chirpy4-backend.herokuapp.com/goals/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ completed: true })
        }
      )
      const goal = await response.json()
      dispatch({
        type: COMPLETED_CHALLENGE_SUCCESS,
        payload: goal,
      })
    }
    catch (error) {
      return error
    }
  }
}


export const addLike = (challengeId) => {
  return async dispatch => {
    try {
      let response = await fetch(`https://chirpy4-backend.herokuapp.com/goals/${challengeId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      let challenge = await response.json();
      console.log(challenge)
      dispatch({ type: ADD_LIKE_SUCCESS, payload: challengeId })
    }
    catch (error) {
      console.log(error)
    }
  }
};

// export const filterChallenge = (category) => {
//   return dispatch => {
//     return dispatch({
//       type: FILTER_CHALLENGES,
//       payload: category
//     })
//   }
// }

