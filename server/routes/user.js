const router = require("express").Router()
const auth = require("../middleware/auth")
const userController = require("../controller/userController")

router.get("/", auth, (req, res) => userController.getUsers(req, res))
router.post("/", (req, res) => userController.addUser(req, res))
router.post("/login", (req, res) => userController.loginUser(req, res))

module.exports = router;