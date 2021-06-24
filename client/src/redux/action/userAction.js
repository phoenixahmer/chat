import axios from "axios"
import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "../type/userType"

export const userRequest = () => {
  return {
    type: USER_REQUEST
  }
}
export const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payload: user
  }
}
export const userError = (error) => {
  return {
    type: USER_ERROR,
    payload: error
  }
}

export const getUser = () => {
  return async (dispatch) => {
    dispatch(userRequest())
    try {
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "x-auth": localStorage.getItem("token")
      }
      let res = await axios.get("http://localhost:8080/user/", { headers: headers })
      res.data === "jwt expired"
        ? dispatch(userError(res.data))
        : dispatch(userSuccess(res.data))
    } catch (error) {
      dispatch(userError(error.message))
    }
  }
}