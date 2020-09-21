import React from 'react';
import styled from 'styled-components';
import H2 from '../../universal/h2/h2';
import H3 from '../../universal/h3/h3';
import Image from '../../../img/handShake.jpg';

const LeftSide = () => {
    return (
        <Shh>
            <H2>
                We are specialized in creating any kind of 
                product in the field of modern technology,
                <span> from design all the way up to deployment.</span>
            </H2>
            <ImgContainer>
                <Img src={ Image } />
            </ImgContainer>
        </Shh>
    )
}

const Shh = styled.div`
    grid-row: 1 / 5;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    & > h2 {
        line-height: 50px;
    }
    @media (max-width: 800px) {
        height: auto;
        grid-row-end: 2;
        & > h2 {
            line-height: 30px;
        }
    }
`;

const ImgContainer = styled.div`
    position: relative;
    width: 80%;
    height: auto;
    ::before {
        width: 100%;
        height: 100%;
        background: rgba(38, 45, 46, .7);
        position: absolute;
        font-size: 40px;
        content: 'We are always aiming for great relations with our business partners.';
        text-shadow: 0 0 3px #00db53;
        color: rgb(38, 45, 46);
        color: white;
        font-weight: bold;
        font-family: "Averta", sans-serif;
        top: 0;
        left: 0;
        text-align: center;
        padding-top: 20%;
        padding: 20% 10px 0;
        box-sizing: border-box;
    }
    @media (max-width: 800px) {
        display: none;
    }
    @media (max-width: 1150px) {
        ::before {
            font-size: 25px;
        }
    } 
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`

export default LeftSide;