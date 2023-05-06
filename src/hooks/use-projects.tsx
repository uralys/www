import {useEffect, useState} from 'react';
import projectsYAML from '../../content/projects.yaml';
import type {Project} from '../screens/home/projects';

const useProjects = (): Array<Project> | null => {
  const [projects, setProjects] = useState<Array<Project> | null>(null);

  useEffect(() => {
    setProjects(projectsYAML as Array<Project>);
  }, []);

  return projects;
};

export default useProjects;
