import React, { Dispatch, SetStateAction } from 'react';
import { Careers } from '../../../universal/constants/sectionNames';
import { recruitmentProcess, recruitmentProcesses, recruitmentNames } from '../../../textContent/careers';
import styled from 'styled-components';
import gsap from 'gsap';

const RecruitmentPoint = (props: props) => {

    const recruitmentPointRef = 
                        recruitmentProcesses[Object.values(recruitmentNames).indexOf(props.name)];

    const handleChange = () => {
        const s: HTMLDivElement | null | undefined = 
                document.querySelector(`#${Careers.RECRUITMENT_PROCESS.replace(/\s+/g, '-')}`)
                    ?.querySelector('div');

        (s && window.innerWidth > 900) && (() => {
            gsap.timeline({ defaults: { duration: .3 } })
                .to(s, { y: 20 ,autoAlpha: 0, onComplete: () => 
                    props.handleClick(() => recruitmentPointRef) })
                .to(s, { y: 0 ,delay: .2, autoAlpha: 1 });
        })()
    }

    return (
        <Div>
            <Dot onClick={ handleChange } />
            <span style={{ marginLeft: '70px' }}>
                { props.name }
            </span>
        </Div>
    )
}

const Div = styled.div`
    width: auto;
    height: 40px;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 75px;
    font-size: 19px;
    font-family: 'Averta', sans-serif;
    color: white;
    &:first-of-type {
        margin: 0;
    }
`;

const Dot = styled.button`
    width: 20px;
    height: 20px;
    background: white;
    background: black;
    background: #202525;
    box-sizing: border-box;
    z-index: 2;
    border-radius: 50%;
    border: 3px solid #00db53;
    transition: .2s ease-in;
    &:hover {
        transform: scale(1.25);
    }
`

interface props {
    key: number;
    name: recruitmentNames;
    handleClick: Dispatch<SetStateAction<recruitmentProcess>>;
}

export default RecruitmentPoint;