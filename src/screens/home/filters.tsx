import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {useScrollPosition} from '../../hooks/use-scroll-position';
import {useCallback} from 'react';
import {SELECT_FILTER} from '../../barrels/filters.barrel';

import type {Filter, SelectFilterAction} from '../../barrels/filters.barrel';

// -----------------------------------------------------------------------------

const $Filters = styled.p<{scrollPosition: number}>`
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
  const {dispatch} = useTaverne();

  const selectFilter = (filterName: Filter['name']) =>
    useCallback(() => {
      dispatch({
        type: SELECT_FILTER,
        payload: {selectedName: filterName}
      } as SelectFilterAction);
    }, []);

  return (
    <p onClick={selectFilter(filter.name)}>
      {filter.name} / {filter.selected && 'selected'}
    </p>
  );
};

// -----------------------------------------------------------------------------

const Filters = () => {
  const scrollPosition = useScrollPosition();
  const {pour} = useTaverne();
  const filters = pour('filters');
  console.log({filters});

  if (!filters) {
    return null;
  }

  return (
    <$Filters scrollPosition={scrollPosition}>
      {filters.map((filter: Filter) => (
        <FilterDisplay filter={filter} />
      ))}
    </$Filters>
  );
};

// -----------------------------------------------------------------------------

export default Filters;
