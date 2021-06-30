import axios from 'axios'
import { GroupClient } from "../../websocket"

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

// getting group list
export const groupListRequest = () => {
  return {
    type: GROUP_LIST_REQUEST
  }
}
export const groupListSuccess = (groups) => {
  return {
    type: GROUP_LIST_SUCCESS,
    payload: groups
  }
}
export const groupListError = (error) => {
  return {
    type: GROUP_LIST_ERROR,
    payload: error
  }
}

export const getGroupChatList = () => {
  return async (dispatch) => {
    dispatch(groupListRequest)

    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "x-auth": localStorage.getItem("token")
    }

    try {
      let groupList = await axios.get("http://localhost:8080/chat/groupChatList", { headers })
      dispatch(groupListSuccess(groupList.data))
    } catch (error) {
      dispatch(groupListError(error.response.data))
    }
  }
}

// adding group
export const addGroupRequest = () => {
  return {
    type: ADD_GROUP_REQUEST
  }
}
export const addGroupSuccess = () => {
  return {
    type: ADD_GROUP_SUCCESS,
  }
}
export const addGroupError = (error) => {
  return {
    type: ADD_GROUP_ERROR,
    payload: error
  }
}

export const addGroupChat = (groupName) => {
  return async (dispatch) => {
    dispatch(addGroupRequest())

    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "x-auth": localStorage.getItem("token")
    }
    const body = {
      name: groupName
    }

    try {
      await axios.post("http://localhost:8080/chat/groupChatList", body, { headers })
      dispatch(addGroupSuccess())
      dispatch(getGroupChatList())
    } catch (error) {
      dispatch(addGroupError(error.response.data))
    }

  }
}

// set active group
export const setActiveGroup = (activeGroup) => {
  return {
    type: SET_ACTIVE_GROUP,
    payload: activeGroup
  }
}

// sending group messages
export const sendGroupMessagesRequest = () => {
  return {
    type: SEND_GROUP_MESSAGES_REQUEST
  }
}
export const sendGroupMessagesSuccess = (groupMessages) => {
  return {
    type: SEND_GROUP_MESSAGES_SUCCESS,
    payload: groupMessages
  }
}
export const sendGroupMessagesError = (error) => {
  return {
    type: SEND_GROUP_MESSAGES_ERROR,
    payload: error
  }
}

export const sendGroupMessages = (groupId, message) => {
  return async (dispatch) => {
    dispatch(sendGroupMessagesRequest())

    try {
      GroupClient.send(JSON.stringify({
        groupId,
        message,
        token: localStorage.token
      }))
      dispatch(sendGroupMessagesSuccess())
    } catch (error) {
      dispatch(sendGroupMessagesError(error.response.data))
    }

  }
}