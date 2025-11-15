import styled from 'styled-components';
import {useTaverne} from 'taverne/hooks';
import {useScrollPosition} from '../../hooks/use-scroll-position';
import {useCallback} from 'react';
import {TOGGLE_FILTER} from '../../barrels/filters.barrel';

import type {Filter, ToggleFilterAction} from '../../barrels/filters.barrel';
import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const $Filters = styled.div<{$scrollPosition: number}>`
  margin: 0;
  z-index: 4;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  opacity: ${props => (props.$scrollPosition > 500 ? 1 : 0)};
  margin-top: ${props => (props.$scrollPosition > 500 ? 0 : `-200px`)};
  position: fixed;
  transition:
    opacity 0.35s ease,
    margin-top 0.35s ease;
  color: #e2e2e2;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 12px 20px 14px;
  border-radius: 0 0 20px 20px;
  display: flex;
  gap: 16px;
  align-items: center;

  ${maxWidth_736} {
    flex-direction: column;
    gap: 8px;
    padding: 10px 16px 12px;
  }
`;

// -----------------------------------------------------------------------------

const $Filter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.12);
  }

  ${maxWidth_736} {
    width: 100%;
    padding: 6px 12px;
  }
`;

const $FilterName = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
`;

const $Toggle = styled.div<{selected: boolean}>`
  width: 44px;
  height: 22px;
  margin-right: 12px;
  border-radius: 11px;
  background-color: ${props =>
    props.selected
      ? `linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(139, 92, 246, 0.6))`
      : `rgba(255, 255, 255, 0.15)`};
  background: ${props =>
    props.selected
      ? `linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(139, 92, 246, 0.6))`
      : `rgba(255, 255, 255, 0.15)`};
  border: 1px solid
    ${props =>
      props.selected ? `rgba(99, 102, 241, 0.4)` : `rgba(255, 255, 255, 0.2)`};
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background: ${props =>
      props.selected ? `#fff` : `rgba(255, 255, 255, 0.8)`};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    position: absolute;
    left: ${props => (props.selected ? `23px` : `2px`)};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    <$Filters $scrollPosition={scrollPosition}>
      {filters.map((filter: Filter) => (
        <FilterDisplay filter={filter} key={filter.name} />
      ))}
    </$Filters>
  );
};

// -----------------------------------------------------------------------------

export default Filters;
