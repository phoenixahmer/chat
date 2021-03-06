import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../redux'

export default function Login() {

  const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  const [formData, setFormData] = useState({
    email: "email",
    password: "password"
  })

  const submit = async (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }
  return (
    <div>
      {localStorage.getItem("token") && <Redirect to="/" />}

      <form method="post" onSubmit={submit}>

        <div className="form-group">
          <label>email</label>
          <input
            name="email"
            className="form-control"
            type="text"
            defaultValue={formData.email}
            onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
          <small className="text-muted">{login.error ? login.error.message : ""}</small>
        </div>

        <div className="form-group">
          <label>password</label>
          <input
            name="password"
            type="text"
            className="form-control"
            defaultValue={formData.password}
            onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
          <small className="text-muted">{login.error ? login.error.message : ""}</small>
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary"
            type="submit">
            {login.loading ? "loging in" : "submit"}
          </button>
        </div>

      </form>
    </div>
  )
}
