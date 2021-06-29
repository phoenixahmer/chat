import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signupUser } from '../redux'

export default function Signup() {

  const dispatch = useDispatch()
  const signup = useSelector(state => state.signup)
  const [formData, setFormData] = useState({
    name: "name",
    email: "email",
    password: "password"
  })

  const submit = async (e) => {
    e.preventDefault()
    dispatch(signupUser(formData))
  }
  return (
    <div>
      {localStorage.getItem("token") && <Redirect to="/" />}

      <form method="post" onSubmit={submit}>

        <div className="form-group">
          <label>name</label>
          <input
            name="name"
            className="form-control"
            type="text"
            defaultValue={formData.name}
            onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
          <small className="text-muted">{signup.error ? signup.error.message : ""}</small>
        </div>

        <div className="form-group">
          <label>email</label>
          <input
            name="email"
            className="form-control"
            type="text"
            defaultValue={formData.email}
            onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
          <small className="text-muted">{signup.error ? signup.error.message : ""}</small>
        </div>

        <div className="form-group">
          <label>password</label>
          <input
            name="password"
            type="text"
            className="form-control"
            defaultValue={formData.password}
            onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
          <small className="text-muted">{signup.error ? signup.error.message : ""}</small>
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary"
            type="submit">
            {signup.loading ? "signing up" : "submit"}
          </button>
        </div>

      </form>
    </div>
  )
}
