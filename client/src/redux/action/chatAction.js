import axios from "axios"
import { CHAT_REQUEST, CHAT_SUCCESS, CHAT_ERROR } from "../type/chatType"

export const chatRequest = () => {
  return {
    type: CHAT_REQUEST,
  }
}
export const chatSuccess = (chat) => {
  return {
    type: CHAT_SUCCESS,
    payload: chat
  }
}
export const chatError = (error) => {
  return {
    type: CHAT_ERROR,
    payload: error
  }
}

export const getChat = () => {
  return async (dispatch) => {
    dispatch(chatRequest())
    try {
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "x-auth": localStorage.getItem("token")
      }
      let res = await axios.get("http://localhost:8080/chat/", { headers })
      dispatch(chatSuccess(res.data))
    } catch (error) {
      dispatch(chatError(error.message))
    }
  }
}

export const updateChat = (updatedChat) => {
  return async (dispatch) => {
    dispatch(chatSuccess(updatedChat))
  }
}