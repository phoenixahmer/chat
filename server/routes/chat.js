const router = require("express").Router()
const chatController = require("../controller/chatController")
const auth = require("../middleware/auth")

// router.post("/", auth, (req, res) => chatController.addPublicChat(req, res))
router.get("/", auth, (req, res) => chatController.getPublicChats(req, res))

router.post("/groupChatList", auth, (req, res) => chatController.addToGroupChatList(req, res))
router.get("/groupChatList", auth, (req, res) => chatController.getGroupChatList(req, res))
// router.post("/private", (req, res) => chatController.addPrivateChat(req, res))
// router.get("/private", auth, (req, res) => chatController.getPrivateChats(req, res))

module.exports = router