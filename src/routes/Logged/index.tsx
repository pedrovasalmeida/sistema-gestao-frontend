/** Packages */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import LeftMenu from '../../components/LeftMenu';
import { MenuProvider } from '../../context/MenuContext';

/** Pages */
import CleanPage from '../../pages/CleanPage';
import NotFound from '../../pages/NotFound';

import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <MenuProvider>
      <Header />

      <Container>
        <LeftMenu />
        <Switch>
          <Redirect from="/" to="/dashboard" exact />

          <Route path="/dashboard" component={CleanPage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Container>
    </MenuProvider>
  );
};

export default Routes;
