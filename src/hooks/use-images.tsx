import projectsYAML from '../../content/projects.yaml';
import type {Project} from '../screens/home/projects';

// -----------------------------------------------------------------------------

type ProjectImages = {
  logo: string;
  screenshots: string[];
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

      const projectImages: Record<string, ProjectImages> = {
        [p.id]: {
          logo,
          screenshots: []
        }
      };

      let canLoadMoreScreenshots = true;
      let i = 0;
      while (canLoadMoreScreenshots) {
        let _screenshot = null;
        i++;

        try {
          _screenshot = (
            await import(
              `../../assets/images/projects/${p.id}/screenshots/${i}.webp`
            )
          ).default;

          if (_screenshot) {
            projectImages[p.id].screenshots.push(_screenshot);
          }
        } catch (e) {
          canLoadMoreScreenshots = false;
          logo = null;
        }
      }

      return projectImages;
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
