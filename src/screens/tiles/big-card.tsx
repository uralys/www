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
  background-color: #8988f0;
  animation: zoomIn 0.2s linear forwards;
  transition: all 0.3s;

  @keyframes zoomIn {
    0% {
      width: 60px;
      height: 60px;
      background-color: #f0f0f0;
    }
    30% {
      width: 80vw;
      height: 160px;
      background-color: #d1d1f4;
    }
    100% {
      width: 100vw;
      height: 100vh;
      background-color: #7574b8;
    }
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

const BigArtistCard = ({
  artist,
  onClose
}: {
  artist: Artist;
  onClose: () => void;
}) => (
  <$BigArtistCard onClick={onClose}>
    <p>{artist.name}</p>
    <$ArtistLogo src={artist.logo} />
  </$BigArtistCard>
);

export default BigArtistCard;
