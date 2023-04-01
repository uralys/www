import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './screens/home';
import GlobalStyle from './style/global';
import {$Wrapper} from './style/wrapper';

// -----------------------------------------------------------------------------

const App = () => (
  <$Wrapper>
    <GlobalStyle />
    <Home />
  </$Wrapper>
);

// -----------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
