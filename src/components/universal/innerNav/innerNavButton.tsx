import React from 'react';
import styled from 'styled-components'; 
import capitalizeString from '../../../universal/functions/capitalizeString';
import { HashLink } from 'react-router-hash-link';
import RouteNames from '../../../universal/constants/routeNames';
import { Services, About } from '../../../universal/constants/sectionNames';

const NavButton = (props: props) => {    

    const targetId = props.scrollToClass.replace(/\s+/g, '-');
    
    const handleScroll = () => {
        const el: HTMLDivElement | null = document.querySelector(`#${targetId}`)
        return el && (() => {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })()
    }

    return (
        <Button smooth={ true } to={ `/${props.url}#${targetId}`} scroll={ handleScroll }>
            { capitalizeString(props.scrollToClass) }
        </Button>
    )
}

const Button = styled(HashLink)`
    font-size: 14px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Averta", sans-serif;
    position: relative;
    height: 100%;
    text-decoration: none;
    ::after {
        content: '';
        position: absolute;
        bottom: -6px;
        top: calc(50% + 15px);
        background: #00db53;
        left: 0;
        width: 100%;
        height: 1.5px;
        transform: scaleX(0);
        transition: .25s ease-out;
    }
    &:hover {
        ::after {
            transform: scaleX(1);
        }
    }
`  

interface props {
    scrollToClass: Services | About;
    url: RouteNames;
}

export default NavButton;