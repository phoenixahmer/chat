import { ADD_PUBLIC_CHAT_REQUEST, ADD_PUBLIC_CHAT_SUCCESS, ADD_PUBLIC_CHAT_ERROR } from "../type/publicChatType"
import { client } from "../../websocket"
import { chatSuccess } from "./chatAction"

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
      client.onmessage = (message) => {
        const res = JSON.parse(message.data)
        dispatch(addPublicChatSuccess(res))

        const updatedChat = [...chat, res]
        console.log(updatedChat)
        dispatch(chatSuccess(updatedChat))
      }

    } catch (error) {
      dispatch(addPublicChatError(error.message))
    }
  }
}