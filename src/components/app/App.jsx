import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../containers/Home';
import Details from '../containers/Details';

export default function App() {

  return (
    <>
      <div className="main">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component = { Home }
            />
            <Route
              path="/details/:_id"
              exact
              component = { Details }
            />
          </Switch>
        </Router>
      </div>
    </>
  );
}
