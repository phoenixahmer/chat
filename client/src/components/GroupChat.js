import GroupChatList from "./GroupChat/GroupChatList"
import AddGroupChat from "./GroupChat/AddGroupChat"
import GroupChatPanel from "./GroupChat/GroupChatPanel"
export default function GroupChat() {  
  return (
    <div>
      <h1>Group Chat</h1>
      <h5>Group list</h5>
      <GroupChatList />
      <AddGroupChat />
      <GroupChatPanel />
    </div>
  )
}
