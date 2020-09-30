import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Section, { Img, HorizontalLine } from './serviceSection.styled';
import { Services } from '../../../universal/constants/sectionNames';
import { useInView } from 'react-intersection-observer';
import H2 from '../../universal/h2/h2';
import capitalizeString from '../../../universal/functions/capitalizeString';
import P from '../../universal/p/p';

const ServiceSection = (props: props) => {

    const { ref, inView } = useInView({ threshold: .6 });
    const id = props.serviceName.replace(/\s+/g, '-');

    useEffect(() => { inView && props.updateHistory(id) }, [inView])

    return (
        <Section ref={ ref } id={ id } index={ props.index + 1 }>
            <HorizontalLine />
            <div className="service-explanation">
                <H2 style={{ color: '#00db53' }}>{ capitalizeString(props.serviceName) }</H2>
                <P>{ props.content }</P>
                <hr style={{ width: '100%' }} color="#00db53"/>
                <Img src={ props.imgUrl } alt="" />
            </div>
            <HorizontalLine />
        </Section>
    )
}

interface props {
    serviceName: Services;
    imgUrl: string;
    content: string;
    index: number;
    updateHistory: Dispatch<SetStateAction<string>>
}

export default ServiceSection;