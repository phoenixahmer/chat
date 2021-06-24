import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/layout/nav';
import Routes from "./components/Routes"


export default function App() {
  
  return (
    <React.Fragment>
      <div className="container">
        <Nav />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </div>
    </React.Fragment>
  )
}

