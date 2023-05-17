import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Global, css } from '@emotion/react';

import fontSuite from '/fonts/SUITE-Regular.ttf';
import fontSuiteBold from '/fonts/SUITE-Bold.ttf';
import fontSuiteLight from '/fonts/SUITE-Light.ttf';
import { RecoilRoot } from 'recoil';

const globalStyle = css`
  @font-face {
    font-family: 'suite';
    src: url(${fontSuite});
  }

  @font-face {
    font-family: 'suite-bold';
    src: url(${fontSuiteBold});
  }

  @font-face {
    font-family: 'suite-light';
    src: url(${fontSuiteLight});
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
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
