import React from 'react';
import Section, { Img, HorizontalLine } from './serviceSection.styled';
import InnerSection from '../../universal/innerSection';
import { Services } from '../../../universal/constants/sectionNames';
import H2 from '../../universal/h2/h2';
import capitalizeString from '../../../universal/functions/capitalizeString';
import P from '../../universal/p/p';

const ServiceSection = (props: props) => {
    return (
        <InnerSection name={ props.serviceName }>
            <Section>
                <HorizontalLine />
                <div className="service-explanation">
                    <H2 style={{ color: '#00db53' }}>{ capitalizeString(props.serviceName) }</H2>
                    <P>{ props.content }</P>
                    <hr style={{ width: '100%' }} color="#00db53"/>
                    <Img src={ props.imgUrl } alt="" />
                </div>
                <HorizontalLine />
            </Section>
        </InnerSection>
    )
}

interface props {
    serviceName: Services;
    imgUrl: string;
    content: string;
}

export default ServiceSection;