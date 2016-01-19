import React from "react";
import {Route, IndexRoute} from "react-router";

import Application from "./containers/Application";
import Index from "./containers/index";
import SignIn from "./containers/SignIn"

export default(
  <Route component={Application} path="/">
    <IndexRoute component={Index} />
    <Route component={Index} path="index" />
    <Route component={SignIn} path="signin" />
  </Route>
)
