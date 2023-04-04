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
    <hr />
    <p>I help web and mobile teams as freelance.</p>
    <p>I produce electronic music, usually for movies and video games.</p>
    <p>I design mobile games with Godot.</p>
    <hr />
    <p>Let's talk about your project.</p>
    <img src={Logo} width="170px" />
  </$Hero>
);

// -----------------------------------------------------------------------------

export default Hero;
