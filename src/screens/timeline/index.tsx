import Hero from './hero';
import Projects from './projects';
import Panel from '../../style/panel';
import Filters from './filters';
import ProjectPanel from './project-panel';

// -----------------------------------------------------------------------------

const Home = () => (
  <>
    <Filters />
    <Panel>
      <Hero />
      <Projects />
    </Panel>
    <ProjectPanel />
  </>
);

// -----------------------------------------------------------------------------

export default Home;
