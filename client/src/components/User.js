import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux"

export default function User() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div>
      <h1>user</h1>
      {
        user.error ? <p>session expired</p>
          : user.loading
            ? "..."
            : <div>
              <p>name: {user.user.name}</p>
              <p>email: {user.user.email}</p>
            </div>
      }
    </div>
  )
}
