// -----------------------------------------------------------------------------

import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

import LogoTitle from '../../../assets/images/projects/avindi/logo-title.webp';
import LogoAvindi from '../../../assets/images/projects/avindi/logo-avindi.webp';
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

const CHAPTERS = [
  {
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.uralys.avindi',
    appStoreUrl: 'https://apps.apple.com/app/id6473050626'
  }
];

// -----------------------------------------------------------------------------

const $Avindi = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#3b1041 0%, rgb(27, 28, 29) 100%);
  color: #ededed;
  width: 100vw;
  margin-bottom: -62px;
  margin-top: -62px;
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
    width: 500px;
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

const $Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 55px;
`;

const $Description = styled($Flex)`
  margin-top: 50px;
  margin-bottom: 55px;
  flex-direction: column;
`;

const $FlexStores = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  ${maxWidth_736} {
    flex-direction: column;
  }
`;

const $Screenshot = styled.img`
  width: 390px;
  border-radius: 10px;
  border: 0;
  margin: 5px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;

const $LogoAvindi = styled.img`
  width: 120px;
  border-radius: 50px;
  margin: 50px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s;
`;

const $Button = styled.img`
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

const $LinkButton = styled.img`
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

const $AudioPlayer = styled.iframe`
  border-radius: 10px;
  border: 0px;
  height: 80px;
  width: 320px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;

const $Video = styled.iframe`
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 0px;

  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  ${maxWidth_736} {
    width: 90%;
  }
`;

// -----------------------------------------------------------------------------
// inspiration https://ashorthike.com/
// -----------------------------------------------------------------------------

const Avindi = () => (
  <$Avindi>
    <$Logo src={LogoTitle} />
    <$Intro>
      <$Text>Discover a beautiful building game,</$Text>
      <$Text>Create your own village and collect magical items.</$Text>
    </$Intro>

    <$FlexStores>
      <$LogoAvindi src={LogoAvindi} />
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
      src="https://www.youtube.com/embed/jzXGpT6z-aU"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <$Subtitle>Avindi's Valley</$Subtitle>
    <$Description>
      <$Text>
        Help Avindi build her Valley by discovering all the combinations of
        magical potions.
      </$Text>

      <$Text>
        The inhabitants will enable you to create new potions or magical items
        that you can collect and use to decorate the Valley and the interiors of
        the houses.
      </$Text>

      <$Text>
        The Grimoire will assist you in finding the potion combinations, and the
        Crystal Ball will teleport you to the Valley.
      </$Text>
    </$Description>

    <$Flex>
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
      src="https://open.spotify.com/embed/track/4h9Gi6Z6Jalthgk49UkU4F?utm_source=uralys.com&play=1"
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
      <a href="https://linktr.ee/uralys" target="_blank" rel="noreferrer">
        <$LinkButton src={Linktree} />
      </a>
      <a
        href="https://music.apple.com/us/album/lockeys-journey-single/1601503585"
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
    <Link to="/avindi/press">Press Kit</Link>
    <Link to="/">Home</Link>
  </$Avindi>
);

// -----------------------------------------------------------------------------

export default Avindi;
