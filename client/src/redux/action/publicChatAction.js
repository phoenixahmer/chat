import { ADD_PUBLIC_CHAT_REQUEST, ADD_PUBLIC_CHAT_SUCCESS, ADD_PUBLIC_CHAT_ERROR } from "../type/publicChatType"
import { client } from "../../websocket"

export const addPublicChatRequest = () => {
  return {
    type: ADD_PUBLIC_CHAT_REQUEST,
  }
}
export const addPublicChatSuccess = (newMessage) => {
  return {
    type: ADD_PUBLIC_CHAT_SUCCESS,
    payload: newMessage
  }
}
export const addPublicChatError = (error) => {
  return {
    type: ADD_PUBLIC_CHAT_ERROR,
    payload: error
  }
}

export const addChat = (chat, newMessage) => {
  return async (dispatch) => {
    dispatch(addPublicChatRequest())
    try {

      client.send(JSON.stringify({
        message: newMessage,
        token: localStorage.token
      }))

    } catch (error) {
      dispatch(addPublicChatError(error.message))
    }
  }
}