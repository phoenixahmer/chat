import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { client } from "../websocket"
import { addChat, getChat, chatSuccess } from "../redux"

export default function Chat() {

  const chat = useSelector(state => state.chat)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState("")

  const sendMessage = e => {
    if (e.key === 'Enter') {
      dispatch(addChat(newMessage))
      setNewMessage("")
    }
  }

  useEffect(() => {
    client.onopen = () => { console.log('webSocket Client Connected') }
    dispatch(getChat())
  }, [dispatch])

  useEffect(() => {
    client.onmessage = (message) => {
      const res = JSON.parse(message.data)
      const updatedChat = [...chat.chat, res]
      dispatch(chatSuccess(updatedChat))
    }
  }, [chat, dispatch])

  return (
    <div>
      <h1>chat</h1>
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
          value={newMessage}
          onKeyDownCapture={sendMessage}
          onChange={(e) => { setNewMessage(e.target.value) }}
        />
      </div>
    </div >
  )
}
