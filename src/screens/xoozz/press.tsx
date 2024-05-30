import styled from 'styled-components';
import {
  maxWidth_480,
  maxWidth_736,
  maxWidth_980
} from '../../style/breakpoints';

import LogoTitle from '../../../assets/images/projects/xoozz/logo-title.webp';

import LogoUralys from '../../../assets/images/logos/uralys.webp';
import LogoGame from '../../../assets/images/projects/xoozz/logo.webp';

import ScreenshotSuggestions from '../../../assets/images/projects/xoozz/screenshots/suggestions-1215x2160.webp';
import ScreenshotQuizz1 from '../../../assets/images/projects/xoozz/screenshots/quizz1-1215x2160.webp';
import ScreenshotQuizz2 from '../../../assets/images/projects/xoozz/screenshots/quizz2-1215x2160.webp';
import ScreenshotHome from '../../../assets/images/projects/xoozz/screenshots/home.webp';
import ScreenshotLeaderboard from '../../../assets/images/projects/xoozz/screenshots/leaderboard-1215x2160.webp';
import {$Flex, $Link, $Screenshot as BaseScreenshot} from '../../style/common';

// -----------------------------------------------------------------------------

const $Press = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0;
  padding: 30px 35px;
  box-sizing: border-box;
  color: #dddddd;
  background-color: #141414c0;

  hr {
    width: 100%;
  }
`;

const $Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  ${maxWidth_980} {
    flex-direction: column;
  }

  h3 {
    font-size: 40px;
    margin: 10px 0;
  }

  b {
    margin-right: 5px;
  }

  p {
    a {
      margin-left: 5px;
    }
  }
`;

const $FactSheet = styled.div`
  width: 25%;
  text-align: left;
  padding: 0 5px;
  box-sizing: border-box;
  color: #dddddd;

  ${maxWidth_980} {
    width: 100%;
    padding: 0;
  }
`;

const $Descriptions = styled.div`
  width: 75%;
  text-align: left;
  padding: 0 50px;

  ${maxWidth_980} {
    width: 100%;
    padding: 0;
  }
`;

const $Logo = styled.img`
  width: 300px;

  ${maxWidth_736} {
    width: 310px;
  }
`;

const $SmallLogo = styled.img`
  width: 120px;
  margin: 20px 20px;

  border-radius: 30px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

// -----------------------------------------------------------------------------

const $Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 80px;
  }
`;

// -----------------------------------------------------------------------------

const $Screenshot = styled(BaseScreenshot)`
  width: 220px;

  ${maxWidth_480} {
    width: 100%;
  }
`;

// -----------------------------------------------------------------------------

const $Br = styled.div`
  height: 2px;
`;
const Br = () => (
  <$Br>
    <br />
  </$Br>
);

// -----------------------------------------------------------------------------

const LockeyLandPressKit = () => (
  <$Press>
    <$Logo src={LogoTitle} />
    <h1>Press Kit</h1>

    <$Intro>
      <$FactSheet>
        <h2>Fact Sheet</h2>
        <hr />
        <p>
          <b>Release:</b> May 30th 2024
        </p>
        <p>
          <b>Platforms:</b>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/id6503286401"
          >
            iOS
          </a>
          ,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.uralys.xoozz"
          >
            Android
          </a>
        </p>
        <Br />
        <p>
          <b>Developer:</b> Uralys Studio, based in Toulouse, France
        </p>
        <Br />
        <p>
          <b>Music by:</b>
          <a target="_blank" rel="noreferrer" href="https://linktr.ee/uralys">
            Uralys
          </a>
        </p>
        <Br />
        <hr />
        <p>
          <b>Socials:</b>
        </p>
        <p>
          Instagram:
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/uralys.studio"
          >
            @uralys.studio
          </a>
        </p>
        <p>
          X:
          <a target="_blank" rel="noreferrer" href="https://twitter.com/uralys">
            @uralys
          </a>
        </p>
        <p>
          Discord:
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/s5M4myVSeC"
          >
            Join here
          </a>
        </p>
        <hr />
        <p>
          <b>Website:</b>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.uralys.com/xoozz"
          >
            www.uralys.com/xoozz
          </a>
        </p>
        <p>
          <b>Contact:</b> hello@uralys.com
        </p>
      </$FactSheet>
      <$Descriptions>
        <h2>The Game</h2>
        <p>
          <b>xOOzz</b>- a competitive quiz game.
        </p>
        <p>
          Welcome to xOOzz, the ultimate quiz game to test and expand your
          knowledge on a multitude of themes!
        </p>
        <p>
          Whether you are a Harry Potter fan, passionate about the Olympic
          Games, or a general knowledge enthusiast, xOOzz has everything to
          satisfy your thirst for knowledge and competition.
        </p>
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
        <p>
          Keywords: Quiz, Quiz game, Trivia, Q&A, General knowledge, Quiz
          challenge, Educational game
        </p>
        <h2>About the dev</h2>
        <p>
          xOOzz is developed by Christophe Dugne-Esquevin aka Uralys Studio, a
          solo indie dev from France.
        </p>
        <p>
          Before this, he worked as freelance web architect for 15 years, and
          created many web and mobile games during his spare time.
        </p>
        <h2>The music</h2>
        <p>
          The music has been produced by Christophe Dugne-Esquevin as well.
          Christophe worked with different bands and musical projects for 20
          years, including Deafsound, Utopian Hedonism, Velvet Coffee.
        </p>
        <p>Today he releases musical productions as Uralys.</p>
      </$Descriptions>
    </$Intro>

    <$Info>
      {/* <h2>TRAILER</h2>

      <$Video
        title="video"
        width="860px"
        height="480px"
        src="https://www.youtube.com/embed/Oj3-F9ifIRM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}

      <h2>SCREENSHOTS</h2>
      <$Flex>
        <$Screenshot src={ScreenshotHome} />
        <$Screenshot src={ScreenshotQuizz1} />
        <$Screenshot src={ScreenshotQuizz2} />
        <$Screenshot src={ScreenshotLeaderboard} />
        <$Screenshot src={ScreenshotSuggestions} />
      </$Flex>

      <h2>LOGOS</h2>
      <$Flex>
        <$SmallLogo src={LogoGame} />
        <$SmallLogo src={LogoUralys} />
      </$Flex>

      <h2>Uralys 2024</h2>
      <$Link to="/">home</$Link>
    </$Info>
  </$Press>
);

// -----------------------------------------------------------------------------

export default LockeyLandPressKit;
