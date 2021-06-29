import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_OUT, SIGNUP_ERROR } from "../type/signupType"

let signedUpInitialState = false
if (localStorage.token) signedUpInitialState = true
const initialState = {
  loading: false,
  signedUp: signedUpInitialState,
  error: ""
}

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: return {
      loading: true,
      signedUp: false,
      error: ""
    }
    case SIGNUP_SUCCESS: return {
      loading: false,
      signedUp: true,
      error: ""
    }
    case SIGNUP_OUT: return {
      loading: false,
      signedUp: false,
      error: ""
    }
    case SIGNUP_ERROR: return {
      loading: false,
      signedUp: false,
      error: action.payload
    }

    default: return state
  }
}

