import {Fragment, useCallback} from 'react';
import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';

import {maxWidth_736} from '../../style/breakpoints';
import {Filter} from '../../barrels/filters.barrel';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';
import useImages from '../../hooks/use-images';
import useProjects from '../../hooks/use-projects';

import ProjectCard from './project-card';
import YearSeparator from './year-separator';
import MusicCard from './music-card';

// -----------------------------------------------------------------------------

export type Project = {
  category:
    | 'games'
    | 'freelance'
    | 'music'
    | 'job'
    | 'partnership'
    | 'school'
    | 'year';
  id: string;
  title: string;
  location: string;
  roles: Array<string>;
  technos: Array<string>;
  dates: string;
  description: string;
  links: Array<{
    type: string;
    label: string;
    url: string;
    platform?:
      | 'spotify'
      | 'applemusic'
      | 'deezer'
      | 'amazonmusic'
      | 'soundcloud';
  }>;
  meta?: {
    inverseOrder: boolean;
  };
};

// -----------------------------------------------------------------------------

const $Projects = styled.div`
  overflow: hidden;
  width: 100%;
`;

const $ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
  margin: 40px 0;

  ${maxWidth_736} {
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 24px 0;
  }
`;

const $MusicSection = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  ${maxWidth_736} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 24px 0;
  }
`;

// -----------------------------------------------------------------------------

const ProjectDisplay = ({
  project
}: {
  project: Project;
}) => {
  const {pour} = useTaverne();
  const filters = pour('filters');
  const images = useImages();

  const isSelected = useCallback(
    (filterName: string) => {
      return filters?.find((f: Filter) => f.name === filterName)?.selected;
    },
    [filters]
  );

  if (project.category === 'year') {
    return <YearSeparator key={`year-${project.id}`} year={project.id} />;
  }

  if (!isSelected('everything') && !isSelected(project.category)) {
    return null;
  }

  if (project.category === 'music') {
    return (
      <MusicCard
        key={`music-${project.id}`}
        project={project}
      />
    );
  }

  return (
    <ProjectCard
      key={`project-${project.id}`}
      project={project}
      image={images[project.id]?.logo}
    />
  );
};

// -----------------------------------------------------------------------------

const Projects = () => {
  const projects = useProjects();
  const {pour} = useTaverne();
  const filters = pour('filters');

  if (!projects) {
    return null;
  }

  const isSelected = (filterName: string) => {
    return filters?.find((f: Filter) => f.name === filterName)?.selected;
  };

  // Group projects by year sections
  const renderProjects = () => {
    const elements: JSX.Element[] = [];
    let currentYearProjects: Project[] = [];
    let currentMusicProjects: Project[] = [];
    let currentYear: string | null = null;

    projects.forEach((project, index) => {
      if (project.category === 'year') {
        // Render previous year's projects if any
        if (currentYear && currentYearProjects.length > 0) {
          elements.push(
            <$ProjectsGrid key={`grid-${currentYear}`}>
              {currentYearProjects.map(p => (
                <ProjectDisplay key={`project-${p.id}`} project={p} />
              ))}
            </$ProjectsGrid>
          );
        }

        // Render previous year's music if any
        if (currentYear && currentMusicProjects.length > 0) {
          elements.push(
            <$MusicSection key={`music-${currentYear}`}>
              {currentMusicProjects.map(p => (
                <ProjectDisplay key={`music-${p.id}`} project={p} />
              ))}
            </$MusicSection>
          );
        }

        // Add year separator
        elements.push(
          <YearSeparator key={`year-${project.id}`} year={project.id} />
        );

        // Reset for new year
        currentYear = project.id;
        currentYearProjects = [];
        currentMusicProjects = [];
      } else if (project.category === 'music') {
        // Add to music projects
        if (isSelected('everything') || isSelected('music')) {
          currentMusicProjects.push(project);
        }
      } else {
        // Add to regular projects
        if (isSelected('everything') || isSelected(project.category)) {
          currentYearProjects.push(project);
        }
      }
    });

    // Render last year's projects if any
    if (currentYearProjects.length > 0) {
      elements.push(
        <$ProjectsGrid key={`grid-${currentYear || 'last'}`}>
          {currentYearProjects.map(p => (
            <ProjectDisplay key={`project-${p.id}`} project={p} />
          ))}
        </$ProjectsGrid>
      );
    }

    // Render last year's music if any
    if (currentMusicProjects.length > 0) {
      elements.push(
        <$MusicSection key={`music-${currentYear || 'last'}`}>
          {currentMusicProjects.map(p => (
            <ProjectDisplay key={`music-${p.id}`} project={p} />
          ))}
        </$MusicSection>
      );
    }

    return elements;
  };

  return <$Projects>{renderProjects()}</$Projects>;
};

// -----------------------------------------------------------------------------

export default Projects;
