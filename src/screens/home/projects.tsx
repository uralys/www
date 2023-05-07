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

const $Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${maxWidth_736} {
    flex-direction: column;
  }
`;

const $Texts = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  padding: 10px 50px;
  width: 100%;

  ${maxWidth_736} {
    order: 1 !important;
    padding: 10px;
  }
`;

const $Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const $MiniImage = styled.div`
  display: none;

  ${maxWidth_736} {
    display: flex;
  }

  > img {
    width: 70px;
    margin-right: 30px;
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const $Image = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  flex: 1;

  ${maxWidth_736} {
    display: none;
  }

  > img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const $TitleText = styled.p`
  text-transform: uppercase;
  color: #e2e2e2;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.275rem;
  width: calc(100% + 0.275rem);
  font-size: 0.875em;
  line-height: 1.375;
  font-weight: 400;

  ${maxWidth_736} {
    display: flex;
    font-size: 1em;
  }
`;

const $Description = styled.p`
  color: #e2e2e2;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 1em;
  line-height: 1.75;
  font-weight: 200;
`;

// -----------------------------------------------------------------------------

// spotify src ?theme=0 to remove color
const $Iframe = styled.iframe`
  border: none;
  height: 160px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

// -----------------------------------------------------------------------------

const $Projects = styled.div`
  overflow: hidden;
  width: 100%;
`;

// -----------------------------------------------------------------------------

const ProjectDisplay = ({
  project,
  index
}: {
  project: Project;
  index: number;
}) => {
  const {dispatch, pour} = useTaverne();
  const filters = pour('filters');
  const images = useImages();

  const selectProject = useCallback(() => {
    return;
    dispatch({
      type: SELECT_PROJECT,
      payload: {project}
    } as SelectProjectAction);
  }, []);

  const isSelected = useCallback(
    (filterName: string) => {
      return filters?.find((f: Filter) => f.name === filterName)?.selected;
    },
    [filters]
  );

  if (project.category === 'year') {
    return (
      <Fragment key={`year-${project.id}`}>
        <hr />
        <p> {project.id}</p>
        <hr />
      </Fragment>
    );
  }

  if (!isSelected('everything') && !isSelected(project.category)) {
    return null;
  }

  if (project.category === 'music') {
    return (
      <$Iframe
        src={project.links.find(link => link.platform === 'spotify')?.url}
      />
    );
  }

  return (
    <$Project key={`${project.id}`} onClick={selectProject}>
      <$Texts
        style={{
          order: (index + (project.meta?.inverseOrder ? 1 : 0)) % 2
        }}
      >
        <$Title>
          <$MiniImage>
            <img src={images[project.id]?.logo} />
          </$MiniImage>
          <$TitleText>{project.title}</$TitleText>
        </$Title>
        <$Description>{project.description}</$Description>
      </$Texts>

      <$Image>
        <img src={images[project.id]?.logo} />
      </$Image>
    </$Project>
  );
};

// -----------------------------------------------------------------------------

const Projects = () => {
  const projects = useProjects();

  if (!projects) {
    return null;
  }

  return (
    <$Projects>
      {projects.map((project: Project, index: number) => (
        <ProjectDisplay
          key={`project-${index}`}
          project={project}
          index={index}
        />
      ))}
    </$Projects>
  );
};

// -----------------------------------------------------------------------------

export default Projects;
