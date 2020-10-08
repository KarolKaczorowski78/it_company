import React from 'react';
import Section from '../components/universal/section/section.styled';
import H1 from '../components/universal/h1/h1';
import P from '../components/universal/p/p';
import ContactForm from '../components/estimateProject/contactForm/contactForm';
import MobileContainer from '../components/estimateProject/mobileContainer';

const EstimateProject = () => {
    return (
        <div id="#">
            <Section style={{ paddingTop: '100px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <span style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
                    <H1><span>Got any business idea?</span>
                        <span>Contact us!</span>
                    </H1>
                    <P>Fill in the form below with Your offer</P>
                </span>
                <MobileContainer />
                <ContactForm />
            </Section>
        </div>
    )
}

export default EstimateProject;