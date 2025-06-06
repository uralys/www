import {createGlobalStyle} from 'styled-components';
import bg from '../../assets/images/bg.webp';
import {maxWidth_980} from './breakpoints';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    scrollbar-width: none;
    font-size: 13pt;

    ${maxWidth_980} {
      font-size: 11pt;
    }
  }

  body {
    --after-opacity: 1;
    line-height: 1.0;
    min-height: 100vh;
    min-width: 320px;
    margin:0;
    padding:0;
    border:0;
    overflow-x: hidden;
    word-wrap: break-word;
    z-index: 1;
  }

  body:before {
    content: '';
    display: block;
    background-attachment: scroll;
    height: 100vh;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transform: scale(1);
    width: 100vw;
    z-index: -1;
    background-image: radial-gradient(
      circle farthest-corner at top left, #181822 20%,#433c4b65 80%),
      radial-gradient(
        circle farthest-side at top right, #181822 10%, #8b84b8a0 80%
      ),
      radial-gradient(
        ellipse at bottom center, #818695 0%, #1818229a 30%
    );
  }

  body:after {
    content: '';
    display: block;
    background-attachment: scroll;
    height: 100vh;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    opacity: var(--after-opacity);
    width: 100vw;
    z-index: 0;
    transition: opacity 1.25s ease-in-out 0.75s, visibility 1.25s 0.75s;
    background-color: #071018;
  }

  h1,h2 {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.275rem;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1em;
    font-weight: 400;
    line-height: 1.375;
    letter-spacing: 0.35rem;
  }

  hr {
    width: 100%;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #7b77b1;

    :hover {
      color: #fff;
    }
  }


  li, p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1em;
    font-weight: 200;
    letter-spacing: 0.045rem;
    line-height: 1.75;

    > b {
      font-weight: 800;
    }
  }
`;

export default GlobalStyle;
