/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import imageFavIcon from '../assets/trophy.png';

// import usePersistedState from '../src/utils/usePersitedState';

import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';

import 'react-toastify/dist/ReactToastify.css';

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

  .toast-init {
    background-color: ${(prop) => (prop.theme.title === 'dark' ? '#b83891' : '#ffafcc')};
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
  }
`;

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  const ToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link
          rel="icon"
          type="image/png"
          href={imageFavIcon}
        />
        <meta name="title" content="Quiz desenvolvedor front-end:" />
        <meta name="description" content="Teste seus conhecimentos de desenvolvimento front-end. Questões sobre ReactJS, HTML5, CSS3 e JavaScript" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Imersão ReactJS - NextJS</title>
        <meta name="title" content="Quiz desenvolvedor front-end:" />
        <meta name="description" content="Teste seus conhecimentos de desenvolvimento front-end. Questões sobre ReactJS, HTML5, CSS3 e JavaScript" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/dayana-sog/imersao-react-next/master/assets/screen.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component ToggleTheme={ToggleTheme} {...pageProps} />
      </ThemeProvider>
      <ToastContainer autoClose={3000} />
    </>
  );
}
