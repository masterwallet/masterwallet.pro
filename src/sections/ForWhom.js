import React from 'react';
import styled from 'styled-components';

const ForWhomDiv = styled.div`
  height: 100%;
  color: white;

  h1 { 
    font-family: 'Lato';  
    font-size: 40px; 
    text-align: center; 
    line-height: 1.2em;
    padding-top: 80px; 
    padding-bottom: 30px; 
    color: #ccc;
  }
  * { color: white; }
  
  

  @media(min-width: 800px) {
    ul, .who-wants { margin-left: 200px; }
    ul li { font-size: 32px; line-height: 1.75em; text-shadow: 0px 0px 5px #fff; }
    .who-wants { margin-top: 64px; font-size:20px; }

    background: url(static/images/teddy-bear-2250.jpg) 0px 0px no-repeat;
    background-size: cover;
  }

  @media(max-width: 800px) {
    h1 { 
        font-size: 26px; 
        color: white;
        padding-left: 20px; 
        padding-right: 20px;
        padding-top: 20px; 
    }
    ul, .who-wants { 
        margin-left: 20px; 
        margin-right: 20px; 
    }
    .who-wants {
        color: white;
        font-weight: bold;
    }
    background: #222;
  }


`;

export const ForWhom = () => (
    <ForWhomDiv>
        <h1>MasterWallet Pro takes the pain of membership businesses for </h1>
        <ul>
            <li>Video Creators</li>
            <li>Podcasters</li>
            <li>Software Developers</li>
            <li>Gaming Creators</li>
            <li>Education Creators</li>
            <li>Science Creators</li>
            <li>Musicians</li>
            <li>Writers</li>
            <li>Artists</li>
            <li>Visual Artists</li>
            <li>Dancers and Actors</li>
        </ul>
        <div className="who-wants">
            who wants to be independent and have international support
        </div>
    </ForWhomDiv>
);