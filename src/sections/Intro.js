import React from 'react';
import styled from 'styled-components';

const IntroDiv = styled.div`
    font-size: 14px;
    height: 100%;
    color:  #2e2e2e; /* #b9b9b9; */
    background: url(static/images/lightbk.jpg) repeat-y;
    background-size: cover;

    h1, h2, h3, h4, h5 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        line-height: 1em;
    }

    .huge-title {
        font-family: sans-serif;
        font-weight: 900;
        font-size: 64px;
        margin-bottom: 20px;
    
        background-color: #f28746;
        color: white;
        text-shadow: 0px 0px 3px #aaa;
        padding: 20px;
        margin-left: 300px;
        margin-right: -20px;
    }
    
    .huge-title .pro {
        font-family: 'Lato', sans-serif;
        color: #b76838;
        text-shadow: 0px 0px 3px #000;
    }
    
    .huge-title .dot {
        color: #b76838;
        margin-left: -20px;
        margin-right: -10px;
    }
    
    .pain-and-relief {
        text-align: left;
        margin-left: 300px;
        padding-top: 20px;
        padding-bottom: 120px;
        font-size: 22px;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
    }

    .flex {
        display: flex;
    }

    .flex h3 {
        flex: 1;
        text-align: center;
        font-size: 20px;
        color: #383838;
        padding-bottom: 40px;
        padding-left: 30px;
        padding-right: 30px;
        font-family: 'Raleway', sans-serif;
    }
    .flex .img-wrap {
        display: block;
        vertical-align: bottom;
        text-align: center;
    }
    .flex .img-wrap img {
        height: 250px;
        width: auto;
    }

    @media(max-width: 800px) {
        .flex { display: block;}
        .flex h3 { width: 75%;  margin: 0px auto; text-align: center;  }
    }

    
    
`;

export const Intro = () => (
    <IntroDiv>
        <header>
            <p className="huge-title">
                MASTER WALLET
                <span className="dot">.</span>
                <span className="pro">pro</span>
            </p>
        </header>

        <div className="pain-and-relief">
            Subscription model is a pain to administer on your own.<br />
            Our service helps you to establish your business with crypto currency
        </div>

        <div className="flex">
            <h3>
                <div className='img-wrap'>
                    <img src='static/images/info-pig.png' alt='' />
                </div>
                Use crypto for invoices and regular payments in your business
            </h3>
            <h3>
                <div className='img-wrap'>
                    <img src='static/images/info-calendar-coins.png' alt=''/>
                </div>
                Provide valuable content for members of your community and get paid 
                by them in crypto on monthly basis.
            </h3>
        </div>
    </IntroDiv>
);