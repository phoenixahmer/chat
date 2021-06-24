import { Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import Home from './Home';
import Login from './Login';
import User from './User';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Route path="/chat" component={Chat} />
    </Switch>
  )
}