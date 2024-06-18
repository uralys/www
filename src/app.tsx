import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

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
import FlyingOnes from './screens/flying-ones';
import FlyingOnesPressKit from './screens/flying-ones/press';
import Xoozz from './screens/xoozz';
import XoozzPressKit from './screens/xoozz/press';
import Music from './screens/music';
import Privacy from './screens/privacy';

import GlobalStyle from './style/global';
import $Wrapper from './style/wrapper';
import ScrollToTop from './hooks/use-scroll-to-top';

// -----------------------------------------------------------------------------

// const Layout = () => <></>;

const NavigationTree = (
  <Route path="/">
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<Home />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/music" element={<Music />} />
    <Route path="/avindi" element={<Avindi />} />
    <Route path="/avindi/press" element={<AvindiPressKit />} />
    <Route path="/battle-squares" element={<BattleSquares />} />
    <Route path="/battle-squares/press" element={<BattleSquaresPressKit />} />
    <Route path="/lockeyland" element={<LockeyLand />} />
    <Route path="/lockeyland/press" element={<LockeyLandPressKit />} />
    <Route path="/xoozz" element={<Xoozz />} />
    <Route path="/xoozz/press" element={<XoozzPressKit />} />
    <Route path="/flying-ones" element={<FlyingOnes />} />
    <Route path="/flying-ones/press" element={<FlyingOnesPressKit />} />
  </Route>
);

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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>{NavigationTree}</Routes>
      </BrowserRouter>
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
