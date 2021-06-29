import axios from "axios"
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_OUT, SIGNUP_ERROR } from "../type/signupType"
import { loginSuccess } from "./loginAction"

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST
  }
}
export const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  }
}
export const signupOut = () => {
  return {
    type: SIGNUP_OUT,
  }
}
export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error
  }
}

export const signupUser = (formData) => {
  return async (dispatch) => {
    dispatch(signupRequest())
    try {
      let res = await axios.post("http://localhost:8080/user", formData)
      localStorage.setItem("token", res.data.token)
      dispatch(signupSuccess())
      dispatch(loginSuccess())
    } catch (error) {
      dispatch(signupError(error.response.data))
    }
  }
}