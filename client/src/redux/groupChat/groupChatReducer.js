import {
  GROUP_LIST_REQUEST,
  GROUP_LIST_SUCCESS,
  GROUP_LIST_ERROR,

  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_ERROR,

  SET_ACTIVE_GROUP,

  SEND_GROUP_MESSAGES_REQUEST,
  SEND_GROUP_MESSAGES_SUCCESS,
  SEND_GROUP_MESSAGES_ERROR,
} from "./groupChatType"

const initialState = {
  groupListloading: true,
  groupList: [],
  groupListError: false,

  addGrouploading: false,
  groupAdded: false,
  addGroupError: false,

  activeGroup: "",

  sendGroupMessagesloading: false,
  groupMessages: [],
  sendGroupMessagesError: false,
}

export const groupChatReducer = (state = initialState, action) => {
  switch (action.type) {
    // group list
    case GROUP_LIST_REQUEST: return {
      ...state,
      groupListloading: true,
    }
    case GROUP_LIST_SUCCESS: return {
      ...state,
      groupListloading: false,
      groupList: action.payload,
    }
    case GROUP_LIST_ERROR: return {
      ...state,
      groupListloading: false,
      groupListError: action.payload
    }
    // adding group
    case ADD_GROUP_REQUEST: return {
      ...state,
      addGrouploading: true,
    }
    case ADD_GROUP_SUCCESS: return {
      ...state,
      addGrouploading: false,
      groupAdded: true,
    }
    case ADD_GROUP_ERROR: return {
      ...state,
      addGrouploading: false,
      addGroupError: action.payload
    }

    // set active group
    case SET_ACTIVE_GROUP: return {
      ...state,
      activeGroup: action.payload
    }

    // getting group messages
    case SEND_GROUP_MESSAGES_REQUEST: return {
      ...state,
      sendGroupMessagesloading: true,
    }
    case SEND_GROUP_MESSAGES_SUCCESS: return {
      ...state,
      sendGroupMessagesloading: false,
      groupMessages: action.payload,
    }
    case SEND_GROUP_MESSAGES_ERROR: return {
      ...state,
      sendGroupMessagesloading: false,
      sendGroupMessagesError: action.payload
    }

    default: return state
  }
}
