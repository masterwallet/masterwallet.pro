import React from 'react';
import styled from 'styled-components';

const ForWhomDiv = styled.div`
  background: url(static/images/teddy-bear-2250.jpg) 0px 0px no-repeat;
  background-size: cover;
  height: 100%;
  color: white;

  h1 { 
    font-family: 'Lato';  
    font-size: 40px; 
    text-align: center; 
    padding-top: 80px; 
    padding-bottom: 30px; 
    color: #ccc;
  }
  * { color: white; }
  ul, .who-wants { margin-left: 200px; }
  ul li { font-size: 32px; line-height: 1.5em; text-shadow: 0px 0px 5px #fff; }

  .who-wants { margin-top: 64px; font-size:20px; }
`;

export const ForWhom = () => (
    <ForWhomDiv>
        <h1>MasterWallet Pro helps in establishing membership businesses for </h1>
        <ul>
            <li>Video Creators</li>
            <li>Podcasters</li>
            <li>Gaming Creators</li>
            <li>Musicians</li>
            <li>Writers</li>
            <li>Artists</li>
            <li>Visual Artists</li>
            <li>Education Creators</li>
            <li>Science Creators</li>
            <li>Dancers and Actors</li>
        </ul>
        <div className="who-wants">
            who wants to be independent and have international support
        </div>
    </ForWhomDiv>
);