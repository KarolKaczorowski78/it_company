import React from 'react';
import Container, { Half, Img, P } from './specialistSection.styled';
import H2 from '../../universal/h2/h2';
import H3 from '../../universal/h3/h3';
import { Specialist as Props } from '../specialistsData';
import capitalizeString from '../../../universal/functions/capitalizeString';

const Specialist = (props: { data: Props }) => {
    return (
        <Container>
            <Half> 
                <H2 style={{ fontSize: '7em' }}>{ props.data.fullName }</H2>
                <H3>{ capitalizeString(props.data.profession) } specialist</H3>
                <Img src={ props.data.icon } alt=""/>  
                <P>{ props.data.description }</P>
            </Half>
            <Half>
                { props.data.uniqueComponent && props.data.uniqueComponent }
            </Half>
        </Container>
    )
}

export default Specialist;