import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

import {createGlobalStyle} from 'styled-components';
import bg from '../assets/images/bg.jpg';
import Projects from './screens/projects';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  html {
    scrollbar-width: none;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
  }

  body::before {
    content: '';
    display: block;
    background-attachment: scroll;
    height: 100vh;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transform: scale(1);
    width: 100vw;
    z-index: -1;
    background-image: linear-gradient(45deg, rgba(28, 29, 39, 0.347) 0%, rgba(98, 9, 73, 0.477) 100%), url(${bg});
    background-position: 0% 0%, center;
    background-repeat: repeat, no-repeat;
    background-size: cover, cover;
  }
`;

// -----------------------------------------------------------------------------

const App = () => (
  <>
    <GlobalStyle />
    <Projects />
  </>
);

// -----------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
