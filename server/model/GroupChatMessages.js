const mongoose = require("mongoose")

const GroupChatMessagesSchema = mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = GroupChatMessages = mongoose.model("GroupChatMessages", GroupChatMessagesSchema)