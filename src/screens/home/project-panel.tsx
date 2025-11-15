import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {useCallback, useEffect} from 'react';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';
import {maxWidth_736} from '../../style/breakpoints';
import useImages from '../../hooks/use-images';
import {$Link} from '../../style/common';

// -----------------------------------------------------------------------------

const $Popin = styled.div<{visible: boolean}>`
  pointer-events: ${props => `${props.visible ? 'all' : 'none'}`};
  transition: opacity 0.3s ease;
  opacity: ${props => `${props.visible ? '1' : '0'}`};
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
`;

const $DetailledProject = styled.div`
  position: relative;
  max-height: 90vh;
  width: 900px;
  max-width: 90vw;
  background: linear-gradient(135deg, rgba(30, 27, 46, 0.98) 0%, rgba(45, 42, 62, 0.98) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  color: #e2e2e2;
  border-radius: 24px;
  overflow-y: auto;
  overflow-x: hidden;

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

const $Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(30, 27, 46, 0.98) 0%, rgba(45, 42, 62, 0.98) 100%);
  z-index: 20;
  backdrop-filter: blur(10px);
`;

const $CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`;

const $Content = styled.div`
  padding: 0 40px 40px;

  ${maxWidth_736} {
    padding: 0 24px 24px;
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

const $ActionButton = styled.a`
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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
  border: 1px solid rgba(99, 102, 241, 0.4);
  text-align: center;
  flex: 1;
  min-width: 200px;

  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5));
    border-color: rgba(99, 102, 241, 0.6);
    transform: translateY(-2px);
  }

  ${maxWidth_736} {
    min-width: auto;
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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
  border: 1px solid rgba(99, 102, 241, 0.4);
  text-align: center;
  flex: 1;
  min-width: 200px;

  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5));
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
  const webPageLink = project.links?.find(link =>
    link.type === 'Web page' && !link.url.startsWith('http')
  );
  const pressKitLink = project.links?.find(link =>
    link.type === 'presskit'
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

  // Hardcoded trailer URLs for now (you can add this to the YAML later)
  const trailerUrls: {[key: string]: string} = {
    'flying-ones': 'https://www.youtube.com/embed/m8wcnyQimH4',
    'xoozz': 'https://www.youtube.com/embed/VIDEO_ID', // Add actual video IDs
    'battle-squares': 'https://www.youtube.com/embed/VIDEO_ID',
    'avindi': 'https://www.youtube.com/embed/VIDEO_ID',
    'lockeyland': 'https://www.youtube.com/embed/VIDEO_ID'
  };

  const trailerUrl = trailerUrls[project.id];

  return (
    <$Popin onClick={closeProject} visible={!!project}>
      <$DetailledProject onClick={stopPropagation}>
        <$Header>
          <$CloseButton onClick={closeProject}>×</$CloseButton>
        </$Header>
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
              {screenshots.slice(0, 3).map((screenshot: string, index: number) => (
                <$Screenshot key={index} src={screenshot} alt={`${project.title} screenshot ${index + 1}`} />
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
      </$DetailledProject>
    </$Popin>
  );
};

// -----------------------------------------------------------------------------

export default ProjectPanel;
