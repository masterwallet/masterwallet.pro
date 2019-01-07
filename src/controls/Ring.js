import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.div`
circle {
  fill: white;
  fill-opacity: 0;
  stroke: #fbf;
  stroke-opacity: 0.4;
  stroke-width: 3px;
  transition: stroke-opacity 1s, stroke-width 1s, transform 1s;
  transform-origin: 50% 50%;
}

circle:hover {
  stroke-opacity: 0.4;
  stroke-width: 0;
  transform: scale(0.1);
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

svg {
  animation: App-logo-spin infinite 20s linear;
  width: 150px;
}
`;

export const Ring = ({ r }) => {
  const width = r * 2;
  const height = r * 2;

  const rO = r;
  const rI = r - 10;
  const rM = r - 20;
  const radial = (r, angle) => (`${parseInt(width / 2.0 + r*Math.cos(angle), 10)} ${parseInt(height / 2.0 - r*Math.sin(angle),10)}`);
  return (
    <SvgWrapper>
      <svg style={{ width, height }} viewBox={`0 0 ${width} ${height}`}>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(a => {
           const angle = a * 2.0 * Math.PI / 16.0;
           const angle2 = (a + 0.5) * 2.0 * Math.PI / 16.0;
           const angle4 = (a + 0.25) * 2.0 * Math.PI / 16.0;
           const angle2m = (a - 0.5) * 2.0 * Math.PI / 16.0;
           const angle4m = (a - 0.25) * 2.0 * Math.PI / 16.0;
           return [
             <path key={`${a}-l`} stroke="#faf" opacity="0.3" fill="#f8f" 
               d={`M${radial(rO, angle)} L${radial(rI, angle2)} L${radial(rM, angle)} L${radial(rI, angle4)}Z`} 
             />,
             <path key={`${a}-r`} stroke="#faf" opacity="0.3" fill="#f8f" 
               d={`M${radial(rO, angle)} L${radial(rI, angle2m)} L${radial(rM, angle)} L${radial(rI, angle4m)}Z`} 
             />
           ];
        })}
        {/*<circle class = "innerCircle" cx = "50%" cy = "50%" r={rM - 5} />*/}
      </svg>
    </SvgWrapper>
  );
}
