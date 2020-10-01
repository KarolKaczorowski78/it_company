import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHistory } from 'react-router-dom';

const InnerSection = (props: props) => {

    const id = props.name.replace(/\s+/g, '-')
    const history = useHistory();
    const { ref, inView } = useInView({ threshold: .6 });

    useEffect(() => { inView && history.replace(`#${id}`) }, [inView])

    return (
        <section id={ id } ref={ ref }>
            { props.children }
        </section>
    )
}

interface props {
    children: ReactNode;
    name: string,
}

export default InnerSection;