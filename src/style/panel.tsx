import {CSSProperties, ReactNode, useEffect} from 'react';
import styled from 'styled-components';
import {maxWidth_360, maxWidth_736} from './breakpoints';

const margin = `
  margin: 3.75em 3em;

  ${maxWidth_736} {
    margin: 1.875rem 3.125rem;
  }

  ${maxWidth_360} {
    margin: 1.40625rem 3.34375rem;
  }
`;

type Props = {
  children?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  alignItems?: CSSProperties['alignItems'];
};

/**
  - Home uses 2 inner panels left/right; they both have the required "margin"
  - Privacy uses no inner panel: "margin" is applied on Panel itself
**/
const $Panel = styled.div<CSSProperties>`
  --transform: translateY(50px);
  --opacity: 0;
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
  opacity: var(--opacity);
  transform: var(--transform);
  transition: opacity 1.25s ease 0s, transform 1.25s ease 0s;
  overflow: hidden;
  ${(props: Props) => !props.leftContent && margin};
`;

const $InnerPanel = styled.div<CSSProperties>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 200%;
`;

const $InnerPanelLeft = styled.div<CSSProperties>`
  --inner-left-opacity: 0;
  --inner-left-translate-x: 0;
  width: 100%;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  text-align: ${props => (props.alignItems ? '' : 'center')};
  opacity: var(--inner-left-opacity);
  transition: opacity 1.25s ease;
  transform: translateX(--inner-left-translate-x);
  ${margin}
`;

const $InnerPanelRight = styled.div<CSSProperties>`
  --inner-right-opacity: 1;
  --inner-right-translate-x: 0;
  width: 100%;
  opacity: var(--inner-right-opacity);
  transition: opacity 1.25s ease;
  background-color: #24f;
  transform: translateX(--inner-right-translate-x);
  ${margin}
`;

const usePanelFadeIn = () => {
  useEffect(() => {
    setTimeout(() => {
      const panel = document.querySelector('.panel') as HTMLElement;
      panel?.style.setProperty('--opacity', '1');
      panel?.style.setProperty('--transform', 'translateY(0)');
    }, 50);

    setTimeout(() => {
      const innerPanel = document.querySelector(
        '.inner-panel-left'
      ) as HTMLElement;
      innerPanel?.style.setProperty('--inner-left-opacity', '1');
    }, 650);
  }, []);
};

const Panel = (props: Props) => {
  usePanelFadeIn();

  return props.leftContent ? (
    <$Panel className="panel" alignItems={props.alignItems}>
      <$InnerPanel className="inner-panel">
        <$InnerPanelLeft className="inner-panel-left">
          {props.leftContent}
        </$InnerPanelLeft>
        <$InnerPanelRight className="inner-panel-right">
          {props.rightContent}
        </$InnerPanelRight>
      </$InnerPanel>
    </$Panel>
  ) : (
    <$Panel className="panel" {...props} />
  );
};

export default Panel;
