import { CHAT_REQUEST, CHAT_SUCCESS, CHAT_ERROR } from "../type/chatType"

const initialState = {
  loading: true,
  chat: [],
  error: ""
}

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHAT_REQUEST: return {
      loading: true,
      chat: [],
      error: ""
    }
    case CHAT_SUCCESS: return {
      loading: false,
      chat: action.payload,
      error: ""
    }
    case CHAT_ERROR: return {
      loading: false,
      chat: [],
      error: action.payload
    }
    default: return state
  }
}
