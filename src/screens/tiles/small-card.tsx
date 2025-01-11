import styled from 'styled-components';
import {Artist} from '.';

const $SmallArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    width: 320px;
    height: 320px;
  }
`;

const $ArtistLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 25px;
  transition: all 0.3s;
`;

const SmallArtistCard = ({
  artist,
  onClick
}: {
  artist: Artist;
  onClick: () => void;
}) => (
  <$SmallArtistCard onClick={onClick}>
    <p>{artist.name}</p>
    <$ArtistLogo src={artist.logo} />
  </$SmallArtistCard>
);

export default SmallArtistCard;
