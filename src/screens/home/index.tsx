import Hero from './hero';
import Projects from './projects';
import Panel from './../../style/panel';
import Filters from './filters';
import ProjectPanel from './project-panel';

// -----------------------------------------------------------------------------

const Home = () => (
  <>
    <Filters />
    <ProjectPanel />
    <Panel>
      <Hero />
      <Projects />
    </Panel>
  </>
);

// -----------------------------------------------------------------------------

export default Home;
