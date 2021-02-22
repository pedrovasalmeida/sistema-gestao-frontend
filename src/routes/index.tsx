/** Packages */
import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/** Pages */
import Login from '../pages/Login';
import Logged from './Logged';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? (
        <Logged />
      ) : (
        <>
          <Redirect from="*" to="/" exact />
          <Login />
        </>
      )}
    </BrowserRouter>
  );
};

export default Routes;
