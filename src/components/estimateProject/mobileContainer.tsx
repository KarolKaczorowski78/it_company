import React from 'react';
import styled from 'styled-components';
import Img from '../../img/estimateProject.jpg';

const MobileContainer = () => {
    return (
        <Div>
            <img src={ Img } alt=""/>
        </Div>
    )
}

const Div = styled.div`
    flex: .32;
    min-width: 300px;
    height: auto;
    box-sizing: border-box;
    border-left: 7px solid;
    border-right: 7px solid;
    border-top: 30px solid;
    border-bottom: 40px solid;
    border-color: #007d80;
    border-color: #111313;
    box-shadow: 0 0 14px #00db53;
    border-radius: 4%;
    position: relative;
    transition: .5s;
    ::before, ::after {
        content: '';
        position: absolute;        
        left: 50%;
    }
    ::before {
        height: 6px;
        width: 50px;
        border-radius: 15%;
        background: #00db53;
        top: -15px;
        margin-left: -20px;
    }
    ::after {
        width: 22px;
        height: 22px;
        box-sizing: border-box;
        border: 2px solid #00db53;
        border-radius: 50%;
        margin-left: -11px;
        bottom: -30px;
    }
    & > img {
        object-fit: contain;
        width: 100%;
        height: auto;
    }
    &:hover {
        transform: translateY(-20px);
    }
`;

export default MobileContainer;