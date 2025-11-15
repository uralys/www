import styled from 'styled-components';
import {Project} from './projects';
import {maxWidth_736} from '../../style/breakpoints';
import {useTaverne} from 'taverne/hooks';
import {useCallback, useState} from 'react';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';

// -----------------------------------------------------------------------------

const $Card = styled.div<{$expanded?: boolean}>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 24px 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(10px);
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 12px 24px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.15);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b84b8, #7b77b1, #818695);
    opacity: ${props => props.$expanded ? '1' : '0'};
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  ${maxWidth_736} {
    padding: 16px 20px 12px;
  }
`;

const $CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  ${maxWidth_736} {
    flex-direction: column;
  }
`;

const $ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${$Card}:hover & img {
    transform: scale(1.1);
  }

  ${maxWidth_736} {
    width: 80px;
    height: 80px;
  }
`;

const $Content = styled.div`
  flex: 1;
  text-align: left;
`;

const $Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  color: #fff;
  margin: 0 0 12px 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-align: left;

  ${maxWidth_736} {
    font-size: 1.25em;
  }
`;

const $Description = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1em;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;

  ${maxWidth_736} {
    font-size: 0.95em;
  }
`;

const $Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const $Badge = styled.span<{variant?: 'category' | 'tech'}>`
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

const $ExpandableContent = styled.div<{$expanded: boolean}>`
  max-height: ${props => props.$expanded ? '1000px' : '0'};
  opacity: ${props => props.$expanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const $Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const $MoreButton = styled.button`
  margin-top: 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9em;
  font-weight: 600;
  color: #a5b4fc;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 10px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.25));
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
  }
`;

const $Link = styled.a`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9em;
  color: #a5b4fc;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);

  &:hover {
    color: #fff;
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateX(4px);
  }

  &::after {
    content: '→';
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const $InternalLink = styled($Link).attrs({as: 'div'})``;

// -----------------------------------------------------------------------------

interface ProjectCardProps {
  project: Project;
  image?: string;
}

const ProjectCard = ({project, image}: ProjectCardProps) => {
  const {dispatch} = useTaverne();
  const [expanded, setExpanded] = useState(false);

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

  const toggleExpand = useCallback(() => {
    setExpanded(prev => !prev);
  }, []);

  const openPopup = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();

    // Only open popup if project has a dedicated page
    const hasWebPage = project.links?.some(link =>
      link.type === 'Web page' && !link.url.startsWith('http')
    );

    if (hasWebPage) {
      dispatch({
        type: SELECT_PROJECT,
        payload: {project}
      } as SelectProjectAction);
    }
  }, [project, dispatch]);

  const categoryInfo = getCategoryInfo(project.category);

  // Check if project has a web page for the More button
  const hasWebPage = project.links?.some(link =>
    link.type === 'Web page' && !link.url.startsWith('http')
  );

  return (
    <$Card onClick={toggleExpand} $expanded={expanded}>
      <$CardHeader>
        <$Content>
          <$Title>{project.title}</$Title>
          <$Meta>
            <$Badge variant="category">
              {categoryInfo.icon} {categoryInfo.label}
            </$Badge>
            {project.dates && <$Badge>{project.dates}</$Badge>}
          </$Meta>
        </$Content>
        {image && (
          <$ImageContainer>
            <img src={image} alt={project.title} />
          </$ImageContainer>
        )}
      </$CardHeader>

      <$ExpandableContent $expanded={expanded}>
        {project.description && (
          <$Description>{project.description}</$Description>
        )}

        {project.technos && project.technos.length > 0 && (
          <$Meta>
            {project.technos.slice(0, 4).map((tech, index) => (
              <$Badge key={index} variant="tech">{tech}</$Badge>
            ))}
          </$Meta>
        )}

        {project.links && project.links.length > 0 && (
          <$Links>
            {project.links.map((linkInfo, index) => {
              if (linkInfo.url.startsWith('http')) {
                return (
                  <$Link key={index} href={linkInfo.url} target="_blank" rel="noreferrer">
                    {linkInfo.label}
                  </$Link>
                );
              }
              return null;
            })}
          </$Links>
        )}

        {hasWebPage && (
          <$MoreButton onClick={openPopup}>
            View More Details
          </$MoreButton>
        )}
      </$ExpandableContent>
    </$Card>
  );
};

// -----------------------------------------------------------------------------

export default ProjectCard;
