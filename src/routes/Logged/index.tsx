/** Packages */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/** Pages */
import CleanPage from '../../pages/CleanPage';
import NotFound from '../../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Redirect from="/" to="/dashboard" exact />

    <Route path="/dashboard" component={CleanPage} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
