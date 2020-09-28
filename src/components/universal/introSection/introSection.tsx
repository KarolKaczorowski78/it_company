import React from 'react';
import Section, { Image } from './introSection.styled';
import H1 from '../h1/h1';
import P from '../p/p';

const Intro = (props: props) => {
    return (
        <Section>
            <Image src={ props.imgUrl } alt="" />
            <H1>{ props.headling }</H1>
            <P>{ props.explanation }</P>
        </Section>
    )
}

interface props {
    headling: string;
    explanation: string;
    imgUrl: string;
}

export default Intro;