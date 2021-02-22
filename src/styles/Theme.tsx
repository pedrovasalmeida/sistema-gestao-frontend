import React from 'react';
import { ThemeProvider } from 'styled-components';

type ThemeType = typeof theme;

const theme = {
  colors: {
    background: '#f8faff',
    darkBlue: '#1a2642',
    lightBlue: '#2a437d',
    white: '#dddddd',
    red: '#e64545',
    black: '#333333',
    green: '#6bf054',
    gray: '#6e788f',
  },
  font: 'Open Sans',
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export type { ThemeType };
export default Theme;
