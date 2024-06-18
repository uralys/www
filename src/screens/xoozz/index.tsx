// -----------------------------------------------------------------------------

import styled from 'styled-components';

import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

import LogoTitle from '../../../assets/images/projects/xoozz/logo-title.webp';
import LogoGame from '../../../assets/images/projects/xoozz/logo.webp';
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

import ScreenshotPromo from '../../../assets/images/projects/xoozz/screenshots/promo.webp';
import ScreenshotSuggestions from '../../../assets/images/projects/xoozz/screenshots/suggestions-1215x2160.webp';
import ScreenshotQuizz1 from '../../../assets/images/projects/xoozz/screenshots/quizz1-1215x2160.webp';
import ScreenshotQuizz2 from '../../../assets/images/projects/xoozz/screenshots/quizz2-1215x2160.webp';
import ScreenshotHome from '../../../assets/images/projects/xoozz/screenshots/home.webp';
import ScreenshotLeaderboard from '../../../assets/images/projects/xoozz/screenshots/leaderboard-1215x2160.webp';

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
  $ScreenshotLandscape,
  $Video
} from '../../style/common';

// -----------------------------------------------------------------------------

const CHAPTERS = [
  {
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.uralys.xoozz',
    appStoreUrl: 'https://apps.apple.com/app/id6503286401'
  }
];

// -----------------------------------------------------------------------------

const $Xoozz = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#2b2e4a 0%, #131525 100%);
  color: #ededed;
  width: 100vw;
  padding: 60px;

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 23px;
    margin: 15px 0;
  }
`;

const $Text = styled.p`
  max-width: 600px;

  ${maxWidth_736} {
    max-width: 300px;
  }
`;

const $Logo = styled.img`
  width: 300px;
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

const Xoozz = () => (
  <$Xoozz>
    <$Logo src={LogoTitle} />
    <$Intro>
      <$Text>Experience a competitive quiz game</$Text>
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
      src="https://www.youtube.com/embed/hYZSf6zSCOY"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <$Description>
      <$Text>
        Welcome to xOOzz, the ultimate quiz game to test and expand your
        knowledge on a multitude of themes!
      </$Text>

      <$Flex>
        <$ScreenshotLandscape src={ScreenshotPromo} />
      </$Flex>

      <$Text>
        Whether you are a Harry Potter fan, passionate about the Olympic Games,
        or a general knowledge enthusiast, xOOzz has everything to satisfy your
        thirst for knowledge and competition.
      </$Text>
    </$Description>

    <$Flex>
      <$Screenshot src={ScreenshotQuizz1} />
      <$Screenshot src={ScreenshotQuizz2} />
    </$Flex>

    <$Description>
      <$Text>
        <p>Main Features:</p>
        <p>
          - Varied Themes: Discover quizzes covering a wide range of topics,
          including series, sports, music, and much more.
        </p>
        <p>
          - Leaderboards: Compete with friends and players from around the world
          with leaderboards for each quiz.
        </p>
        <p>
          - Global Ranking by Season: Participate in competitive seasons and see
          where you stand on a global scale.
        </p>
        <p>
          - Daily Challenges: Take on new challenges every day to earn rewards
          and improve your ranking.
        </p>
        <p>
          - Fun Learning: Learn new information while playing and having fun.
        </p>
      </$Text>
    </$Description>

    <$Flex>
      <$Screenshot src={ScreenshotHome} />
    </$Flex>

    <$Description>
      <$Text>
        A daily and weekly leaderboard is established for each game mode to
        distribute season points. The season ranking will determine the
        top-level players!
      </$Text>
    </$Description>

    <$Flex>
      <$Screenshot src={ScreenshotLeaderboard} />
      <$Screenshot src={ScreenshotQuizz2} />
      <$Screenshot src={ScreenshotSuggestions} />
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
    <$Link to="/xoozz/press">Press Kit</$Link>
    <$Link to="/">Home</$Link>
  </$Xoozz>
);

// -----------------------------------------------------------------------------

export default Xoozz;
