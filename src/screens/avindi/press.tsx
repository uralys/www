import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {maxWidth_736, maxWidth_980} from '../../style/breakpoints';

import LogoTitle from '../../../assets/images/projects/avindi/logo-title.webp';

import LogoUralys from '../../../assets/images/logos/uralys.webp';
import LogoAvindi from '../../../assets/images/projects/avindi/logo-avindi.webp';

import Screenshot1 from '../../../assets/images/projects/avindi/screenshots/world2-2160x1215.webp';
import Screenshot2 from '../../../assets/images/projects/avindi/screenshots/discovered-2160x1215.webp';
import Screenshot3 from '../../../assets/images/projects/avindi/screenshots/house1-2160x1215.webp';
import Screenshot4 from '../../../assets/images/projects/avindi/screenshots/ornament-2160x1215.webp';
import Screenshot5 from '../../../assets/images/projects/avindi/screenshots/book-2160x1215.webp';
import Screenshot6 from '../../../assets/images/projects/avindi/screenshots/new-building-2160x1215.webp';
import Screenshot7 from '../../../assets/images/projects/avindi/screenshots/house4-2160x1215.webp';
import Screenshot8 from '../../../assets/images/projects/avindi/screenshots/laboratory-2160x1215.webp';
import Screenshot9 from '../../../assets/images/projects/avindi/screenshots/house2-2160x1215.webp';
import Screenshot10 from '../../../assets/images/projects/avindi/screenshots/world-2160x1215.webp';
import Screenshot11 from '../../../assets/images/projects/avindi/screenshots/house3-2160x1215.webp';

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
  margin-bottom: -62px;
  margin-top: -62px;
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
  width: 600px;

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

const $Video = styled.iframe`
  border-radius: 10px;
  border: 0px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  max-width: 860px;
  width: 100%;
  height: 480px;

  ${maxWidth_736} {
    width: 100vw;
  }
`;

// -----------------------------------------------------------------------------

const $Screenshots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  max-width: 800px;
`;

const $Screenshot = styled.img`
  width: 220px;
  border-radius: 10px;
  border: 0;
  margin: 5px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  ${maxWidth_980} {
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
          <b>Release:</b> December 23th 2023
        </p>
        <p>
          <b>Platforms:</b>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/id1603491928"
          >
            iOS
          </a>
          ,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.uralys.avindi"
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
            href="https://www.uralys.com/avindi"
          >
            www.uralys.com/avindi
          </a>
        </p>
        <p>
          <b>Contact:</b> hello@uralys.com
        </p>
      </$FactSheet>
      <$Descriptions>
        <h2>The Game</h2>
        <p>
          <b>Avindi's Valley</b>- an cute building game.
        </p>
        <p>
          Help Avindi build her Valley by discovering all the combinations of
          magical potions.
        </p>
        <p>
          The inhabitants will enable you to create new potions or magical items
          that you can collect and use to decorate the Valley and the interiors
          of the houses.
        </p>
        <p>
          The Grimoire will assist you in finding the potion combinations, and
          the Crystal Ball will teleport you to the Valley.
        </p>
        <p>
          Keywords: build, village, kids, free, no ads, explore, combinations,
          collection, gather, cute, magic, decorate
        </p>
        <h2>About the dev</h2>
        <p>
          Avindi's Valley is developed by Christophe Dugne-Esquevin aka Uralys
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
      <h2>TRAILER</h2>

      <$Video
        title="video"
        width="860px"
        height="480px"
        src="https://www.youtube.com/embed/jzXGpT6z-aU"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h2>SCREENSHOTS</h2>
      <$Screenshots>
        <$Screenshot src={Screenshot1} />
        <$Screenshot src={Screenshot2} />
        <$Screenshot src={Screenshot3} />
        <$Screenshot src={Screenshot4} />
        <$Screenshot src={Screenshot5} />
        <$Screenshot src={Screenshot6} />
        <$Screenshot src={Screenshot7} />
        <$Screenshot src={Screenshot8} />
        <$Screenshot src={Screenshot9} />
        <$Screenshot src={Screenshot10} />
        <$Screenshot src={Screenshot11} />
      </$Screenshots>

      <h2>LOGOS</h2>
      <$Screenshots>
        <$SmallLogo src={LogoAvindi} />
        <$SmallLogo src={LogoUralys} />
      </$Screenshots>

      <h2>Uralys 2023</h2>
      <Link to="/">home</Link>
    </$Info>
  </$Press>
);

// -----------------------------------------------------------------------------

export default LockeyLandPressKit;
