import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Global, css } from '@emotion/react';

const globalStyle = css`
  @font-face {
    font-family: 'suite';
    src: url('/fonts/SUITE-Regular.ttf');
  }

  @font-face {
    font-family: 'suite-bold';
    src: url('/fonts/SUITE-Bold.ttf');
  }

  @font-face {
    font-family: 'suite-light';
    src: url('/fonts/SUITE-Light.ttf');
  }

  * {
    font-family: 'suite', sans-serif;
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: "'suite', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
