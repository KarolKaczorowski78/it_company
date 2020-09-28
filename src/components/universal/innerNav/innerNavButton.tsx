import React from 'react';
import styled from 'styled-components';

const NavButton = (props: props) => {
    
    const handleClick = () => {
        const targetSection: HTMLDivElement | null = document.querySelector(`.${ props.scrollToClass }`)

        targetSection && (() => {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            })
        })()
    }

    return (
        <Button onClick={ handleClick }>
            { props.scrollToClass }
        </Button>
    )
}

const Button = styled.button`
    backgroun: none;
    font-size: 14px;
    border: none;
`   

interface props {
    scrollToClass: string;
}

export default NavButton;