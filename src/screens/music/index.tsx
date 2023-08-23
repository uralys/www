import Panel from './../../style/panel';
import {type Project} from '../home/projects';
import useProjects from '../../hooks/use-projects';
import {styled} from 'styled-components';
import {Fragment} from 'react';

// -----------------------------------------------------------------------------

// spotify src ?theme=0 to remove color
export const $Iframe = styled.iframe`
  border: none;
  height: 160px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

// -----------------------------------------------------------------------------

const useMusics = () => {
  const projects = useProjects();
  const musics = projects?.filter(p => ['music', 'year'].includes(p.category));
  if (!musics) {
    return [];
  }

  let lastCategory = '';
  const selection: Array<Project> = musics.reduce(
    (acc: Array<Project>, project: Project) => {
      if (project.category === 'year' && lastCategory === 'year') {
        return acc;
      }
      lastCategory = project.category;
      acc.push(project);
      return acc;
    },
    []
  );

  if (selection[selection.length - 1].category === 'year') {
    selection.splice(selection.length - 1, 1);
  }

  return selection;
};

// -----------------------------------------------------------------------------

const MusicScreen = () => {
  const musics = useMusics();

  return (
    <Panel alignItems="flex-start">
      <h1>Music</h1>
      <p>You can fin all titles on most of streaming platforms</p>
      {musics?.map((project: Project) => {
        if (project.category === 'year') {
          return (
            <Fragment key={`year-${project.id}`}>
              <hr />
              <p> {project.id}</p>
              <hr />
            </Fragment>
          );
        }

        if (project.category === 'music') {
          return (
            <$Iframe
              key={project.title}
              src={project.links.find(link => link.platform === 'spotify')?.url}
            />
          );
        }
      })}
    </Panel>
  );
};

// -----------------------------------------------------------------------------

export default MusicScreen;
