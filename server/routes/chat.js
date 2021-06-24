const router = require("express").Router()
const chatController = require("../controller/chatController")
const auth = require("../middleware/auth")

router.post("/", auth, (req, res) => chatController.addPublicChat(req, res))
router.get("/", auth, (req, res) => chatController.getPublicChats(req, res))

// router.post("/private", (req, res) => chatController.addPrivateChat(req, res))
// router.get("/private", auth, (req, res) => chatController.getPrivateChats(req, res))

module.exports = router