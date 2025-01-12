import styled from 'styled-components';
import {Artist} from '.';

const $BigArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #181822, #555571);
  animation: zoomIn 1s linear forwards;
  border-radius: 25px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  /* transition: all 2s; */

  @keyframes zoomIn {
    0% {
      width: 60px;
      height: 60px;
    }
    30% {
      width: 80vw;
      height: 160px;
    }
    99% {
    }
    100% {
      width: 80vw;
      height: 80vh;
    }
  }

  iframe {
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const $ArtistLogo = styled.img`
  border-radius: 25px;
  animation: moveLogo 1s ease-in-out forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes moveLogo {
    0% {
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    45% {
      width: 160px;
      height: 160px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    100% {
      top: 20px;
      left: 20px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transform: translate(0, 0);
    }
  }
`;

const $Cross = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 34px;
  line-height: 10px;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
  color: #f0f0f0;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    scale: 1.4;
  }
`;

const BigArtistCard = ({
  artist,
  onClose
}: {
  artist: Artist;
  onClose: () => void;
}) => (
  <$BigArtistCard>
    <$Cross onClick={onClose}>X</$Cross>
    <$ArtistLogo src={artist.logo} />
    <iframe
      width="50%"
      max-width="600px"
      height="120px"
      allow="autoplay"
      style={{border: 'none', borderRadius: '12px'}}
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2007299579&color=%23333&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
    ></iframe>
  </$BigArtistCard>
);

export default BigArtistCard;
