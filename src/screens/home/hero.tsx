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
    border-top: solid 2px #e2e2e2;
    height: 2px;
    display: inline-block;
  }

  > * a ~ b {
    margin-left: 5px;
  }
`;

const $LogoTitle = styled.img`
  margin-top: 45px;
  width: 400px;
`;

// spotify src ?theme=0 to remove color
const $Iframe = styled.iframe`
  border: none;
  height: 400px;
  width: 100%;
`;

// -----------------------------------------------------------------------------

const Hero = () => (
  <$Hero>
    <$LogoTitle src={LogoText} />
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
      <a href="mailto:hello@uralys.com">Let's talk about</a>
      <b>your project.</b>
    </p>
    <p></p>
    {/* <$Iframe src="https://open.spotify.com/embed/track/5aIRwFwXMgGIpjZqKt55zj" /> */}
  </$Hero>
);

// -----------------------------------------------------------------------------

export default Hero;
