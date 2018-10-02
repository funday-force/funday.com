import React from "react";
import { Switch, Route } from "react-router-dom";
import homePage from "./Components/Homepage/Homepage";

export default (
  <Switch>
    <Route exact path="/" component={homePage} />
  </Switch>
);
