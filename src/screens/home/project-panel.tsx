import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {withMarginOrPadding} from '../../style/panel';
import {useCallback, useEffect} from 'react';
import {
  SELECT_PROJECT,
  SelectProjectAction
} from '../../barrels/navigation.barrel';
import useImages from '../../hooks/use-images';

// -----------------------------------------------------------------------------

const $Popin = styled.div<{visible: boolean}>`
  pointer-events: ${props => `${props.visible ? 'all' : 'none'}`};
  transition: opacity 0.35s ease 0s;
  opacity: ${props => `${props.visible ? '1' : '0'}`};
  z-index: 5;
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

const $DetailledProject = styled.div`
  height: 80vh;
  width: 48rem;
  max-width: 100%;
  background-color: rgba(44, 42, 54, 0.967);
  box-shadow: 0rem 20px 50px 5px rgba(60, 58, 60, 0.865);
  color: #e2e2e2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.75;
  border-radius: 0.5rem;
  overflow: hidden;
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

  useEffect(() => {
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', project ? 'hidden' : 'inherit');
  }, [project]);

  return (
    <$Popin onClick={closeProject} visible={project}>
      <$DetailledProject onClick={closeProject}>
        {project?.title}
        <img src={images[project?.id]?.logo} />
      </$DetailledProject>
    </$Popin>
  );
};

// -----------------------------------------------------------------------------

export default ProjectPanel;
