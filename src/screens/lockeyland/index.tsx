// -----------------------------------------------------------------------------

import styled from 'styled-components';

import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

import LogoLockey from '../../../assets/images/projects/lockeyland/logo-title.png';
import LogoUralys from '../../../assets/images/logos/uralys.webp';
import Icon256 from '../../../assets/images/projects/lockeyland/chapters/chapter0/icon-256x256.png';
import AppleIcon from '../../../assets/images/logos/appstore.png';
import GoogleIcon from '../../../assets/images/logos/playstore.png';

import Twitter from '../../../assets/images/logos/logo-x.webp';
import Instagram from '../../../assets/images/logos/instagram.png';

import Spotify from '../../../assets/images/logos/spotify.webp';
import Applemusic from '../../../assets/images/logos/applemusic.png';
import Godot from '../../../assets/images/logos/godot.webp';
import Assetforge from '../../../assets/images/logos/assetforge.png';
import Fertile from '../../../assets/images/logos/fertile-soil-production.png';

import Chapter0Screenshot1 from '../../../assets/images/projects/lockeyland/chapters/chapter0/screenshot-1.jpg';
import Chapter0Screenshot2 from '../../../assets/images/projects/lockeyland/chapters/chapter0/screenshot-2.jpg';
import Chapter0Screenshot3 from '../../../assets/images/projects/lockeyland/chapters/chapter0/screenshot-3.jpg';
import Chapter0Screenshot4 from '../../../assets/images/projects/lockeyland/chapters/chapter0/screenshot-4.jpg';
import Chapter1Screenshot1 from '../../../assets/images/projects/lockeyland/chapters/chapter1/screenshot-1.jpg';
import Chapter1Screenshot2 from '../../../assets/images/projects/lockeyland/chapters/chapter1/screenshot-2.jpg';
import Chapter1Screenshot3 from '../../../assets/images/projects/lockeyland/chapters/chapter1/screenshot-3.jpg';
import Chapter1Screenshot4 from '../../../assets/images/projects/lockeyland/chapters/chapter1/screenshot-4.jpg';

import {
  $AudioPlayer,
  $Button,
  $Flex,
  $FlexStores,
  $Link,
  $LinkButton,
  $Screenshot,
  $Video
} from '../../style/common';

// -----------------------------------------------------------------------------

const CHAPTERS = [
  {
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.uralys.lockeyland.chapter0',
    appStoreUrl: 'https://apps.apple.com/app/id1603491928'
  },
  {
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.uralys.lockeyland',
    appStoreUrl: 'https://apps.apple.com/app/id1602128149'
  }
];

// -----------------------------------------------------------------------------

const $LockeyLand = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#13639e 0%, rgb(27, 28, 29) 100%);
  color: #ededed;
  width: 100vw;
  padding: 60px;

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 23px;
    margin: 15px 0;
  }

  a {
    font-family: 'Montserrat', sans-serif;
  }
`;

const $Text = styled.p`
  max-width: 600px;

  ${maxWidth_736} {
    max-width: 300px;
  }
`;

const $Logo = styled.img`
  width: 500px;

  ${maxWidth_736} {
    width: 400px;
  }
`;

const $Subtitle = styled.h2`
  margin-top: 130px;
  margin-bottom: 0;
`;

const $Intro = styled.section`
  margin-top: 30px;
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

const $AppIcon = styled.img`
  width: 120px;
  border-radius: 50px;
  margin: 50px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s;
`;

// -----------------------------------------------------------------------------
// inspiration https://ashorthike.com/
// -----------------------------------------------------------------------------

const LockeyLand = () => (
  <$LockeyLand>
    <$Logo src={LogoLockey} />
    <$Intro>
      <$Text>Discover a beautiful puzzle game,</$Text>
      <$Text>unlock paths through levels of growing complexity</$Text>
    </$Intro>

    <$Subtitle>Prologue</$Subtitle>
    <$Text>10 FREE levels to discover Lockey's gameplay</$Text>

    <$FlexStores>
      <$AppIcon src={Icon256} />
      <a href={CHAPTERS[0].appStoreUrl} target="_blank" rel="noreferrer">
        <$Button src={AppleIcon} />
      </a>
      <a href={CHAPTERS[0].playStoreUrl} target="_blank" rel="noreferrer">
        <$Button src={GoogleIcon} />
      </a>
    </$FlexStores>

    <$Video
      title="video"
      width="740"
      height="415"
      src="https://www.youtube.com/embed/UYhbYkd27BM"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <$Flex>
      <$Screenshot src={Chapter0Screenshot1} />
      <$Screenshot src={Chapter0Screenshot2} />
      <$Screenshot src={Chapter0Screenshot3} />
      <$Screenshot src={Chapter0Screenshot4} />
    </$Flex>

    <$Text>
      For every level, unlock the 3 stars with the shortest path to get the
      trophy.
    </$Text>

    <$Subtitle>Lockey Land: Discovery</$Subtitle>
    <$Text>Play 20 additional levels for the 0,99€</$Text>
    <$FlexStores>
      <$AppIcon src={Icon256} />
      <a href={CHAPTERS[1].appStoreUrl} target="_blank" rel="noreferrer">
        <$Button src={AppleIcon} />
      </a>
      <a href={CHAPTERS[1].playStoreUrl} target="_blank" rel="noreferrer">
        <$Button src={GoogleIcon} />
      </a>
    </$FlexStores>

    <$Flex>
      <$Screenshot src={Chapter1Screenshot1} />
      <$Screenshot src={Chapter1Screenshot2} />
      <$Screenshot src={Chapter1Screenshot3} />
      <$Screenshot src={Chapter1Screenshot4} />
    </$Flex>

    <$Subtitle id="credits">Credits</$Subtitle>
    <$Text>An indie game by Uralys.</$Text>

    <a href="https://www.uralys.com" target="_blank" rel="noreferrer">
      <$LinkButton src={LogoUralys} />
    </a>

    <$Text>Don't miss the next chapters!</$Text>

    <$Flex>
      <a href="https://www.twitter.com/uralys" target="_blank" rel="noreferrer">
        <$LinkButton src={Twitter} />
      </a>
      <a
        href="https://www.instagram.com/lockey.land"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Instagram} />
      </a>
    </$Flex>

    <$Text>Music by Uralys</$Text>

    <$AudioPlayer
      src="https://open.spotify.com/embed/track/4h9Gi6Z6Jalthgk49UkU4F?utm_source=lockeyland.com"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></$AudioPlayer>

    <$Flex>
      <a
        href="https://open.spotify.com/track/4h9Gi6Z6Jalthgk49UkU4F"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Spotify} />
      </a>
      <a
        href="https://music.apple.com/us/album/lockeys-journey-single/1601503585"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Applemusic} />
      </a>
    </$Flex>

    <$Text>Created with Godot Engine and AssetForge.</$Text>

    <$Flex>
      <a href="https://godotengine.org" target="_blank" rel="noreferrer">
        <$LinkButton src={Godot} />
      </a>
      <a href="https://assetforge.io" target="_blank" rel="noreferrer">
        <$LinkButton src={Assetforge} />
      </a>
    </$Flex>

    <$Text>additional models from Fertile Soil Production</$Text>

    <$Flex>
      <a
        href="https://www.fertilesoilproductions.com"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Fertile} />
      </a>
    </$Flex>

    <hr />
    <$Link to="/lockeyland/press">Press Kit</$Link>
    <$Link to="/">Home</$Link>
  </$LockeyLand>
);

// -----------------------------------------------------------------------------

export default LockeyLand;
