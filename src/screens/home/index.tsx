import Hero from './hero';
import Projects from './projects';
import Panel from './../../style/panel';

// -----------------------------------------------------------------------------

const Home = () => {
  return (
    <Panel>
      <Hero />
      <Projects />
    </Panel>
  );
};

// -----------------------------------------------------------------------------

export default Home;
