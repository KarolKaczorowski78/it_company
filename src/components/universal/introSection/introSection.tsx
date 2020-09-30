import React, { ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import Section, { Image, Div} from './introSection.styled';
import { useInView } from 'react-intersection-observer';

const Intro = (props: props) => {

    const { ref, inView } = useInView({ threshold: .6 });
    useEffect(() => { inView && props.setPageHash && props.setPageHash('#') }, [inView])

    return (
        <Section ref={ ref } id="#">
            <Image src={ props.imgUrl } alt="" />
            <Div>
                { props.children }
            </Div>
        </Section>
    )
}

interface props {
    children: ReactNode;
    imgUrl: string;
    setPageHash?: Dispatch<SetStateAction<string>>
}

export default Intro;