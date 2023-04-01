import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/images/logo.svg';

// -----------------------------------------------------------------------------

const $Hero = styled.div`
  > h1 {
    font-size: 3rem;
    margin: 0;
  }

  > hr {
    border: 0;
  }

  > hr:before {
    content: '';
    border: 0;
    width: 3rem;
    border-top: solid 2px #ffffff;
    height: 2px;
    display: inline-block;
  }
`;

// -----------------------------------------------------------------------------

const Hero = () => (
  <$Hero>
    <img src={Logo} width="120px" />
    <h1>Uralys</h1>
    <hr />
  </$Hero>
);

// -----------------------------------------------------------------------------

export default Hero;
