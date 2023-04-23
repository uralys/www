import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {useScrollPosition} from '../../hooks/use-scroll-position';
import {useCallback} from 'react';
import {TOGGLE_FILTER} from '../../barrels/filters.barrel';

import type {Filter, ToggleFilterAction} from '../../barrels/filters.barrel';

// -----------------------------------------------------------------------------

const $Filters = styled.div<{scrollPosition: number}>`
  margin: 0;
  z-index: 10;
  top: 0;
  opacity: ${props => (props.scrollPosition > 500 ? 1 : 0)};
  margin-top: ${props => (props.scrollPosition > 500 ? 0 : `-200px`)};
  position: fixed;
  transition: opacity 0.35s ease, margin-top 0.35s ease;
  color: #ba0c71;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 5px 50px 10px;
  border-radius: 0 0 10px 10px;
`;

// -----------------------------------------------------------------------------

type FilterDisplayProps = {filter: Filter};

const FilterDisplay = (props: FilterDisplayProps) => {
  const {filter} = props;
  const {name: filterName} = filter;
  const {dispatch} = useTaverne();

  const toggleFilter = useCallback(() => {
    dispatch({
      type: TOGGLE_FILTER,
      payload: {selectedName: filterName}
    } as ToggleFilterAction);
  }, [filterName]);

  return (
    <p onClick={toggleFilter}>
      {filter.name} / {filter.selected && 'selected'}
    </p>
  );
};

// -----------------------------------------------------------------------------

const Filters = () => {
  const scrollPosition = useScrollPosition();
  const {pour} = useTaverne();
  const filters = pour('filters');

  if (!filters) {
    return null;
  }

  return (
    <$Filters scrollPosition={scrollPosition}>
      {filters.map((filter: Filter) => (
        <FilterDisplay filter={filter} key={filter.name} />
      ))}
    </$Filters>
  );
};

// -----------------------------------------------------------------------------

export default Filters;
