import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function GroupChat() {
  const [groupChat, setGroupChat] = useState([
    { _id: "60dacb2fa1a5442dec271d75", greatedBy: "60d9768980ebd7007cccfcfe", name: "group 1", date: "2021-06-29T07:26:39.640Z", },
    { _id: "60dacb2fa1a5442dec271d75", greatedBy: "60d9768980ebd7007cccfcfe", name: "group 1", date: "2021-06-29T07:26:39.640Z", },

  ])




  const x = async () => {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "x-auth": localStorage.getItem("token")
    }
    // let z = await axios.get("http://localhost:8080/chat/groupChatList", { headers })
    // setGroupChat(z.data)
    groupChat.map(v => {
      console.log(v)
    })
  }

  return (
    <div>
      <h1>Group Chat</h1>
      {groupChat.map((v) => {

        <button className="btn border" onClick={x}>v.name</button>
      })}
      {groupChat && console.log(groupChat)}
      <button className="btn border" onClick={x}>+</button>
    </div>
  )
}
