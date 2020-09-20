import React from 'react';
import Section from '../components/universal/section/section.styled';
import H1 from '../components/universal/h1/h1';
import Graphic3D from '../components/home/component3d/component3D';

const Home = () => {
    return (
        <>
            <Section>
                <H1>
                    <span>Our teams develop</span>
                    <span> high quality software</span> 
                    <span> using top technologies,</span>  
                    <span> precision and efficiency</span> 
                    <span> in order to make our </span>
                    <span> customers satisfied.</span>
                </H1>
                <Graphic3D />
            </Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
        </>
    )
}

export default Home;
