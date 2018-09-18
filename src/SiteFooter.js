import React from 'react';
import styled from 'styled-components';
import { Footer } from 'react-fullpage';

const FooterDiv = styled.div`
  text-align: center;
  font-size: 12px;
  background: white;
  width: 100%;
  padding: 5px 0px;
  opacity: 0.6;
`;


export const SiteFooter = () => (
  <Footer>
    <FooterDiv>
      Copyright &copy; 2018 Master Waller PRO LLC
      &nbsp;
      <a href="https://github.com/masterwallet/" target="_blank" rel="noopener noreferrer">Github</a>
    </FooterDiv>
  </Footer>
);