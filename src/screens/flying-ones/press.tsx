import styled from 'styled-components';
import {maxWidth_480, maxWidth_980} from '../../style/breakpoints';

import LogoUralys from '../../../assets/images/logos/uralys.webp';
import {
  $Flex,
  $Link,
  $Screenshot as BaseScreenshot,
  $Title
} from '../../style/common';
import useProjects from '../../hooks/use-projects';
import useImages from '../../hooks/use-images';

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

const PressKit = () => {
  const projects = useProjects();
  const allImages = useImages();

  if (!projects) return null;

  const project = projects.find(({id}) => id === 'flying-ones');

  if (!project) return null;

  const images = allImages[project.id];
  const {logo, screenshots} = images;
  const appStoreUrl = project.links.find(({type}) => type === 'apple')?.url;
  const playStoreUrl = project.links.find(({type}) => type === 'android')?.url;

  if (!project) return null;
  return (
    <$Press>
      <$Title>{project.title}</$Title>
      <h1>Press Kit</h1>

      <$Intro>
        <$FactSheet>
          <h2>Fact Sheet</h2>
          <hr />
          <p>
            <b>Release:</b> June 18th 2024
          </p>
          <p>
            <b>Platforms:</b>
            <a target="_blank" rel="noreferrer" href={appStoreUrl}>
              iOS
            </a>
            ,
            <a target="_blank" rel="noreferrer" href={playStoreUrl}>
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/uralys"
            >
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
              href={`https://www.uralys.com/${project.id}`}
            >
              www.uralys.com/{project.id}
            </a>
          </p>
          <p>
            <b>Contact:</b> hello@uralys.com
          </p>
        </$FactSheet>
        <$Descriptions>
          <h2>The Game</h2>
          <p>
            <b>{project.title}</b>- a competitive game.
          </p>
          <p>
            Improve your reaction time by catching all the flying colored
            objects without making mistakes.
          </p>
          <p>
            This addictive and fun game that will test your reaction time and
            hand-eye coordination. The game is simple: catch all the flying
            colored objects without making mistakes. The more objects you catch,
            the higher your score will be. But be careful, if you miss an
            object, you will lose a life. The game is over when you run out of
            lives.
          </p>
          <p>
            <b>Main Features:</b>
          </p>
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
          <p>
            A daily and weekly leaderboard is established for each game mode to
            distribute season points. The season ranking will determine the
            top-level players.
          </p>
          <p>Download Flying Ones now and reach to top leaderboards!</p>
          <p>
            <b>Keywords:</b>reaction time, hand-eye coordination, addictive,
            fun, colored objects, leaderboard, competitive
          </p>
          <h2>About the dev</h2>
          <p>
            Battle Squares is developed by Christophe Dugne-Esquevin aka Uralys
            Studio, a solo indie dev from France.
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
          {screenshots.map(src => (
            <$Screenshot src={src} />
          ))}
        </$Flex>

        <h2>LOGOS</h2>
        <$Flex>
          <$SmallLogo src={logo} />
          <$SmallLogo src={LogoUralys} />
        </$Flex>

        <h2>Uralys 2024</h2>
        <hr />
        <$Link to={`../${project.id}`}>{project.title}</$Link>
        <$Link to="/">Home</$Link>
      </$Info>
    </$Press>
  );
};

// -----------------------------------------------------------------------------

export default PressKit;
