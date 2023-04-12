import {CSSProperties} from 'react';
import styled from 'styled-components';
import {maxWidth_360, maxWidth_736} from './breakpoints';

const $Panel = styled.div<CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  text-align: ${props => (props.alignItems ? '' : 'center')};
  max-width: 100%;
  z-index: 1;
  background-color: rgba(44, 42, 54, 0.893);
  box-shadow: 0rem 20px 50px 5px rgba(60, 58, 60, 0.865);
  color: #e2e2e2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.75;
  width: 38rem;
  border-radius: 0.5rem;
  padding: 3.75em 3em;
  transition: opacity 1.25s ease 0s, transform 1.25s ease 0s;

  ${maxWidth_736} {
    padding: 1.875rem 3.125rem;
    margin-top: 80px;
  }

  ${maxWidth_360} {
    padding: 1.40625rem 3.34375rem;
  }
`;

export default $Panel;
