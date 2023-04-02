import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/images/logo.svg';
import LogoText from '../../../assets/images/logo-text.svg';

// -----------------------------------------------------------------------------

const $Hero = styled.div`
  > h1 {
    font-size: 3rem;
    margin: 0;
  }

  > hr {
    border: 0;
    padding-top: 10px;
    padding-bottom: 20px;
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
    <img src={LogoText} width="420px" />
    <h2>Indie Studio</h2>
    <img src={Logo} width="170px" />
    <hr />
  </$Hero>
);

// -----------------------------------------------------------------------------

export default Hero;
