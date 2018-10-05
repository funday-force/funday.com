import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import Calendar from './Components/Dashboard/Calendar/ReactCalendar';
import Boards from './Components/Dashboard/Boards/Boards';
import Teams from './Components/Dashboard/Teams/Teams';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/calendar" component={Calendar} />
    <Route path="/dashboard/boards" component={Boards} />
    <Route path="/dashboard/teams" component={Teams} />
  </Switch>
);
