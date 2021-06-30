const User = require("../model/User")
const jwt = require("jsonwebtoken")
const secret = require("config").secret

const getUsers = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password")
    if (!user) {
      return res.status(404).json({ message: "user not found" })
    }
    res.send(user)

  } catch (error) {
    res.send(error.message)
    console.log(error)
  }
}

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    let user = await User.findOne({ email })
    if (user) {
      console.log({ message: "user already exist" })
      return res.status(409).json({ message: "user already exist" })
    }

    user = await User.findById(req.user.id).select("-password")

    users = new User({ name, email, password })
    await users.save()

    const payload = {
      user: {
        id: users.id
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
    console.log(error)
    res.send(error.message)
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: "wrong credentials" })
    if (user.password !== password) res.status(404).json({ message: "wrong credentials" })
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