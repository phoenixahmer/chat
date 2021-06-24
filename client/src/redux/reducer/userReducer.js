import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "../type/userType"

const initialState = {
  loading: false,
  user: [],
  error: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case USER_REQUEST: return {
      ...state,
      loading: true,
    }
    case USER_SUCCESS: return {
      loading: false,
      user: action.payload,
      error: false
    }
    case USER_ERROR: return {
      loading: false,
      user: [],
      error: action.payload
    }

    default: return state
  }
}

