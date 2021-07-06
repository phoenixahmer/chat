import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendGroupMessages } from "../../redux"

export default function GroupChatPanel() {

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
        {groupChat.groupMessagesloading
          ? "....."
          : groupChat.groupMessages[groupChat.activeGroup].map(
            // console.log("attach user id to identify sneder")
            (v, i) => <p key={i} className={v.from === user._id
              ? "text-start"
              : "text-end"}>
              {v}</p>
          )
        }

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
