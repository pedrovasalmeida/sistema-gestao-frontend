/** Packages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import CleanPage from '../../pages/CleanPage';
import NotFound from '../../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CleanPage} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
