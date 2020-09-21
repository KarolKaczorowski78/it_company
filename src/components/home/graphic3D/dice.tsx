import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PrincipleContainer } from './principle';

const Dice = (props: props) => {

    const { top, left } = props;

    return (
        <DiceContainer className="dice" left={ left } top={ top }>
            <DiceRelative>
                <DiceFace tV="rotateX(90deg) translateZ(25px)" tVR="rotateX(90deg) translateZ(15px)" />
                <DiceFace tV="translateZ(25px)" tVR="translateZ(15px)" />
                <DiceFace tV="translateZ(-25px)" tVR="translateZ(-15px)" />
                <DiceFace tV="translateY(25px) rotateX(90deg)" tVR="translateY(15px) rotateX(90deg)" />
                <DiceFace tV="rotateY(90deg) translateZ(-25px)" tVR="rotateY(90deg) translateZ(-15px)" />
                <DiceFace tV="rotateY(90deg) translateZ(25px)" tVR="rotateY(90deg) translateZ(15px)" />
            </DiceRelative>
        </DiceContainer>
    )
}

const animation = keyframes`
    0% {
        transform: translateZ(${window.innerWidth < 600 ? '50px' : '90px'});
    }
    50% {
        transform: translateZ(${window.innerWidth < 600 ? '70px' : '110px'});
    }
    100% { 
        transform: translateZ(${window.innerWidth < 600 ? '50px' : '90px'});
    }
`

const DiceContainer = styled(PrincipleContainer)`
    box-sizing: border-box;
    border: none;
    animation: ${animation} 7s infinite; 
    ::before, ::after {
        content: none;
    }
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }
    &, & > div {
        width: 50px; 
        height: 50px;
    }
    @media (max-width: 600px) {
        &, & > div {
            width: 30px;
            height: 30px;
        }
    }
`;

const DiceRelative = styled.div`
    position: relative;
    box-sizing: border-box;
    transform-style: preserve-3d;
    transition: .6s;
    &:hover {
        transform: rotateZ(180deg);
    }
`;

const DiceFace = styled.div<{ tV: string, tVR: string }>`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #31393a;
    border: 2px solid #00db53;
    box-sizing: border-box;
    transform-origin: middle;
    transform: ${({ tV }) => tV};
    @media (max-width: 600px) {
        transform: ${({ tVR }) => tVR};
    }
`;

interface props {
    top: string;
    left: string;
}

export default Dice;
