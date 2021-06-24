const User = require("../model/User")
const jwt = require("jsonwebtoken")
const secret = require("config").secret

const getUsers = async (req, res) => {
  try {
    let users = await User.findById(req.user.id).select("-password")
    res.send(users)
  } catch (error) {
    res.send(error.message)
  }
}

const addUser = async (req, res) => {
  let users = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  try {
    await users.save()
    res.send(users)
  } catch (error) {
    res.send(error.message)
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: "user not found" })
    if (user.password !== password) return res.send("password doesn't match")

    const payload = {
      user: {
        id: user.id
      }
    }
    jwt.sign(
      payload,
      secret,
      { expiresIn: '1day' },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    )

  } catch (error) {
    res.send(error.message)
  }
}

exports.getUsers = getUsers
exports.addUser = addUser
exports.loginUser = loginUser