import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendGroupMessages } from "../../redux"

export default function GroupChatPanel() {

  const chat = useSelector(state => state.chat)
  const groupChat = useSelector(state => state.groupChat)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  const [message, setMessage] = useState("")

  const sendMessage = e => {
    if (e.key === 'Enter') {
      dispatch(sendGroupMessages(groupChat.activeGroup, message))
      setMessage("")
    }
  }

  return (
    groupChat.activeGroup
      ?
      <div>
        <h5>Group chat panel</h5>
        {chat.loading
          ? "....."
          : chat.chat.map && chat.chat.map(
            (v, i) => <p key={i} className={v.from === user._id
              ? "text-start"
              : "text-end"}>
              {v.message}</p>
          )}

        < div className="form-group">
          <input
            type="text"
            placeholder="message"
            className="form-control"
            value={message}
            onKeyDownCapture={sendMessage}
            onChange={(e) => { setMessage(e.target.value) }}
          />
        </div>
      </div>
      : <div><h5>first selet a group ...</h5></div>
  )
}
