import React from 'react';
import IntroSection from '../components/universal/introSection/introSection';
import ImageSection from '../components/about/aboutImageSection/aboutImageSection.styled';
import Principle from '../components/about/principle/principle';
import CultureSection from '../components/about/cultureSection';
import InnerSection from '../components/universal/innerSection';
import InnerNav from '../components/universal/innerNav/innerNav';
import AboutMainImg from '../img/aboutMain.jpg';
import AboutOfficeImg from '../img/aboutOffice.jpg';
import AboutWorkflowImg from '../img/aboutWorkflow.jpg';
import { About as SectionNames } from '../universal/constants/sectionNames';
import RouteNames from '../universal/constants/routeNames';
import H1 from '../components/universal/h1/h1';
import H2 from '../components/universal/h2/h2';
import P from '../components/universal/p/p';
import { principles } from '../textContent/about'; 

const About = () => {

    const renderPrinciples = () => principles.map(({ name, icon }) => 
                                            <Principle name={ name } icon={ icon } />)

    return (
        <>
            <IntroSection imgUrl={ AboutMainImg }>
                <H1><span>We develop products with </span>
                <span>passion to technology</span></H1>
                <P>Read more about us and let us concern You that we are the right choice!</P>
            </IntroSection>
            <InnerNav url={ RouteNames.ABOUT } sectionNames={ Object.values(SectionNames) } />
            <H2 style={{ maxWidth: '30ch', margin: '30px auto', textAlign: 'center' }}>
                We are highly focused on building great atmosphere in our teams.
                <span>We aim for teamwork and respect between ourselfs, as well as with clients.</span>
            </H2>
            <InnerSection name={ SectionNames.WHO_ARE_WE }>
                <ImageSection>
                    <div>
                    <H2 style={{ maxWidth: '35ch' }}>We are <span style={{ display: 'inline' }}>solid and and reputable</span> company <br/> specialized in <span style={{ display: 'inline' }}>software development.</span></H2>
                    <P style={{ maxWidth: '60ch' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor quam odio, quis tincidunt tortor aliquam non. Nam convallis nisl eu ante dictum, vitae commodo tortor vulputate. Vestibulum volutpat, nibh at blandit placerat, urna diam feugiat lacus, ac volutpat purus lorem non ante. Aenean eros purus, aliquam at blandit a, volutpat sed urna. Nunc facilisis consequat congue. Aliquam elementum at diam non faucibus. Vestibulum accumsan, massa in tempus auctor, mauris erat commodo tortor, at condimentum ligula mauris a tellus. Vivamus tempor a ante eget convallis. Suspendisse neque elit, consectetur in orci id, pellentesque consequat nisi.
                        Nullam vestibulum lacus sit amet libero placerat venenatis. Nulla elementum justo eget mollis dictum. Suspendisse finibus consectetur mi at dictum. Nulla lectus augue, lacinia ac ex a, consectetur dignissim mi. Praesent a convallis orci. Nunc mi erat, blandit nec feugiat eu, blandit nec sapien. Morbi feugiat eros et ligula malesuada consequat. Maecenas dictum, felis non cursus malesuada, sapien nisl euismod justo, sed iaculis odio dui quis enim. Nulla tempor, dui et fringilla feugiat, lacus massa fringilla mi, a accumsan lectus ante eu elit.
                    </P>
                    </div>
                    <img src={ AboutOfficeImg } alt=""/>
                </ImageSection>
            </InnerSection>
            <InnerSection name={ SectionNames.WORKFLOW }>
            <ImageSection>
                <div>
                <H2 style={{ maxWidth: '35ch' }}>Your vision will be designed, developed and managed <span style={{ display: 'inline' }}>by a world class agile team.</span></H2>
                <P style={{ maxWidth: '60ch' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor quam odio, quis tincidunt tortor aliquam non. Nam convallis nisl eu ante dictum, vitae commodo tortor vulputate. Vestibulum volutpat, nibh at blandit placerat, urna diam feugiat lacus, ac volutpat purus lorem non ante. Aenean eros purus, aliquam at blandit a, volutpat sed urna. Nunc facilisis consequat congue. Aliquam elementum at diam non faucibus. Vestibulum accumsan, massa in tempus auctor, mauris erat commodo tortor, at condimentum ligula mauris a tellus. Vivamus tempor a ante eget convallis. Suspendisse neque elit, consectetur in orci id, pellentesque consequat nisi.
                    Nullam vestibulum lacus sit amet libero placerat venenatis. Nulla elementum justo eget mollis dictum. Suspendisse finibus consectetur mi at dictum. Nulla lectus augue, lacinia ac ex a, consectetur dignissim mi. Praesent a convallis orci. Nunc mi erat, blandit nec feugiat eu, blandit nec sapien. Morbi feugiat eros et ligula malesuada consequat. Maecenas dictum, felis non cursus malesuada, sapien nisl euismod justo, sed iaculis odio dui quis enim. Nulla tempor, dui et fringilla feugiat, lacus massa fringilla mi, a accumsan lectus ante eu elit.
                </P>
                </div>
                <img src={ AboutWorkflowImg } alt=""/>
            </ImageSection>
            </InnerSection>
            <InnerSection name={ SectionNames.CULTURE }>
                <CultureSection>
                    <span style={{ width: '100%', marginTop: '30px' }}>
                    <H2 style={{ maxWidth: '30ch', textAlign: 'center', margin: '0 auto' }}>Fast growing company with highly respected <span style={{ display: 'inline' }}>work culture and principles.</span></H2>
                    </span>
                    { renderPrinciples() }
                </CultureSection>
            </InnerSection>
        </>
    )
}

export default About;