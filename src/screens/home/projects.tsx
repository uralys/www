import {useEffect, useState} from 'react';
import styled from 'styled-components';
import projectsYAML from '../../../assets/content/projects.yaml';

// -----------------------------------------------------------------------------

type ProjectId = string;
type ProjectImages = {
  logo: string;
};

type Images = Record<ProjectId, ProjectImages>;

type Project = {
  category: 'games' | 'freelance' | 'job' | 'partnership' | 'school' | 'year';
  id: ProjectId;
  title: string;
  location: string;
  roles: Array<string>;
  technos: Array<string>;
  dates: string;
  description: string;
  links: Array<{
    type: string;
    url: string;
  }>;
};

// -----------------------------------------------------------------------------

const _images: ProjectImages[] = await Promise.all(
  projectsYAML.map(
    async (p: Project): Promise<Record<ProjectId, ProjectImages>> => {
      let logo = null;
      try {
        logo = (
          await import(`../../../assets/images/projects/${p.id}/logo.png`)
        ).default;
      } catch (e) {
        logo = null;
      }

      return {
        [p.id]: {
          logo
        }
      };
    }
  )
);

const images: Images = _images.reduce((acc, primages) => {
  return {
    ...acc,
    ...primages
  };
}, {});

// -----------------------------------------------------------------------------

const $Projects = styled.div`
  overflow: hidden;
`;

// -----------------------------------------------------------------------------

const Projects = () => {
  const [projects, setProjects] = useState<Array<Project>>();

  useEffect(() => {
    setProjects(projectsYAML as Array<Project>);
  }, []);

  if (!projects) {
    return null;
  }

  console.log({projects});

  return (
    <$Projects>
      <h3>projects</h3>
      {projects.map((p: Project) => (
        <>
          <p key={`${p.id}`}>
            {p.title} | {p.id}
          </p>

          <img src={images[p.id]?.logo} />
        </>
      ))}
    </$Projects>
  );
};

// -----------------------------------------------------------------------------

export default Projects;
