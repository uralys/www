import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import projectsYAML from '../../assets/content/projects.yaml';

// -----------------------------------------------------------------------------

const $Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
  z-index: 1;
  background-color: rgba(44, 42, 54, 0.893);
  box-shadow: 0rem 20px 50px 5px rgba(60, 58, 60, 0.865);
  color: #ededed;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.75;
  font-weight: 200;
  letter-spacing: 0.025rem;
  width: 420px;
  border-radius: 10px;
  margin-bottom: 100px;
  margin-top: 100px;
  transition: opacity 1.25s ease 0s, transform 1.25s ease 0s;
`;

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

  return (
    <$Wrapper>
      <h2>projects</h2>
      <$Projects>
        {projects.map((p: Project) => (
          <p key={`${p.id}`}>{p.title}</p>
        ))}
      </$Projects>
    </$Wrapper>
  );
};

// -----------------------------------------------------------------------------

export default Projects;
