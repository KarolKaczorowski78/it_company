import React from 'react';
import IntroSection from '../components/universal/introSection/introSection';
import InnerNav from '../components/universal/innerNav/innerNav';
import H1 from '../components/universal/h1/h1';
import P from '../components/universal/p/p';
import ServicesMainImg from '../img/servicesMain.jpg';
import RouteNames from '../universal/constants/routeNames';
import { Services as servicesNames } from '../universal/constants/sectionNames';
import ServiceSection from '../components/services/serviceSection/serviceSection';
import servicesData from '../textContent/services';

const Services = () => {

    const renderSections = () => servicesData.map(({ title, content, img }, i) => 
        <ServiceSection serviceName={ title } content={ content } imgUrl={ img }
                         key={ i } />)

    return (
        <div>
            <IntroSection imgUrl={ ServicesMainImg }>
                <H1><span>Newest technologies and skilled developers </span>
                    <span>for Your business success.</span></H1>
                <P>On this page You can view our services and match them to Your needs!</P>
            </IntroSection>
            <InnerNav url={ RouteNames.SERVICES } sectionNames={ Object.values(servicesNames) } />
            { renderSections() }
        </div>
    )
}

export default Services;