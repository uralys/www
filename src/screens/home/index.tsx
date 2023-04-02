import React from 'react';
import styled from 'styled-components';

import Hero from './hero';
import Projects from './projects';
import {maxWidth_360, maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const $Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
  z-index: 1;
  background-color: rgba(44, 42, 54, 0.893);
  box-shadow: 0rem 20px 50px 5px rgba(60, 58, 60, 0.865);
  color: #e2e2e2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.75;
  font-weight: 200;
  letter-spacing: 0.025rem;
  width: 38rem;
  border-radius: 0.5rem;
  padding: 3.75em 3em;
  transition: opacity 1.25s ease 0s, transform 1.25s ease 0s;

  ${maxWidth_736} {
    padding: 1.875rem 3.125rem;
  }

  ${maxWidth_360} {
    padding: 1.40625rem 3.34375rem;
  }
`;

// -----------------------------------------------------------------------------

const Home = () => (
  <$Home>
    <Hero />
    <hr />
    <Projects />
  </$Home>
);

// -----------------------------------------------------------------------------

export default Home;
