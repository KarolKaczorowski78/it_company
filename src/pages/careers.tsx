import React, { useState } from 'react';
import IntroSection from '../components/universal/introSection/introSection';
import CareersMainImg from '../img/careersMain.jpg';
import H1 from '../components/universal/h1/h1';
import H2 from '../components/universal/h2/h2';
import H3 from '../components/universal/h3/h3';
import P from '../components/universal/p/p';
import Ul from '../components/careers/opportunitiesList';
import DivRecruitment from '../components/careers/recruitmentProcessDiv';
import InnerSection from '../components/universal/innerSection';
import GrowChart from '../components/careers/growChart/growChart';
import Section from '../components/universal/section/section.styled';
import InnerNav from '../components/universal/innerNav/innerNav';
import RecruitmentTree from '../components/careers/recruitmentTree/recruitmentTree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RouteNames from '../universal/constants/routeNames';
import { Careers as SectionNames } from '../universal/constants/sectionNames';
import { Opportunities, recruitmentProcess, recruitmentProcesses } from '../textContent/careers';

const Careers = () => {

    const [currRec, setCurrRec] = useState<recruitmentProcess>(recruitmentProcesses[0]);

    return (
        <>
            <IntroSection imgUrl={ CareersMainImg }>
                <H1><span>Are You passioned about tech?</span>
                    <span>Let us know about Yourself!</span>
                </H1>
                <P>Checkout our job offers and take part in recruitment process</P>
            </IntroSection>
            <InnerNav url={ RouteNames.CAREERS } sectionNames={ Object.values(SectionNames) }/>
            <InnerSection name={ SectionNames.OPPORTUNITIES }>
                <Section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center', marginTop: '30px' }}>
                        <H2>We understand that work quality <span>goes in line with work comfort.</span></H2>
                        <P>We provide many benefits and great atmosphere</P>
                    </span>
                    <Ul>
                        { Opportunities.map(({ content, icon }) => 
                        <li><FontAwesomeIcon icon={ icon } />  { content }</li>) }
                    </Ul>
                    <GrowChart />
                </Section>
            </InnerSection>
            <InnerSection name={ SectionNames.JOB_OFFERS }>
                <Section style={{ textAlign: 'center' }}>
                    <H2>
                        A list of in demand specialists.
                        <span>Are you qualified? Do not hesitate!</span>
                    </H2>
                    <H2 style={{ marginTop: '100px' }}>Space for job offers</H2>
                </Section>
            </InnerSection>
            <InnerSection name={ SectionNames.RECRUITMENT_PROCESS }>
                <Section style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '50px' }}>
                    <span style={{ width: '100%', textAlign: 'center' }}>
                        <H2>
                            Application process
                            <span>in our company.</span>
                        </H2>
                    </span> 
                    <DivRecruitment>
                        <H2>{ currRec.name }</H2>
                        <H3>{ currRec.description }</H3>
                        <img src={ currRec.img } alt="" />
                    </DivRecruitment>
                    <RecruitmentTree changeRecruitmentProcess={ setCurrRec } />
                </Section>
            </InnerSection>
        </>
    )
}

export default Careers;