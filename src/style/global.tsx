import {createGlobalStyle} from 'styled-components';
import bg from '../../assets/images/bg.jpg';
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
    line-height: 1.0;
    min-height: 100vh;
    min-width: 320px;
    margin:0;
    padding:0;
    border:0;
    overflow-x: hidden;
    word-wrap: break-word;
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
    background-image: linear-gradient(45deg, rgba(28, 29, 39, 0.347) 0%, rgba(98, 9, 73, 0.477) 100%), url(${bg});
    background-position: 0% 0%, center;
    background-repeat: repeat, no-repeat;
    background-size: cover, cover;
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
    color: #b264df;

    :hover {
      color: #fff;
    }
  }


  li, p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1em;
    font-weight: 200;
    letter-spacing: 0.025rem;
    line-height: 1.75;

    > b {
      font-weight: 800;
    }
  }
`;

export default GlobalStyle;
