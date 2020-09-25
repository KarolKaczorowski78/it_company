import styled from 'styled-components';
import Section from '../universal/section/section.styled';

export const IntroSection = styled(Section)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5px;
    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 110px;
    }
`;

export const ServicesSection = styled(Section)`
    display: grid;
    grid-template-columns: 49vw 49vw;
    height: auto;
    grid-row-gap: 10px;
    padding: 0 10px;
    grid-template-rows: 300px 300px 300px 300px;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 200px 200px 200px 200px 200px;
    }
`;

export const TestimonialsSection = styled(Section)`
    margin-top: 20px;
`;