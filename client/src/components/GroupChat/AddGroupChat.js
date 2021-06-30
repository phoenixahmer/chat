import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addGroupChat } from "../../redux"

export default function AddGroupChat() {

  const [groupName, setGroupName] = useState("")
  const groupChat = useSelector(state => state.groupChat)
  const dispatch = useDispatch()
  const addGroup = async (e) => {
    if (e.key === 'Enter') {
      dispatch(addGroupChat(groupName))
      setGroupName("")
    }
  }
  return (
    <div>
      <div className="form-group">
        <label>add new group</label>
        <input
          type="text"
          placeholder="new chat group name"
          className="form-control"
          value={groupName}
          onKeyDownCapture={addGroup}
          readOnly={groupChat.addGrouploading ? true : false}
          onChange={(e) => { setGroupName(e.target.value) }}
        />
        <small className="text-muted">
          {groupChat.addGroupError.message && groupChat.addGroupError.message}
        </small>
      </div>
    </div>
  )
}
