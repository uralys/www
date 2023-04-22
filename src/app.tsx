import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';
import {createDevtools} from 'taverne/middlewares';

import filters from './barrels/filters.barrel';

import Home from './screens/home';
import Privacy from './screens/privacy';

import GlobalStyle from './style/global';
import $Wrapper from './style/wrapper';

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

const barrels = {filters};
const devtools = createDevtools();
const {dispatch, taverne} = createLaTaverne(barrels, [devtools]);

// -----------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Taverne dispatch={dispatch} taverne={taverne}>
      <App />
    </Taverne>
  </React.StrictMode>
);
