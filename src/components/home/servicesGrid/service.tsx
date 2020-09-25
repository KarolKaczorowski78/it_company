import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../../universal/constants/services';
import styled from 'styled-components';

const Service = (props: props) => {
    return (
        <RedirectBtn to={ `/services/#${props.to.toLowerCase()}` }>
            <span>{ props.name }</span>
        </RedirectBtn>
    )
}

const RedirectBtn = styled(Link)`
    width: 100%;
    height: 100%;
    width: 90%;
    grid-column: 2 / 3;
    display: flex;
    margin-left: 5%;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    text-decoration: none;
    font-family: "Averta", sans-serif;
    background: linear-gradient(to bottom, #262d2e, #31393a);
    border: .8px solid black;
    box-sizing: border-box;
    box-shadow: -10px 20px 10px black;
    & > span {
        position: relative;
        ::before, ::after {
            position: absolute;
            content: '';
            left: -11px;
            bottom: -11px;
            background: #00db53;
        }
        ::before {
            transition: .4s ease-out;
            width: 2px;
            height: calc(100% + 20px);
            transform-origin: bottom;
            transform: scaleY(0);
        }
        ::after {
            transition: .4s ease-out;
            height: 2px;
            width: calc(100% + 20px);
            transform-origin: left;
        }
    }
    &:hover {
        & > span {
            ::before {
                transform: scaleY(1);
            }
            ::after {
                transform: scaleX(0);
            }
        }
    }
    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 2;
        font-size: 22px;
    }
`;

interface props {
    to: string;
    name: Services;
}

export default Service