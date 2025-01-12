import styled from 'styled-components';
import {Artist} from '.';

const $SmallArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 10px;
  color: #f0f0f0;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  background: linear-gradient(-45deg, #181822, #555571);
  background-blend-mode: overlay;

  padding: 16px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    width: 280px;
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const $ArtistLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  transition: all 0.3s;
`;

const $ArtistName = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
`;

const $MusicStyle = styled.p`
  margin: 0;
  font-size: 18px;
`;

const SmallArtistCard = ({
  artist,
  onClick
}: {
  artist: Artist;
  onClick: () => void;
}) => (
  <$SmallArtistCard onClick={onClick}>
    <$ArtistLogo src={artist.logo} />
    <$ArtistName>{artist.name}</$ArtistName>
    <$MusicStyle>{artist.musicStyle}</$MusicStyle>
  </$SmallArtistCard>
);

export default SmallArtistCard;
