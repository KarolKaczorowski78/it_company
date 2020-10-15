import React from 'react';
import Section from '../components/estimateProject/estimateProjectSection';
import H1 from '../components/universal/h1/h1';
import P from '../components/universal/p/p';
import ContactForm from '../components/estimateProject/contactForm/contactForm';
import MobileContainer from '../components/estimateProject/mobileContainer';

const EstimateProject = () => {
    return (
        <div id="#">
            <Section>
                <span style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
                    <H1><span>Got any business idea?</span>
                        <span> Contact us!</span>
                    </H1>
                    <P>Fill in the form below with Your offer</P>
                </span>

                <ContactForm />
                <MobileContainer />
            </Section>
        </div>
    )
}

export default EstimateProject;