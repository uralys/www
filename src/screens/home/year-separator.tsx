import styled from 'styled-components';
import {maxWidth_736} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const $YearContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 40px;

  ${maxWidth_736} {
    margin: 40px 0 30px;
  }
`;

const $YearBadge = styled.div`
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #1e1b2e 0%, #2d2a3e 100%);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 12px 36px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  ${maxWidth_736} {
    padding: 10px 28px;
  }
`;

const $Year = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #8b84b8, #7b77b1, #818695);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  position: relative;

  &::before {
    content: attr(data-year);
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, #8b84b8, #7b77b1, #818695);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(20px);
    opacity: 0.5;
    z-index: -1;
  }

  ${maxWidth_736} {
    font-size: 1.25em;
  }
`;

const $Line = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(139, 132, 184, 0.3) 20%,
    rgba(123, 119, 177, 0.3) 50%,
    rgba(129, 134, 149, 0.3) 80%,
    transparent 100%
  );
  z-index: 1;
`;

const $Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(139, 132, 184, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;

  ${maxWidth_736} {
    width: 300px;
    height: 300px;
  }
`;

// -----------------------------------------------------------------------------

interface YearSeparatorProps {
  year: string;
}

const YearSeparator = ({year}: YearSeparatorProps) => {
  return (
    <$YearContainer>
      <$Glow />
      <$Line />
      <$YearBadge>
        <$Year data-year={year}>{year}</$Year>
      </$YearBadge>
    </$YearContainer>
  );
};

// -----------------------------------------------------------------------------

export default YearSeparator;
