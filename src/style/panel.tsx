import {CSSProperties, ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import {maxWidth_360, maxWidth_736} from './breakpoints';

export const withMarginOrPadding = (marginOrPadding: 'margin' | 'padding') => `
  ${marginOrPadding}: 3.75em 3em;

  ${maxWidth_736} {
    ${marginOrPadding}: 1.875rem 0.9rem;
  }

  ${maxWidth_360} {
    width: 45%;
    ${marginOrPadding}: 2.5%;
  }
`;

export type PanelProps = {
  children?: ReactNode;
  alignItems?: CSSProperties['alignItems'];
};

const $Panel = styled.div<PanelProps & {opacity: number; translateY: number}>`
  max-width: 100%;
  z-index: 1;
  background-color: rgba(34, 32, 42, 0.733);
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  color: #e2e2e2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.75;
  width: 38rem;
  border-radius: 0.5rem;
  opacity: ${props => `${props.opacity}`};
  transform: ${props => `translateY(${props.translateY}px)`};
  transition:
    opacity 1.25s ease 0s,
    transform 1.25s ease 0s;
  overflow: hidden;
  ${withMarginOrPadding('padding')}
`;

const $InnerPanel = styled.div<CSSProperties & {opacity: number}>`
  width: 100%;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  text-align: ${props => (props.alignItems ? '' : 'center')};
  opacity: ${props => `${props.opacity}`};
  transition: opacity 1.25s ease;
`;

const Panel = (props: PanelProps) => {
  const [opacity, setOpacity] = useState<number>(0);
  const [innerOpacity, setInnerOpacity] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(50);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
      setTranslateY(0);
    }, 50);

    setTimeout(() => {
      setInnerOpacity(1);
    }, 750);
  }, []);

  return (
    <$Panel
      className="panel"
      opacity={opacity}
      translateY={translateY}
      {...props}
    >
      <$InnerPanel className="inner-panel" opacity={innerOpacity} {...props} />
    </$Panel>
  );
};

export default Panel;
