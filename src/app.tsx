import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import Home from './screens/home';
import Privacy from './screens/privacy';

import GlobalStyle from './style/global';
import $Wrapper from './style/wrapper';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

// -----------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/privacy',
    element: <Privacy />
  }
]);

// -----------------------------------------------------------------------------

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      const body = document.querySelector('body');
      body?.style.setProperty('--after-opacity', '0');
    }, 50);
  }, []);

  return (
    <$Wrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </$Wrapper>
  );
};

// -----------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
