import React from 'react';
import Section from '../components/universal/section/section.styled';
import Graphic3D from '../components/home/graphic3D/graphic3d';
import Chuj from '../components/universal/h1/h1';

const Home = () => {
    console.log(Chuj);
    return (
        <>
            <Section>
                <Chuj>
                    <span>Our teams develop</span>
                    <span> high quality software</span> 
                    <span> using top technologies,</span>  
                    <span> precision and efficiency</span> 
                    <span> in order to make our </span>
                    <span> customers satisfied.</span>
                </Chuj>
                <Graphic3D />
            </Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
        </>
    )
}

export default Home;