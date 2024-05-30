import styled from 'styled-components';
import {maxWidth_360, maxWidth_480, maxWidth_736} from './breakpoints';

// -----------------------------------------------------------------------------

const $Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  /* padding: 3.5rem; */

  ${maxWidth_736} {
    /* padding: 1.75rem; */
  }

  ${maxWidth_480} {
    /* padding: 0.75rem; */
  }

  ${maxWidth_360} {
    /* padding: 0.5rem; */
  }
`;

export default $Wrapper;
