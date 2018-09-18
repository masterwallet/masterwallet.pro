import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  h3 {  
    text-align: center;
    font-size: 48px;
  }
  h4 {  
    text-align: center;
    font-size: 32px;
  }
  margin-bottom: 200px;
`;

export const TelosBlockProducer = () => (
  <ContainerDiv>
    <h3>Telos Block Producer Candidate</h3>
    <h4><span style={{ color: '#888' }}>Account:</span> masterwallet</h4>
  </ContainerDiv>
);