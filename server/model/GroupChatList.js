const mongoose = require("mongoose")

const GroupChatListSchema = mongoose.Schema({
  greatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  members: [{
    id: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = GroupChatList = mongoose.model("GroupChatList", GroupChatListSchema)