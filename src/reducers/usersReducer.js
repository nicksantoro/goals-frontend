const initialState = {
  user: {},
  isLoggedIn: false,
  loginError: false,
  error: "",
  goals: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    case 'USER_LOGIN_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true, loginError: false, goals: action.payload.goals };
    case 'USER_LOGIN_FAILED':
      return { ...state, user: {}, isLoggedIn: false, loginError: true, error: action.payload };
    case 'GET_AUTH_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true, goals: action.payload.goals };
    case 'GET_AUTH_FAILED':
      return { ...state, user: {}, isLoggedIn: false };
    case 'LOGOUT_SUCCESS':
      return { ...state, user: {}, isLoggedIn: false };
    case 'ADD_CHALLENGE_SUCCESS':
      console.log(action.payload)
      return { ...state, goals: [action.payload, ...state.goals] };
    case "COMPLETED_CHALLENGE_SUCCESS":
      console.log(action.payload)

      return { ...state, goals: action.payload };
    default:
      return state;
  }
}

