import React from 'react';
import { ThemeProvider } from 'styled-components';

type ThemeType = typeof theme;

const theme = {
  colors: {
    background: '#f8faff',
    darkBlue: '#222831',
    lightBlue: '#30475e',
    white: '#dddddd',
    red: '#f05454',
    black: '#333333',
    green: '#6bf054',
  },
  font: 'Open Sans',
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export type { ThemeType };
export default Theme;
