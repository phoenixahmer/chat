import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGroupChatList, setActiveGroup, addGroupEnabled ,getGroupMessages} from '../../redux'

export default function GroupChatList() {

  const groupList = useSelector(state => state.groupChat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGroupChatList())
  }, [dispatch])

  if (groupList.groupListloading) {
    return (
      <div>
        <button className="btn border">Loading groups ...</button>
      </div>
    )
  }

  else if (!groupList.groupListError) {
    return (
      <div>
        {groupList.groupList.map((item, i) =>
          <button
            key={i}
            className={`btn border ${groupList.activeGroup === item._id && "btn-primary"}`}
            onClick={() => { dispatch(setActiveGroup(item._id)) }}
          >{item.name}</button>
        )}
        <button
          className={`btn border ms-4 ${groupList.addGroupEnabled && "btn-primary"}`}
          onClick={() => { dispatch(addGroupEnabled(!groupList.addGroupEnabled)) }}
        >Add new Group +</button>
        <button onClick={() => { dispatch(getGroupMessages(groupList.activeGroup)) }}>{groupList.activeGroup}</button>
      </div >)
  }

  else if (groupList.groupListError) {
    return <button className="btn border">{groupList.groupListError.message}</button>
  }
}
