import {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';
import projectsYAML from '../../../content/projects.yaml';
import {maxWidth_736} from '../../style/breakpoints';

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
  padding: 20px;
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

  return (
    <$Projects>
      {projects.map((project: Project, index: number) => {
        if (project.category === 'year') {
          return (
            <Fragment key={`year-${project.id}`}>
              <hr />
              <p> {project.id}</p>
              <hr />
            </Fragment>
          );
        }

        return (
          <$Project key={`${project.id}`}>
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
              {/* <p>
                catgory: {project.category} id: {project.id}
              </p> */}
            </$Texts>

            <$Image>
              <img src={images[project.id]?.logo} />
            </$Image>
          </$Project>
        );
      })}
    </$Projects>
  );
};

// -----------------------------------------------------------------------------

export default Projects;
