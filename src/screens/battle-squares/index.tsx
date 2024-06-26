// -----------------------------------------------------------------------------

import styled from 'styled-components';

import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

import LogoTitle from '../../../assets/images/projects/battle-squares/logo-title.webp';
import LogoGame from '../../../assets/images/projects/battle-squares/logo-battle-squares.webp';
import LogoUralys from '../../../assets/images/logos/uralys.webp';
import AppleIcon from '../../../assets/images/logos/appstore.png';
import GoogleIcon from '../../../assets/images/logos/playstore.png';

import Twitter from '../../../assets/images/logos/logo-x.webp';
import Instagram from '../../../assets/images/logos/instagram.png';

import Spotify from '../../../assets/images/logos/spotify.webp';
import Applemusic from '../../../assets/images/logos/applemusic.png';
import Linktree from '../../../assets/images/logos/linktree.webp';
import Godot from '../../../assets/images/logos/godot.webp';
import Fox from '../../../assets/images/logos/logo-fox.webp';

import ScreenshotAbout from '../../../assets/images/projects/battle-squares/screenshots/about-1215x2160.webp';
import ScreenshotDaily from '../../../assets/images/projects/battle-squares/screenshots/daily-bonus-1215x2160.webp';
import ScreenshotEndScreen from '../../../assets/images/projects/battle-squares/screenshots/end-screen-1215x2160.webp';
import ScreenshotExplosion from '../../../assets/images/projects/battle-squares/screenshots/explosion-1215x2160.webp';
import ScreenshotHome from '../../../assets/images/projects/battle-squares/screenshots/home-1215x2160.webp';
import ScreenshotLeaderboards from '../../../assets/images/projects/battle-squares/screenshots/leaderboards-1215x2160.webp';
import ScreenshotPlayground from '../../../assets/images/projects/battle-squares/screenshots/playground-1215x2160.webp';
import ScreenshotStore from '../../../assets/images/projects/battle-squares/screenshots/store-1215x2160.webp';

import {
  $AudioPlayer,
  $Button,
  $Description,
  $Flex,
  $FlexStores,
  $Link,
  $LinkButton,
  $LogoGame,
  $Screenshot,
  $Video
} from '../../style/common';

// -----------------------------------------------------------------------------

const CHAPTERS = [
  {
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.uralys.battlesquares',
    appStoreUrl: 'https://apps.apple.com/app/id1609783397'
  }
];

// -----------------------------------------------------------------------------

const $BattleSquares = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#333e47 0%, #1f2c39 100%);
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
  width: 600px;

  ${maxWidth_736} {
    width: 80vw;
  }
`;

const $Subtitle = styled.h2`
  margin-top: 50px;
  margin-bottom: 0;
`;

const $Intro = styled.section`
  margin-top: 30px;
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

// -----------------------------------------------------------------------------
// inspiration https://ashorthike.com/
// -----------------------------------------------------------------------------

const BattleSquares = () => (
  <$BattleSquares>
    <$Logo src={LogoTitle} />
    <$Intro>
      <$Text>Experience a competitive game</$Text>
      <$Text>Break as many blocks as possible in 25 or 45 seconds!</$Text>
    </$Intro>

    <$FlexStores>
      <$LogoGame src={LogoGame} />
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
      src="https://www.youtube.com/embed/Oj3-F9ifIRM"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    {/* <$Subtitle>Battle Squares</$Subtitle> */}

    <$Flex>
      <$Screenshot src={ScreenshotHome} />
    </$Flex>

    <$Description>
      <$Text>
        Join a competitive game where you need to break as many blocks as
        possible in 25 or 45 seconds!
      </$Text>

      <$Text>
        Blocks can be broken when at least two blocks of the same color are
        aligned. The larger the group, the more points you score!
      </$Text>
    </$Description>

    <$Flex>
      <$Screenshot src={ScreenshotPlayground} />
    </$Flex>

    <$Description>
      <$Text>
        Some bombs will be available during the game to eliminate all blocks of
        one color, even if they are not grouped.
      </$Text>
    </$Description>

    <$Flex>
      <$Screenshot src={ScreenshotExplosion} />
    </$Flex>

    <$Description>
      <$Text>
        A daily and weekly leaderboard is established for each game mode to
        distribute season points. The season ranking will determine the
        top-level players!
      </$Text>
    </$Description>

    <$Flex>
      <$Screenshot src={ScreenshotLeaderboards} />
    </$Flex>

    <$Flex>
      <$Screenshot src={ScreenshotDaily} />
      <$Screenshot src={ScreenshotEndScreen} />
      <$Screenshot src={ScreenshotAbout} />
      <$Screenshot src={ScreenshotStore} />
    </$Flex>

    <$Subtitle id="credits">Credits</$Subtitle>
    <$Text>An indie game by Uralys.</$Text>

    <a href="https://www.uralys.com" target="_blank" rel="noreferrer">
      <$LinkButton src={LogoUralys} />
    </a>

    <$Text>Don't miss the next games!</$Text>

    <$Flex>
      <a href="https://www.twitter.com/uralys" target="_blank" rel="noreferrer">
        <$LinkButton src={Twitter} />
      </a>
      <a
        href="https://www.instagram.com/uralys.studio"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Instagram} />
      </a>
    </$Flex>

    <$Text>Music by Uralys</$Text>

    <$AudioPlayer
      src="https://open.spotify.com/embed/track/39FuYlAOljdgZQ87LToZT3"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></$AudioPlayer>

    <$AudioPlayer
      src="https://open.spotify.com/embed/track/3KdW5y4IZCn6XFRuPxai8j"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></$AudioPlayer>

    <$Flex>
      <a
        href="https://open.spotify.com/artist/1lRNAaGXQBBXR6MWs0pEVp"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Spotify} />
      </a>
      <a href="https://linktr.ee/uralys" target="_blank" rel="noreferrer">
        <$LinkButton src={Linktree} />
      </a>
      <a
        href="https://music.apple.com/artist/uralys/1527013922"
        target="_blank"
        rel="noreferrer"
      >
        <$LinkButton src={Applemusic} />
      </a>
    </$Flex>

    <$Text>Created with Godot Engine and Fox.</$Text>

    <$Flex>
      <a href="https://godotengine.org" target="_blank" rel="noreferrer">
        <$LinkButton src={Godot} />
      </a>
      <a href="https://github.com/uralys/fox" target="_blank" rel="noreferrer">
        <$LinkButton src={Fox} />
      </a>
    </$Flex>

    <hr />
    <$Link to="/battle-squares/press">Press Kit</$Link>
    <$Link to="/">Home</$Link>
  </$BattleSquares>
);

// -----------------------------------------------------------------------------

export default BattleSquares;
