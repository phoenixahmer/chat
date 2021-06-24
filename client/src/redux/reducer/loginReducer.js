import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_OUT, LOGIN_ERROR } from "../type/loginType"

let loggedInInitialState = false
if (localStorage.token) loggedInInitialState = true
const initialState = {
  loading: false,
  loggedIn: loggedInInitialState,
  error: ""
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: return {
      loading: true,
      loggedIn: false,
      error: ""
    }
    case LOGIN_SUCCESS: return {
      loading: false,
      loggedIn: true,
      error: ""
    }
    case LOGIN_OUT: return {
      loading: false,
      loggedIn: false,
      error: ""
    }
    case LOGIN_ERROR: return {
      loading: false,
      loggedIn: false,
      error: action.payload
    }

    default: return state
  }
}

