import {useState} from 'react';
import styled from 'styled-components';

import EzomLogo from '../../../assets/images/artists/ezom/logo.jpg';
import UralysLogo from '../../../assets/images/artists/uralys/logo.jpg';
import LittleBigOrchestraLogo from '../../../assets/images/artists/little-big-orchestra/logo.jpg';
import CoriolisLogo from '../../../assets/images/artists/coriolis/logo.jpg';
import TunetLogo from '../../../assets/images/artists/tunet/logo.jpg';
import BigArtistCard from './big-card';
import SmallArtistCard from './small-card';

export type Artist = {
  name: string;
  logo: string;
};

const URALYS: Artist = {name: 'Uralys', logo: UralysLogo};
const EZOM: Artist = {name: 'Ezom', logo: EzomLogo};
const LITTLE_BIG_ORCHESTRA: Artist = {
  name: 'Little Big Orchestra',
  logo: LittleBigOrchestraLogo
};
const CORIOLIS: Artist = {name: 'Coriolis', logo: CoriolisLogo};
const TUNET: Artist = {name: 'Tunet', logo: TunetLogo};

const $Tiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
`;

const Tiles = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleCardClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleClose = () => {
    setSelectedArtist(null);
  };

  return (
    <$Tiles>
      {selectedArtist ? (
        <BigArtistCard artist={selectedArtist} onClose={handleClose} />
      ) : (
        [URALYS, EZOM, LITTLE_BIG_ORCHESTRA, CORIOLIS, TUNET].map(artist => (
          <SmallArtistCard
            key={artist.name}
            artist={artist}
            onClick={() => handleCardClick(artist)}
          />
        ))
      )}
    </$Tiles>
  );
};

export default Tiles;
