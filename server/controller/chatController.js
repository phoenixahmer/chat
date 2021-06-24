const PublicChat = require("../model/PublicChat")

const addPublicChat = async (req, res) => {
  try {
    const message = req.body.message
    const from = req.user.id

    const chat = new PublicChat({ from, message })
    await chat.save()

    return res.status(200).json(chat)
  } catch (error) {
    console.log(error)
  }
}

const getPublicChats = async (req, res) => {
  try {

    const chat = await PublicChat.find()
    return res.status(200).json(chat)

  } catch (error) {

    console.log(error)
    return send(error.message)

  }
}

exports.addPublicChat = addPublicChat
exports.getPublicChats = getPublicChats


// {
//   "to": "60c9a8629c026530b835f760",
//   "from": "60c9aaee0c39172698214c40",
//   "message": "testing"
// }