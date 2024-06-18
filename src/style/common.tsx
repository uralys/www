import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {maxWidth_736} from './breakpoints';

export const $Link = styled(Link)`
  padding-top: 12px;
  font-family: 'Montserrat', sans-serif;
`;

export const $Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 55px;
`;

export const $Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
`;

export const $Description = styled($Flex)`
  margin-top: 50px;
  margin-bottom: 55px;
  flex-direction: column;
`;

export const $FlexStores = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  ${maxWidth_736} {
    flex-direction: column;
  }
`;

export const $Screenshot = styled.img`
  width: 390px;
  border-radius: 10px;
  border: 0;
  margin: 5px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const $ScreenshotPortrait = styled($Screenshot)`
  aspect-ratio: 9/16;
`;

export const $ScreenshotLandscape = styled($Screenshot)`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
`;

export const $LogoGame = styled.img`
  width: 120px;
  border-radius: 50px;
  margin: 50px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s;
`;

export const $Button = styled.img`
  width: 220px;
  height: 70px;
  border-radius: 9px;
  margin: 5px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

export const $LinkButton = styled.img`
  width: 100px;
  border-radius: 30px;
  margin: 5px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

export const $AudioPlayer = styled.iframe`
  border-radius: 10px;
  border: 0px;
  height: 80px;
  width: 320px;
  margin: 4px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const $Video = styled.iframe`
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 0px;
  aspect-ratio: 16/9;
  height: auto;

  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  ${maxWidth_736} {
    width: 100vw;
  }
`;
