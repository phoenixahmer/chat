const PublicChat = require("../model/PublicChat")
const GroupChatList = require("../model/GroupChatList")
const GroupChatMessages = require("../model/GroupChatMessages")
const User = require("../model/User")

const getPublicChats = async (req, res) => {
  try {

    const chat = await PublicChat.find()
    return res.status(200).json(chat)

  } catch (error) {

    console.log(error)
    return send(error.message)

  }
}

const addToGroupChatList = async (req, res) => {
  try {
    let user = await User.findById(req.user.id)

    let groupChatList = new GroupChatList({
      greatedBy: req.user.id,
      name: req.body.name,
      members: [{
        id: user.id,
        email: user.email,
        role: "admin"
      }]

    })

    groupChatList = await groupChatList.save()
    return res.status(200).json(groupChatList)

  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message })
  }
}

const getGroupChatList = async (req, res) => {
  try {
    let groupChatList = await GroupChatList.find()

    if (!groupChatList) {
      console.log({ message: "group not found" })
      return res.status(406).json({ message: "group not found" })
    }

    return res.status(200).json(groupChatList)
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message })
  }
}

const getGroupChat = async (req, res) => {
  try {
    const { groupId } = req.body
    console.log("req.body ", req)
    console.log("req.header ", req.header)
    let groupChatMessages = await GroupChatMessages.find({ groupId })

    console.log(groupChatMessages)
    if (!groupChatMessages) {
      console.log({ message: "getGroupChat no groupChatMessages " })
      return res.status(406).json({ message: "group not found" })
    }

    return res.status(200).json(groupChatMessages)
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ message: error.message })
  }
}

exports.getPublicChats = getPublicChats
exports.addToGroupChatList = addToGroupChatList
exports.getGroupChatList = getGroupChatList
exports.getGroupChat = getGroupChat