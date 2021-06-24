import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginOut } from '../../redux';


export default function Nav() {
  const loggedIn = useSelector(state => state.login.loggedIn)
  const dispatch = useDispatch()


  function logout() {
    dispatch(loginOut())
    localStorage.removeItem("token")
  }
  if (loggedIn === true)
    return (
      <div>
        <Link to="/user">user</Link>
        {" "}
        <Link to="/chat">chat</Link>
        {" "}
        <Link to="/" onClick={() => { logout() }}>logout</Link>
      </div>
    )
  else
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    )
}