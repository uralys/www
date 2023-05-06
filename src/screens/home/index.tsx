import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import Hero from './hero';
import Projects from './projects';
import Panel, {withMarginOrPadding} from './../../style/panel';
import Filters from './filters';
import {useCallback} from 'react';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';

// -----------------------------------------------------------------------------

const $DetailledProject = styled.div`
  height: 75vh;
`;

const $SelectedProject = styled.div<{visible: boolean}>`
  position: fixed;
  z-index: 5;
  pointer-events: ${props => `${props.visible ? 'all' : 'none'}`};
  top: 5vh;
  max-width: 100%;
  background-color: rgba(44, 42, 54, 0.893);
  box-shadow: 0rem 20px 50px 5px rgba(60, 58, 60, 0.865);
  color: #e2e2e2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.75;
  width: 38rem;
  border-radius: 0.5rem;
  transition: opacity 1.25s ease 0s;
  overflow: hidden;
  opacity: ${props => `${props.visible ? '1' : '0'}`};
  ${withMarginOrPadding('padding')}
`;

// -----------------------------------------------------------------------------

const Home = () => {
  const {dispatch, pour} = useTaverne();
  const selectedProject = pour('navigation.selectedProject');

  const closeProject = useCallback(() => {
    dispatch({
      type: SELECT_PROJECT,
      payload: {project: null}
    } as SelectProjectAction);
  }, []);

  return (
    <>
      <Filters />
      <$SelectedProject visible={selectedProject}>
        <$DetailledProject onClick={closeProject}>
          {selectedProject?.title}
        </$DetailledProject>
      </$SelectedProject>
      <Panel>
        <Hero />
        <Projects />
      </Panel>
    </>
  );
};

// -----------------------------------------------------------------------------

export default Home;
