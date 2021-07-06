import {
  GROUP_LIST_REQUEST,
  GROUP_LIST_SUCCESS,
  GROUP_LIST_ERROR,

  ADD_GROUP_ENABLED,
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_ERROR,

  SET_ACTIVE_GROUP,

  GET_GROUP_MESSAGES_REQUEST,
  GET_GROUP_MESSAGES_SUCCESS,
  GET_GROUP_MESSAGES_ERROR,

  SEND_GROUP_MESSAGES_REQUEST,
  SEND_GROUP_MESSAGES_SUCCESS,
  SEND_GROUP_MESSAGES_ERROR,
} from "./groupChatType"

const initialState = {
  groupListloading: true,
  groupList: [],
  groupListError: false,

  addGroupEnabled: false,
  addGrouploading: false,
  groupAdded: false,
  addGroupError: false,

  activeGroup: "",

  groupMessagesloading: false,
  groupMessages: [],
  getGroupMessagesError: "",

  sendGroupMessagesloading: false,
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
    case ADD_GROUP_ENABLED: return {
      ...state,
      addGroupEnabled: action.payload,
    }
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
    case GET_GROUP_MESSAGES_REQUEST: return {
      ...state,
      groupMessagesloading: true,
    }
    case GET_GROUP_MESSAGES_SUCCESS: return {
      ...state,
      groupMessagesloading: false,
      groupMessages: {
        ...state.groupMessages,
        [action.payload.groupId]: action.payload.messages
      }
    }
    case GET_GROUP_MESSAGES_ERROR: return {
      ...state,
      groupMessagesloading: false,
      getGroupMessagesError: action.payload
    }

    // sending group messages
    case SEND_GROUP_MESSAGES_REQUEST: return {
      ...state,
      sendGroupMessagesloading: true,
    }
    case SEND_GROUP_MESSAGES_SUCCESS: return {
      ...state,
      sendGroupMessagesloading: false,
    }
    case SEND_GROUP_MESSAGES_ERROR: return {
      ...state,
      sendGroupMessagesloading: false,
      sendGroupMessagesError: action.payload
    }

    default: return state
  }
}
