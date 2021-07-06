import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGroupChatList, setActiveGroup, addGroupEnabled, getGroupMessages } from '../../redux'
import { GroupClient } from '../../websocket'

export default function GroupChatList() {

  const groupChat = useSelector(state => state.groupChat)
  const dispatch = useDispatch()

  useEffect(() => {
    GroupClient.onopen = () => { console.log('webSocket Client Connected') }
    dispatch(getGroupChatList())
  }, [dispatch])


  useEffect(() => {
    GroupClient.onmessage = (message) => {
      const res = JSON.parse(message.data)
      console.log(res)
      // const updatedChat = [...chat.chat, res]
      // dispatch(chatSuccess(updatedChat))
    }
  }, [])

  const onClick = (groupId) => {
    dispatch(setActiveGroup(groupId))
    if (!groupChat.groupMessages[groupId]) {
      dispatch(getGroupMessages(groupId))
    }
  }
  if (groupChat.groupListloading) {
    return (
      <div>
        <button className="btn border">Loading groups ...</button>
      </div>
    )
  }

  else if (!groupChat.groupListError) {
    return (
      <div>
        {groupChat.groupList.map((item, i) =>
          <button
            key={i}
            className={`btn border ${groupChat.activeGroup === item._id && "btn-primary"}`}
            onClick={() => { onClick(item._id) }}
          >{item.name}</button>
        )
        }
        <button
          className={`btn border ms-4 ${groupChat.addGroupEnabled && "btn-primary"}`}
          onClick={() => { dispatch(addGroupEnabled(!groupChat.addGroupEnabled)) }}
        >Add new Group +</button>
      </div >)
  }

  else if (groupChat.groupListError) {
    return <button className="btn border">{groupChat.groupListError.message}</button>
  }
}
