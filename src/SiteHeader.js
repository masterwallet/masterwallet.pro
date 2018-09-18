import React from 'react';
import styled from 'styled-components';
import { Header } from 'react-fullpage';

const HeaderDiv = styled.div`
  text-align: right;
  font-size: 12px;
  background: black;
  width: 100%;
  opacity: 0.7;
  a { 
    color: white !important; 
    text-decoration: none; 
    text-transform: uppercase;

    display: inline-block;
    padding: 10px 20px;
    
    font-weight: 900;
    font-size: 18px;
    font-family: Nunito, sans-serif;

    @media(max-width: 640px) { font-size: 14px; }
  }

  a.active {
    background: #666;
  }
`;

export const SiteHeader = () => (
  <Header>
    <HeaderDiv>
      <a href="#wallet">Wallet</a>
      <a href="#features">Features</a>
      <a href="#telos">Telos BP</a>
    </HeaderDiv>
  </Header>
);