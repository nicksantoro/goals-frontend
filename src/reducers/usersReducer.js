const initialState = {
  user: {},
  isLoggedIn: false,
  loginError: false,
  error: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    case 'USER_LOGIN_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true, loginError: false };
    case 'USER_LOGIN_FAILED':
      return { ...state, user: {}, isLoggedIn: false, loginError: true, error: action.payload };
    case 'GET_AUTH_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true };
    case 'GET_AUTH_FAILED':
      return { ...state, user: {}, isLoggedIn: false };
    default:
      return state;
  }
}

