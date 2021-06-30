import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGroupChatList, setActiveGroup } from '../../redux'

export default function GroupChatList() {

  const groupList = useSelector(state => state.groupChat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGroupChatList())
  }, [dispatch])

  if (groupList.groupListloading) {
    return <button className="btn border">Loading groups ...</button>
  }

  else if (!groupList.groupListError) {
    return groupList.groupList.map((item, i) =>
      <button
        key={i}
        className={`btn border ${groupList.activeGroup === item._id && "btn-primary"}`}
        onClick={() => { dispatch(setActiveGroup(item._id)) }}
      >{item.name}</button>
    )
  }

  else if (groupList.groupListError) {
    return <button className="btn border">{groupList.groupListError.message}</button>
  }
}
