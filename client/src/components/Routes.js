import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './User';
import Chat from './Chat';
import GroupChat from './GroupChat';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/user" component={User} />
      <Route path="/chat" component={Chat} />
      <Route path="/group chat" component={GroupChat} />
    </Switch>
  )
}