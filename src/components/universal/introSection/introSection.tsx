import React, { ReactNode, Dispatch, SetStateAction } from 'react';
import Section, { Image, Div} from './introSection.styled';
import InnerSection from '../innerSection';

const Intro = (props: props) => {
    return (
        <InnerSection name="#">
            <Section>
                <Image src={ props.imgUrl } alt="" />
                <Div>
                    { props.children }
                </Div>
            </Section>
        </InnerSection>
    )
}

interface props {
    children: ReactNode;
    imgUrl: string;
    setPageHash?: Dispatch<SetStateAction<string>>
}

export default Intro;