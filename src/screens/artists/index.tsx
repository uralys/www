import {useState} from 'react';
import styled from 'styled-components';

import EzomLogo from '../../../assets/images/artists/ezom/logo.jpg';
import UralysLogo from '../../../assets/images/artists/uralys/logo.jpg';
import LittleBigOrchestraLogo from '../../../assets/images/artists/little-big-orchestra/logo.jpg';
import CoriolisLogo from '../../../assets/images/artists/coriolis/logo.jpg';
import TunetLogo from '../../../assets/images/artists/tunet/logo.jpg';
import BigArtistCard from './big-card';
import SmallArtistCard from './small-card';

// -----------------------------------------------------------------------------

export type Artist = {
  name: string;
  musicStyle: string;
  logo: string;
};

const URALYS: Artist = {
  name: 'Uralys',
  logo: UralysLogo,
  musicStyle: 'Glitch Hop'
};
const EZOM: Artist = {name: 'Ezom', logo: EzomLogo, musicStyle: 'Ambient'};
const TUNET: Artist = {name: 'Tunet', logo: TunetLogo, musicStyle: 'Trip Hop'};
const CORIOLIS: Artist = {
  name: 'Coriolis',
  logo: CoriolisLogo,
  musicStyle: 'Piano'
};
const LITTLE_BIG_ORCHESTRA: Artist = {
  name: 'Little Big Orchestra',
  logo: LittleBigOrchestraLogo,
  musicStyle: 'Cinematic'
};

// -----------------------------------------------------------------------------

const $ArtistsScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  max-width: 1100px;
`;

const $Hero = styled.div`
  display: flex;
  flex-direction: row;
  color: #f0f0f0;
  width: 100%;
  padding: 32px;
`;

const $Left = styled.div`
  flex: 2;
  padding-top: 32px;
`;

const $Right = styled.div`
  flex: 3;
`;

const $Title = styled.p`
  margin: 0;
  margin-top: 30px;
  font-size: 48px;
`;

const $Subtitle = styled.p`
  margin-top: -20px;
  margin-left: 4px;
  font-size: 28px;
`;

const $Tiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  max-width: 900px;
`;

// -----------------------------------------------------------------------------

const ArtistsScreen = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleCardClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleClose = () => {
    setSelectedArtist(null);
  };

  return (
    <$ArtistsScreen>
      {selectedArtist ? (
        <BigArtistCard artist={selectedArtist} onClose={handleClose} />
      ) : (
        <>
          <$Hero>
            <$Left>
              <$Title>Uralys Studio</$Title>
              <$Subtitle>Meet the artists</$Subtitle>
            </$Left>
            <$Right>
              <p>We explore the diverse landscapes of electronic music.</p>
              <p>
                Our work is dedicated to creativity and collaboration, where
                sound becomes a medium for storytelling and connection.
              </p>
              <p>
                From ambient soundscapes to pulsating beats, the studio embraces
                a wide spectrum of electronic themes.
              </p>
              <p>
                Each project is shaped by a unique perspective, blending
                different styles and influences to create something meaningful.
              </p>
            </$Right>
          </$Hero>

          <$Tiles>
            {[URALYS, EZOM, LITTLE_BIG_ORCHESTRA, CORIOLIS, TUNET].map(
              artist => (
                <SmallArtistCard
                  key={artist.name}
                  artist={artist}
                  onClick={() => handleCardClick(artist)}
                />
              )
            )}
          </$Tiles>
        </>
      )}
    </$ArtistsScreen>
  );
};

export default ArtistsScreen;
