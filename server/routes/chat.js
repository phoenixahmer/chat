const router = require("express").Router()
const chatController = require("../controller/chatController")
const auth = require("../middleware/auth")

router.get("/", auth, (req, res) => chatController.getPublicChats(req, res))

router.get("/groupChatList", auth, (req, res) => chatController.getGroupChatList(req, res))
router.post("/groupChatList", auth, (req, res) => chatController.addToGroupChatList(req, res))

router.get("/groupChat", auth, (req, res) => chatController.getGroupChat(req, res))

module.exports = router