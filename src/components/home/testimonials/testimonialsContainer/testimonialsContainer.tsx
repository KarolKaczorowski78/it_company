import React, { useEffect, useState, useRef } from 'react';
import Div from './testimonialContainer.styled';
import Testimonial from '../testimonial/testimonial.styled';
import SwitchButton from '../switchButton/switchButton.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Sides } from '../switchButton/switchButton.styled';
import gsap from 'gsap';

const TestimonialsContainer = () => {
    const testimonialsContent: string[] = [
        'The best company I have ever worked with! Always respectful to customers preferences.', 
        'Amazing approach to the client, very efficent and technically strong company.', 
        'ITinc is one of the best companies I have ever worked with, job finished always in time!',
        'ITinc is one of the technically strongest companies in Europe! Definetley worth!' 
    ]

    const [currTestimonial, setCurrTestimonial] = useState<number>(0);
    const quoteRef = useRef<HTMLQuoteElement>(null);
    const tl = gsap.timeline()

    const handleTestimonialChange = (val: number) => () => {
        quoteRef.current && (() => {
            const xVal: number = val > 0 ? 70 : -70;
            tl.to(quoteRef.current, { x: xVal, autoAlpha: 0, duration: .3 })
                .to(quoteRef.current, { x: -xVal, duration: 0, 
                    onComplete: () => { setCurrTestimonial(s => s + val); } })
                .to(quoteRef.current, { x: 0, autoAlpha: 1, duration: .3 });
            })()
    }

    useEffect(() => {
        currTestimonial === -1 && setCurrTestimonial(() => testimonialsContent.length - 1);
        currTestimonial === testimonialsContent.length && setCurrTestimonial(() => 0);
    }, [currTestimonial])

    return (
        <Div>
            <SwitchButton side={ Sides.LEFT } onClick={ handleTestimonialChange(-1) }>
                <FontAwesomeIcon icon={ faAngleLeft } />
            </SwitchButton>
            <SwitchButton side={ Sides.RIGHT } onClick={ handleTestimonialChange(1) }>
                <FontAwesomeIcon icon={ faAngleRight } />
            </SwitchButton>
            <Testimonial>
                <q ref={ quoteRef }>{ testimonialsContent[currTestimonial] }</q>
            </Testimonial>
        </Div>
    )
}

export default TestimonialsContainer;