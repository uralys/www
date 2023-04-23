import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {useScrollPosition} from '../../hooks/use-scroll-position';
import {useCallback} from 'react';
import {TOGGLE_FILTER} from '../../barrels/filters.barrel';

import type {Filter, ToggleFilterAction} from '../../barrels/filters.barrel';
import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const $Filters = styled.div<{scrollPosition: number}>`
  margin: 0;
  z-index: 10;
  left: 0;
  top: 0;
  opacity: ${props => (props.scrollPosition > 500 ? 1 : 0)};
  margin-top: ${props => (props.scrollPosition > 500 ? 0 : `-200px`)};
  position: fixed;
  transition: opacity 0.35s ease, margin-top 0.35s ease;
  color: #e2e2e2;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgba(44, 42, 54, 0.9);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 5px 12px 8px;
  border-radius: 0 0 10px 10px;

  ${maxWidth_736} {
    left: auto;
  }
`;

// -----------------------------------------------------------------------------

const $Filter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2px;
  padding: 0;
  height: 30px;
  cursor: pointer;
`;

const $FilterName = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.062rem;
`;

const $Toggle = styled.div<{selected: boolean}>`
  width: 40px;
  height: 5px;
  margin-top: 4px;
  margin-right: 10px;
  border-radius: 1em;
  background-color: ${props => (props.selected ? `#cccccc` : `#848484`)};
  box-shadow: inset 0px 0px 2px 1px rgba(87, 126, 177, 0.3);
  transition: background-color 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  display: flex;

  :after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-color: ${props => (props.selected ? `#e8e8e8` : `#ddd`)};
    box-shadow: 0rem 1px 1px 1px rgba(60, 58, 60, 0.365);
    border-radius: 50%;
    margin-left: ${props => (props.selected ? `26px` : `-26px`)};
    transition: margin-left 0.15s ease-in-out;
  }
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
    <$Filter onClick={toggleFilter}>
      <$Toggle selected={filter.selected} />
      <$FilterName>{filter.text}</$FilterName>
    </$Filter>
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
