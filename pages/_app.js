import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import usePersistedState from '../src/utils/usePersitedState';

import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const ToggleTheme = () => {
    setTheme(theme.title === 'light'? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component ToggleTheme={ToggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  )
}