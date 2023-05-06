import projectsYAML from '../../content/projects.yaml';
import type {Project} from '../screens/home/projects';

// -----------------------------------------------------------------------------

type ProjectImages = {
  logo: string;
};

type Images = Record<Project['id'], ProjectImages>;

// -----------------------------------------------------------------------------

const _images: ProjectImages[] = await Promise.all(
  projectsYAML.map(
    async (p: Project): Promise<Record<Project['id'], ProjectImages>> => {
      let logo = null;
      try {
        logo = (await import(`../../assets/images/projects/${p.id}/logo.png`))
          .default;
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

const useImages = () => images;

export default useImages;
