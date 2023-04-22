import styled from 'styled-components';
import {useScrollPosition} from '../../hooks/use-scroll-position';

const $Filters = styled.p<{scrollPosition: number}>`
  opacity: ${props => (props.scrollPosition > 500 ? 1 : 0)};
  position: fixed;
  z-index: 10;
  top: 0;
  margin: 0;
  transition: opacity 0.35s ease;
  color: #ba0c71;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 5px 50px 10px;
  border-radius: 0 0 10px 10px;
`;

const Filters = () => {
  const scrollPosition = useScrollPosition();

  return <$Filters scrollPosition={scrollPosition}>{scrollPosition}</$Filters>;
};

export default Filters;
