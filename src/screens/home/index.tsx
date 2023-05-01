import Hero from './hero';
import Projects from './projects';
import Panel from './../../style/panel';
import Filters from './filters';
import styled from 'styled-components';

const $DetailledProject = styled.div`
  background-color: #123;
`;

// -----------------------------------------------------------------------------

const Home = () => {
  // use taverne to listen to project click and move Panel left/right selection

  return (
    <>
      <Filters />
      <Panel
        leftContent={
          <>
            <Hero />
            <Projects />
          </>
        }
        rightContent={
          <>
            <$DetailledProject>plop</$DetailledProject>
          </>
        }
      ></Panel>
    </>
  );
};

// -----------------------------------------------------------------------------

export default Home;
