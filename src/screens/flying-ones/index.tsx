// -----------------------------------------------------------------------------

import styled from 'styled-components';

import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

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

import {
  $AudioPlayer,
  $Button,
  $Description,
  $Flex,
  $FlexStores,
  $Link,
  $LinkButton,
  $LogoGame,
  $ScreenshotLandscape,
  $Title,
  $Video
} from '../../style/common';
import useProjects from '../../hooks/use-projects';
import useImages from '../../hooks/use-images';

// -----------------------------------------------------------------------------

const $FlyingOnes = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#1e252b 0%, #0a121a 100%);
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

const FlyingOnes = () => {
  const projects = useProjects();
  const allImages = useImages();

  if (!projects) return null;

  const project = projects.find(({id}) => id === 'flying-ones');

  if (!project) return null;

  const images = allImages[project.id];
  const {logo, screenshots} = images;
  const appStoreUrl = project.links.find(({type}) => type === 'apple')?.url;
  const playStoreUrl = project.links.find(({type}) => type === 'android')?.url;

  return (
    <$FlyingOnes>
      <$Title>{project.title}</$Title>
      <$Intro>
        <$Text>Experience a competitive game</$Text>
        <$Text>
          An addictive and fun game that will test your reaction time and
          hand-eye coordination.
        </$Text>
      </$Intro>

      <$FlexStores>
        <$LogoGame src={logo} />
        <a href={appStoreUrl} target="_blank" rel="noreferrer">
          <$Button src={AppleIcon} />
        </a>
        <a href={playStoreUrl} target="_blank" rel="noreferrer">
          <$Button src={GoogleIcon} />
        </a>
      </$FlexStores>

      <$Video
        title="video"
        width="740"
        height="415"
        src="https://www.youtube.com/embed/m8wcnyQimH4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <$Description>
        <$Text>
          The game is simple: catch all the flying colored objects without
          making mistakes.
        </$Text>
      </$Description>

      <$Flex>
        <$ScreenshotLandscape src={screenshots[0]} />
      </$Flex>

      <$Description>
        <$Text>
          The more objects you catch, the higher your score will be. But be
          careful, if you miss an object, you will lose a life. The game is over
          when you run out of lives.
        </$Text>
      </$Description>

      <$Flex>
        <$ScreenshotLandscape src={screenshots[1]} />
      </$Flex>

      <$Description>
        <$Text>
          <p>Main Features:</p>
          <p>
            - Leaderboards: Compete with friends and players from around the
            world with leaderboards for each quiz.
          </p>
          <p>
            - Global Ranking by Season: Participate in competitive seasons and
            see where you stand on a global scale.
          </p>
          <p>
            - Daily Challenges: Take on new challenges every day to earn rewards
            and improve your ranking.
          </p>
          <p>- Multiplayer Mode: Face off against other players scores</p>
        </$Text>
      </$Description>

      <$Flex>
        <$ScreenshotLandscape src={screenshots[2]} />
      </$Flex>

      <$Description>
        <$Text>
          A daily and weekly leaderboard is established for each game mode to
          distribute season points. The season ranking will determine the
          top-level players!
        </$Text>
      </$Description>

      <$Flex>
        <$ScreenshotLandscape src={screenshots[5]} />
      </$Flex>

      <$Description>
        <$Text>Download Flying Ones now and reach to top leaderboards!</$Text>
      </$Description>

      <$Flex>
        <$ScreenshotLandscape src={screenshots[3]} />
        <$ScreenshotLandscape src={screenshots[4]} />
      </$Flex>

      <$Subtitle id="credits">Credits</$Subtitle>
      <$Text>An indie game by Uralys.</$Text>

      <a href="https://www.uralys.com" target="_blank" rel="noreferrer">
        <$LinkButton src={LogoUralys} />
      </a>

      <$Text>Don't miss the next games!</$Text>

      <$Flex>
        <a
          href="https://www.twitter.com/uralys"
          target="_blank"
          rel="noreferrer"
        >
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
        <a
          href="https://github.com/uralys/fox"
          target="_blank"
          rel="noreferrer"
        >
          <$LinkButton src={Fox} />
        </a>
      </$Flex>

      <hr />
      <$Link to="press">Press Kit</$Link>
      <$Link to="/">Home</$Link>
    </$FlyingOnes>
  );
};

// -----------------------------------------------------------------------------

export default FlyingOnes;
