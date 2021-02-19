/** Packages */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/** Components */
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';

/** Global Styles */
import 'react-toastify/dist/ReactToastify.css';
import { ToastNotifyContainer } from './styles';

import ThemeProvider from './styles/Theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <ToastNotifyContainer />
    </ThemeProvider>
  );
};

export default App;
