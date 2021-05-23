import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Main, Auth } from "layouts";

const App = ({ token }) => {
  let isAuth = !!token;

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} exact />
      <Redirect to="/auth" />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route
          path="/project/:projectId/project-structure​/:structureId"
          component={Main}
          exact
        />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <div className="app">{routes}</div>;
};

export default connect(({ auth }) => ({ token: auth.token }))(App);
