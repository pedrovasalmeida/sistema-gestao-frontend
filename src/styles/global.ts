import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: ${p => p.theme.font}, sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`;
