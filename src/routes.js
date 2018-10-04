import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
