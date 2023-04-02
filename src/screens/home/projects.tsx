import {useEffect, useState} from 'react';
import styled from 'styled-components';
import projectsYAML from '../../../assets/content/projects.yaml';

// -----------------------------------------------------------------------------

const $Projects = styled.div`
  overflow: hidden;
`;

// -----------------------------------------------------------------------------

type Project = {
  category: 'games' | 'freelance' | 'job' | 'partnership' | 'school' | 'year';
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
  }>;
};

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
        <p key={`${p.id}`}>{p.title}</p>
      ))}
    </$Projects>
  );
};

// -----------------------------------------------------------------------------

export default Projects;
