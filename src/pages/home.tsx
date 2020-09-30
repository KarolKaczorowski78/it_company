import React from 'react';
import { IntroSection, ServicesSection, TestimonialsSection } from '../components/home/sections';
import Graphic3D from '../components/home/graphic3D/graphic3d';
import H1 from '../components/universal/h1/h1';
import RightSide from '../components/home/servicesGrid/rightSide';
import LeftSide from '../components/home/servicesGrid/leftSide';
import TestimonialsContainer from '../components/home/testimonials/testimonialsContainer/testimonialsContainer';

const Home = () => {
    return (
        <div style={{ background: '#262d2e' }}>
            <IntroSection id="#">
                <H1>
                    <span>Our teams develop</span>
                    <span> high quality software</span> 
                    <span> using top technologies,</span>  
                    <span> precision and efficiency</span> 
                    <span> in order to make our </span>
                    <span> customers satisfied.</span>
                </H1>
                <Graphic3D />
            </IntroSection>
            <ServicesSection>
                <LeftSide />
                <RightSide />
            </ServicesSection>
            <TestimonialsSection>
                <TestimonialsContainer />
            </TestimonialsSection>
        </div>
    )
}

export default Home;