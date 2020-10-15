import React from 'react';
import IntroSection from '../components/universal/introSection/introSection';
import InnerNav from '../components/universal/innerNav/innerNav';
import InnerSection from '../components/universal/innerSection';
import SpecsMainImg from '../img/specialistsMain3.jpg';
import Section from '../components/universal/section/section.styled';
import H1 from '../components/universal/h1/h1';
import P from '../components/universal/p/p';
import { Services } from '../universal/constants/sectionNames';
import RouteNames from '../universal/constants/routeNames';
import specialists from '../components/specialists/specialistsData';
import Specialist from '../components/specialists/specialistSection/specialistSection';

const Specialists = () => {
    return (
        <>
            <IntroSection imgUrl={ SpecsMainImg }>
                <H1><span>Our teams include specialists </span>
                    <span>in every branch of IT</span>
                </H1>
                <P>Read more about our core specialists</P>
            </IntroSection>  
            <InnerNav url={ RouteNames.SPECIALISTS } sectionNames={ Object.values(Services).slice(0, 3) } />
            <InnerSection name={ Services.WEB_DEVELOPMENT }>
                    <Specialist data={ specialists[0] } />                   
            </InnerSection>
            <InnerSection name={ Services.MOBILE_DEVELOPMENT }>
                <Specialist data={ specialists[1] } />  
            </InnerSection>
            <InnerSection name={ Services.MACHINE_LEARNING }>
                <Specialist data={ specialists[2] } />  
            </InnerSection>
        </>
    )
}

export default Specialists;