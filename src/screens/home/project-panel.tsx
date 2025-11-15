import React, {useCallback, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';
import {maxWidth_736} from '../../style/breakpoints';
import useImages from '../../hooks/use-images';
import {$Link} from '../../style/common';

// -----------------------------------------------------------------------------

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const $Popin = styled.div<{$visible: boolean}>`
  pointer-events: ${props => `${props.$visible ? 'all' : 'none'}`};
  z-index: 1000;
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  padding: 20px;
  animation: ${props => (props.$visible ? fadeIn : 'none')} 0.3s
    cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: ${props => (props.$visible ? 1 : 0)};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const $DetailledProject = styled.div<{$visible: boolean}>`
  position: relative;
  max-height: 90vh;
  width: 900px;
  max-width: 90vw;
  background: linear-gradient(
    135deg,
    rgba(30, 27, 46, 0.98) 0%,
    rgba(45, 42, 62, 0.98) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  color: #e2e2e2;
  border-radius: 24px;
  overflow: hidden;
  animation: ${props => (props.$visible ? scaleIn : 'none')} 0.4s
    cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b84b8, #7b77b1, #818695);
  }

  ${maxWidth_736} {
    max-height: 95vh;
    border-radius: 16px;
  }
`;

const $ScrollContainer = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 20px;
`;

const $CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 30;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  ${maxWidth_736} {
    top: 16px;
    right: 16px;
  }
`;

const $Content = styled.div`
  padding: 20px 40px 40px;

  ${maxWidth_736} {
    padding: 16px 24px 24px;
  }
`;

const $Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px 0;
  text-align: center;

  ${maxWidth_736} {
    font-size: 2em;
  }
`;

const $Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 32px;
`;

const $Badge = styled.span<{variant?: 'category' | 'tech'}>`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${props =>
    props.variant === 'category'
      ? `
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
    color: #a5b4fc;
    border: 1px solid rgba(99, 102, 241, 0.3);
  `
      : `
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
  `}
`;

const $Description = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.1em;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 32px 0;
  text-align: center;
`;

const $VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const $Screenshots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  ${maxWidth_736} {
    grid-template-columns: 1fr;
  }
`;

const $Screenshot = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const $Actions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  ${maxWidth_736} {
    flex-direction: column;
  }
`;

const $InternalLink = styled($Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  padding: 14px 28px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.3),
    rgba(139, 92, 246, 0.3)
  );
  border: 1px solid rgba(99, 102, 241, 0.4);
  text-align: center;
  flex: 1;
  min-width: 200px;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.5),
      rgba(139, 92, 246, 0.5)
    );
    border-color: rgba(99, 102, 241, 0.6);
    transform: translateY(-2px);
  }

  ${maxWidth_736} {
    min-width: auto;
  }
`;

// -----------------------------------------------------------------------------

const ProjectPanel = () => {
  const {dispatch, pour} = useTaverne();
  const project = pour('navigation.selectedProject');
  const allImages = useImages();

  const closeProject = useCallback(() => {
    // Immediately restore scroll
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'inherit');

    dispatch({
      type: SELECT_PROJECT,
      payload: {project: null}
    } as SelectProjectAction);
  }, [dispatch]);

  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (project) {
      body?.style.setProperty('overflow', 'hidden');
    } else {
      body?.style.setProperty('overflow', 'inherit');
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      body?.style.setProperty('overflow', 'inherit');
    };
  }, [project]);

  if (!project) return null;

  // Get the web page and press kit URLs
  const webPageLink = project.links?.find(
    (link: {type: string; url: string}) =>
      link.type === 'Web page' && !link.url.startsWith('http')
  );
  const pressKitLink = project.links?.find(
    (link: {type: string}) => link.type === 'presskit'
  );

  if (!webPageLink) return null;

  const getCategoryInfo = (category: string) => {
    const info: {[key: string]: {label: string; icon: string}} = {
      games: {label: 'Game', icon: '🎮'},
      freelance: {label: 'Freelance', icon: '💼'},
      job: {label: 'Job', icon: '🏢'},
      partnership: {label: 'Partnership', icon: '🤝'},
      school: {label: 'Education', icon: '🎓'},
      music: {label: 'Music', icon: '🎵'},
      internship: {label: 'Internship', icon: '📚'}
    };
    return info[category] || {label: category, icon: '📌'};
  };

  const categoryInfo = getCategoryInfo(project.category);
  const images = allImages[project.id];
  const screenshots = images?.screenshots || [];

  // Extract YouTube video ID from project links
  const getYoutubeEmbedUrl = () => {
    const youtubeLink = project.links?.find(
      (link: {type: string}) => link.type === 'youtube'
    );
    if (!youtubeLink) return null;

    // Extract video ID from various YouTube URL formats
    const url = youtubeLink.url;
    let videoId = null;

    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }

    // Format: https://youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) {
      videoId = shortMatch[1];
    }

    // Format: https://www.youtube.com/embed/VIDEO_ID
    const embedMatch = url.match(/\/embed\/([^?]+)/);
    if (embedMatch) {
      videoId = embedMatch[1];
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const trailerUrl = getYoutubeEmbedUrl();

  return (
    <$Popin onClick={closeProject} $visible={!!project}>
      <$DetailledProject onClick={stopPropagation} $visible={!!project}>
        <$CloseButton onClick={closeProject}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </$CloseButton>
        <$ScrollContainer>
          <$Content>
            <$Title>{project.title}</$Title>
            <$Meta>
              <$Badge variant="category">
                {categoryInfo.icon} {categoryInfo.label}
              </$Badge>
              {project.dates && <$Badge>{project.dates}</$Badge>}
            </$Meta>

            {project.description && (
              <$Description>{project.description}</$Description>
            )}

            {trailerUrl && (
              <$VideoContainer>
                <iframe
                  src={trailerUrl}
                  title={`${project.title} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </$VideoContainer>
            )}

            {screenshots.length > 0 && (
              <$Screenshots>
                {screenshots
                  .slice(0, 3)
                  .map((screenshot: string, index: number) => (
                    <$Screenshot
                      key={index}
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                    />
                  ))}
              </$Screenshots>
            )}

            <$Actions>
              <$InternalLink to={webPageLink.url} onClick={closeProject}>
                View Full Page →
              </$InternalLink>
              {pressKitLink && (
                <$InternalLink to={pressKitLink.url} onClick={closeProject}>
                  Press Kit →
                </$InternalLink>
              )}
            </$Actions>
          </$Content>
        </$ScrollContainer>
      </$DetailledProject>
    </$Popin>
  );
};

// -----------------------------------------------------------------------------

export default ProjectPanel;
