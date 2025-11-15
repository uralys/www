import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {maxWidth_736} from '../../style/breakpoints';
import LogoText from '../../../assets/images/logos/logo-text.svg';

// Artists
import UralysLogo from '../../../assets/images/artists/uralys/logo.jpg';
import EzomLogo from '../../../assets/images/artists/ezom/logo.jpg';
import LittleBigOrchestraLogo from '../../../assets/images/artists/little-big-orchestra/logo.jpg';
import CoriolisLogo from '../../../assets/images/artists/coriolis/logo.jpg';

// Games
import AvindiScreenshot from '../../../assets/images/projects/avindi/screenshots/world-2160x1215.webp';
import FlyingOnesScreenshot from '../../../assets/images/projects/flying-ones/screenshots/1.webp';
import LockeylandScreenshot from '../../../assets/images/projects/lockeyland/chapters/chapter0/screenshot-1.jpg';
import BattleSquaresScreenshot from '../../../assets/images/projects/battle-squares/screenshots/home-1215x2160.webp';

// Dev
import FoxLogo from '../../../assets/images/projects/fox/logo.png';
import CherryLogo from '../../../assets/images/projects/cherry/logo.png';
import CoorpacademyLogo from '../../../assets/images/projects/coorpacademy/logo.png';
import TwinlifyLogo from '../../../assets/images/projects/twinlify/logo.png';

// -----------------------------------------------------------------------------

const $Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const $Logo = styled.img`
  max-width: 500px;
  width: 100%;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeIn 1.5s ease 0.3s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  ${maxWidth_736} {
    max-width: 300px;
    margin-bottom: 2rem;
  }
`;

const $Tagline = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #e2e2e2;
  margin-bottom: 4rem;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1.5s ease 0.6s forwards;

  ${maxWidth_736} {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const $CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 900px;

  ${maxWidth_736} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const $Category = styled.div<{$delay: number}>`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 3rem 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease ${props => props.$delay}s forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  ${maxWidth_736} {
    padding: 2rem 1.5rem;
  }
`;

const $CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const $ThumbnailsGrid = styled.div<{$columns: number}>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  gap: 0.75rem;
  width: 100%;
  max-width: 280px;
  margin-bottom: 1.5rem;
`;

const $Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const $CategoryTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #e2e2e2;
  margin: auto 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const $CategoryDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: rgba(226, 226, 226, 0.8);
  margin: 0;
  line-height: 1.6;
`;

const $TimelineButton = styled.button`
  margin-top: 3rem;
  padding: 1rem 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #e2e2e2;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0;
  animation: fadeIn 1.5s ease 1.5s forwards;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const $Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1.5s ease 1.7s forwards;

  a {
    color: #e2e2e2;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: rgba(255, 204, 176, 1);
    }
  }
`;

// -----------------------------------------------------------------------------

type Category = {
  icon?: string;
  title: string;
  description: string;
  link: string;
  thumbnails?: string[];
};

const categories: Category[] = [
  {
    title: 'Music',
    description: 'Music production studio',
    link: '/music',
    thumbnails: [UralysLogo, EzomLogo, LittleBigOrchestraLogo, CoriolisLogo]
  },
  {
    title: 'Games',
    description: 'Games created with Godot Engine',
    link: '/timeline?filter=games',
    thumbnails: [
      AvindiScreenshot,
      FlyingOnesScreenshot,
      LockeylandScreenshot,
      BattleSquaresScreenshot
    ]
  },
  {
    title: 'Dev',
    description: 'Open Source or Freelance projects',
    link: '/timeline',
    thumbnails: [FoxLogo, CherryLogo, CoorpacademyLogo, TwinlifyLogo]
  }
];

// -----------------------------------------------------------------------------

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <$Container>
      <$Logo src={LogoText} alt="Uralys" />
      <$Tagline>Indie Studio</$Tagline>

      <$CategoriesGrid>
        {categories.map((category, index) => (
          <$Category
            key={category.title}
            $delay={0.9 + index * 0.2}
            onClick={() => handleCategoryClick(category.link)}
          >
            {category.thumbnails ? (
              <$ThumbnailsGrid
                $columns={category.thumbnails.length === 4 ? 2 : 3}
              >
                {category.thumbnails.map((thumbnail, idx) => (
                  <$Thumbnail
                    key={idx}
                    src={thumbnail}
                    alt={`${category.title} ${idx + 1}`}
                  />
                ))}
              </$ThumbnailsGrid>
            ) : (
              <$CategoryIcon>{category.icon}</$CategoryIcon>
            )}
            <$CategoryTitle>{category.title}</$CategoryTitle>
            <$CategoryDescription>{category.description}</$CategoryDescription>
          </$Category>
        ))}
      </$CategoriesGrid>

      <$TimelineButton onClick={() => navigate('/timeline')}>
        See full timeline
      </$TimelineButton>

      <$Footer>
        <a href="mailto:hello.dugne@uralys.com">hello@uralys.com</a>
        {' · '}
        <a href="./cv-2025.pdf">CV</a>
      </$Footer>
    </$Container>
  );
};

// -----------------------------------------------------------------------------

export default Home;
