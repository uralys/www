import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';
import {createDevtools} from 'taverne/middlewares';

import filters from './barrels/filters.barrel';
import navigation from './barrels/navigation.barrel';

import Home from './screens/home';
import Avindi from './screens/avindi';
import AvindiPressKit from './screens/avindi/press';
import BattleSquares from './screens/battle-squares';
import BattleSquaresPressKit from './screens/battle-squares/press';
import LockeyLand from './screens/lockeyland';
import LockeyLandPressKit from './screens/lockeyland/press';
import Xoozz from './screens/xoozz';
import XoozzPressKit from './screens/xoozz/press';
import Music from './screens/music';
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
  },
  {
    path: '/music',
    element: <Music />
  },
  {
    path: '/avindi',
    element: <Avindi />
  },
  {
    path: '/avindi/press',
    element: <AvindiPressKit />
  },
  {
    path: '/battle-squares',
    element: <BattleSquares />
  },
  {
    path: '/battle-squares/press',
    element: <BattleSquaresPressKit />
  },
  {
    path: '/lockeyland',
    element: <LockeyLand />
  },
  {
    path: '/lockeyland/press',
    element: <LockeyLandPressKit />
  },
  {
    path: '/xoozz',
    element: <Xoozz />
  },
  {
    path: '/xoozz/press',
    element: <XoozzPressKit />
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

const barrels = {filters, navigation};
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
