import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {withMarginOrPadding} from '../../style/panel';
import {useCallback} from 'react';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';
import useImages from '../../hooks/use-images';

// -----------------------------------------------------------------------------

const $DetailledProject = styled.div<{visible: boolean}>`
  height: 75vh;
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

const ProjectPanel = () => {
  const {dispatch, pour} = useTaverne();
  const project = pour('navigation.selectedProject');
  const images = useImages();

  const closeProject = useCallback(() => {
    dispatch({
      type: SELECT_PROJECT,
      payload: {project: null}
    } as SelectProjectAction);
  }, []);

  console.log({project});

  return (
    <$DetailledProject onClick={closeProject} visible={project}>
      {project?.title}
      <img src={images[project?.id]?.logo} />
    </$DetailledProject>
  );
};

// -----------------------------------------------------------------------------

export default ProjectPanel;
