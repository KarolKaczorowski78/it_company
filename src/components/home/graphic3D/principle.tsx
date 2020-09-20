import React from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Principle = (props: props) => {

    const { top, left, icon } = props;

    return (
        <PrincipleContainer left={ left } top={ top }>
            <FontAwesomeIcon icon={ icon } />
        </PrincipleContainer>
    )
}

export const PrincipleContainer = styled.div<{ left: string, top: string; }>`
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 2;
    left: ${({ left }) => left};
    top: ${({ top }) => top};
    transition: .2s ease-in;
    box-sizing: border-box;
    display: flex;
    background: #31393a;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    border: 1px solid transparent;
    &:hover {
        transform: translateZ(8px);
        border-color: #00db53;;
    }
    & > svg {
        font-size: 30px;
        color: #00db53;
    }
    ::before, ::after {
        position: absolute;
        background: #00db53;
        content: '';
    }
    ::before {
        width: 50px;
        width: 100%;
        height: 8px;
        transform-origin: bottom;
        transform: rotateX(90deg);
        left: 0;
        bottom: 0;
    }
    ::after {
        width: 8px;
        height: 50px;
        height: 100%;
        transform-origin: right;
        transform: rotateY(-90deg);
        right: 0;
        bottom: 0;
    }
`;

interface props {
    top: string;
    left: string;
    icon: IconProp;
}

export default Principle;
