import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Column = (props: { size: number }) => {
    
    const { ref, inView, entry } = useInView({ triggerOnce: true })

    useEffect(() => { 
        (inView && entry) && gsap.to(entry?.target, { height: props.size, 
                                    duration: props.size / 200, transition: 'Power0' });
     }, [inView]);

    return (
        <Div ref={ ref }/>
    )
}

const Div = styled.div`
    width: 80px;
    height: 0;
    background: #00c24a;
    position: relative;
    transform-style: preserve-3d;
    transform-origin: bottom;
    transform: rotateY(-30deg);
    perspective: 1000px;
    transition: transform .2s ease-in!important;
    border-right: 2px solid #202525;
    ::before {
        position: absolute;
        content: '';
        background: inherit;
        width: 100%;
        height: 100%;
        right: -100%;
        transform-origin: left;
        transform: rotateY(90deg);
    }
    &:hover {
        transform: rotateY(-30deg) scaleY(1.08);
    }
    @media (max-width: 900px) {
        width: 50px;
    }
`;



export default Column;