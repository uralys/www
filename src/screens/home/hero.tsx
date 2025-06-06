import styled from 'styled-components';
import LogoText from '../../../assets/images/logos/logo-text.svg';

// -----------------------------------------------------------------------------

const $Hero = styled.div`
  padding-bottom: 30px;

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  hr {
    border: 0;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  hr:before {
    content: '';
    border: 0;
    width: 3rem;
    border-top: solid 2px #e2e2e2;
    height: 2px;
    display: inline-block;
  }

  * a ~ b {
    margin-left: 5px;
  }
`;

const $LogoTitle = styled.img`
  margin-top: 45px;
  max-width: 400px;
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
      Let's talk about your project:{' '}
      <a href="mailto:?to=Uralys<hello.dugne@uralys.com>&subject=Hello Uralys!">
        hello@uralys.com
      </a>
    </p>
    <p>
      Here is my <a href="./cv-2025.pdf">CV</a>
    </p>
  </$Hero>
);

// -----------------------------------------------------------------------------

export default Hero;
