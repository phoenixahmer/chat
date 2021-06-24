import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../redux'

export default function Login() {

  const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  const [formData, setFormData] = useState({
    email: "email1",
    password: "password1"
  })

  const submit = async (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return (
    <div>
      {localStorage.getItem("token") && <Redirect to="/" />}

      <form method="post" onSubmit={submit}>

        <p>email</p>
        <input
          name="email"
          type="text"
          defaultValue={formData.email}
          onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />

        <p>password</p>
        <input
          name="password"
          type="password"
          autoComplete="on"
          defaultValue={formData.password}
          onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />

        <br />
        <button type="submit">{login.loading ? "loging in" : "submit"}</button>
      </form>
    </div>
  )
}
