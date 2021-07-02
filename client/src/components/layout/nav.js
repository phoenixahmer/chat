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
      <div className="nav">
        <Link className="nav-link" to="/user">user</Link>
        <Link className="nav-link" to="/chat">chat</Link>
        <Link className="nav-link" to="/group chat">group chat</Link>
        <Link className="nav-link" to="/" onClick={() => { logout() }}>logout</Link>
        {/* <Link className="nav-link" to="/" onClick={() => { logout() }}>logout</Link> */}
      </div>
    )
  else
    return (
      <div className="nav">
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/signup">signup</Link>
      </div>
    )
}