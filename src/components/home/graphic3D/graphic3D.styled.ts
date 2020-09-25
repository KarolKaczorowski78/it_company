import styled from 'styled-components';

export const GraphicContainer = styled.div`
    width: 500px;
    height: 500px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    perspective: 10000px;
    @media (max-width: 950px) {
        width: 400px;
        height: 400px;
    }
    @media (max-width: 500px) {
        width: 300px;
        height: 300px;
    }
`;
export const SecondContainer = styled.div`
    width: calc(50% * ${Math.sqrt(2)});
    height: calc(50% * ${Math.sqrt(2)});
    position: relative;
    transform-style: preserve-3d;
    box-sizing: border-box;
    transform-origin: middle;
    transform: rotateX(65deg) rotateZ(45deg);
    ::before {
        width: 100%;
        height: 100%;
        background: black;
        box-shadow: 0 0 20px black;
        content: '';
        position: absolute;
        transform: translateZ(-40px);
    }
    & > * {
        position: absolute;
    }

`;

export const Base = styled.div`
    top: 0;
    background: #171b1b;
    background: #31393a;
    width: 100%;
    height: 100%;
    & > svg {
        color: #00db53;
        font-size: 50px;
    }
`;

export const BasePartBtm = styled.div`
    bottom: -15px;
    height: 15px;
    width: 100%;
    transform-origin: top;
    transform: rotateX(-90deg);
    background: #00db53;
`;

export const BasePartLft = styled.div`
    right: calc(50% - 15px);
    right: -15px;
    top: 0;
    width: 15px;
    height: 100%;
    transform-origin: left;
    transform: rotateY(90deg);
    background: #00db53;
`;

export const Dice = styled.div`
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    background: yellow;
    width: 50px;
    height: 50px;
    transform: rotateX(90deg) translateZ(130px);
`;

export const Principle = styled.div`
    position: relative;

`;