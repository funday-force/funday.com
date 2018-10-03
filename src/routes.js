import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './side-navbar';
import Homepage from './Components/Homepage/Homepage';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/navbar" component={Navbar} />
  </Switch>
);
