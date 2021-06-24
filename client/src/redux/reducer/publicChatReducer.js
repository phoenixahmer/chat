import { ADD_PUBLIC_CHAT_REQUEST, ADD_PUBLIC_CHAT_SUCCESS, ADD_PUBLIC_CHAT_ERROR } from "../type/publicChatType"

const initialState = {
  loading: true,
  newMessage: false,
  error: ""
}

export const publicChatReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PUBLIC_CHAT_REQUEST: return {
      loading: true,
      newMessage: false,
      error: ""
    }
    case ADD_PUBLIC_CHAT_SUCCESS: return {
      loading: false,
      newMessage: action.payload,
      error: false
    }
    case ADD_PUBLIC_CHAT_ERROR: return {
      loading: false,
      newMessage: false,
      error: action.payload
    }
    default: return state
  }
}