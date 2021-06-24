const mongoose = require("mongoose")

const PublicChatSchema = mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = PublicChat = mongoose.model("PublicChat", PublicChatSchema)