import axios from "axios"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_OUT, LOGIN_ERROR } from "../type/loginType"

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}
export const loginOut = () => {
  return {
    type: LOGIN_OUT,
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export const loginUser = (formData) => {
  return async (dispatch) => {
    dispatch(loginRequest())
    try {
      let res = await axios.post("http://localhost:8080/user/login", formData)
      localStorage.setItem("token", res.data.token)
      dispatch(loginSuccess())
      console.log(res)
    } catch (error) {
      console.log(error.message)
      dispatch(loginError(error.message))
    }
  }
}