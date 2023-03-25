import React from 'react';
import ReactDOM from 'react-dom/client';

import {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #ededed;
    background-color: #101;
  }
`;

// -----------------------------------------------------------------------------

const App = () => (
  <div className="App">
    <GlobalStyle />
    <h1>Vite scaffolding</h1>
  </div>
);

// -----------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
