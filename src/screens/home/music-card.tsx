import styled, {keyframes} from 'styled-components';
import {Project} from './projects';
import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
`;

const $MusicCard = styled.div<{$isVisible?: boolean}>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  position: relative;
  animation: ${props => props.$isVisible !== false ? fadeInUp : fadeOutDown} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 12px 24px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.15);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #1db954, #1ed760);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  ${maxWidth_736} {
    padding: 20px;
  }
`;

const $Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

const $Title = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const $Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const $Badge = styled.span<{variant?: 'category' | 'date'}>`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${props => props.variant === 'category' ? `
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
    color: #a5b4fc;
    border: 1px solid rgba(99, 102, 241, 0.3);
  ` : `
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
  `}
`;

const $IframeContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  iframe {
    width: 100%;
    height: 152px;
    border: none;
    display: block;
  }
`;

// -----------------------------------------------------------------------------

interface MusicCardProps {
  project: Project;
  isVisible?: boolean;
}

const MusicCard = ({project, isVisible = true}: MusicCardProps) => {
  const spotifyUrl = project.links.find(link => link.platform === 'spotify')?.url;

  if (!spotifyUrl) {
    return null;
  }

  return (
    <$MusicCard $isVisible={isVisible}>
      <$Header>
        <$Meta>
          <$Badge variant="category">🎵 Music</$Badge>
          {project.dates && <$Badge variant="date">{project.dates}</$Badge>}
        </$Meta>
      </$Header>
      <$IframeContainer>
        <iframe
          src={spotifyUrl}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </$IframeContainer>
    </$MusicCard>
  );
};

// -----------------------------------------------------------------------------

export default MusicCard;
