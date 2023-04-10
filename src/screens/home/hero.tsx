import styled from 'styled-components';
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
    <img src={LogoText} />
    <h2>Indie Studio</h2>
    <hr />
    <p>
      I help <b>web</b> and <b>mobile</b> teams as <b>freelance</b>.
    </p>
    <p>
      I produce <b>electronic music</b>, usually for movies and video games.
    </p>
    <p>
      I design <b>mobile games</b> with Godot.
    </p>
    <hr />
    <p>
      Let's talk about <b>your project.</b>
    </p>
    {/* <img src={Logo} width="170px" /> */}
  </$Hero>
);

// -----------------------------------------------------------------------------

export default Hero;
