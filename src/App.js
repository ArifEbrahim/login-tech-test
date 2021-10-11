import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Policy from './Policy/Policy'
import Login from './Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/policy' component={Policy} />
      </Switch>
    </Router>

  );
}

export default App;
