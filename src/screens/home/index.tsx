import Hero from './hero';
import Projects from './projects';
import Panel from './../../style/panel';
import Filters from './filters';

// -----------------------------------------------------------------------------

const Home = () => {
  return (
    <>
      <Filters />
      <Panel>
        <Hero />
        <Projects />
      </Panel>
    </>
  );
};

// -----------------------------------------------------------------------------

export default Home;
