import React, { FormEvent, useState, useRef, useEffect } from 'react';
import Form, { Textarea, SpaceContainer, Label, Submit } from './contactForm.styled';
import Select from './select';
import H3 from '../../universal/h3/h3';
import Input, { isInvalidPhoneNumber } from './input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Services } from '../../../universal/constants/sectionNames';

const ContactForm = () => {
    const [s, setS] = useState<boolean[]>(Object.values(Services).map(() => false));
    const [projectTypeErr, setProjectTypeErr] = useState<string>('');
    const [inputs] = useState<Inputs>({
        firstName: '',
        lastName: '',
        phoneNum: '',
    })

    useEffect(() => { console.log(s.includes(true)) }, [s])

    const inputsContainer = useRef<HTMLDivElement>(null)

    const isFilled = () => Object.values(inputs).every(val => val.length > 0) && s.includes(true) && 
                                            !isInvalidPhoneNumber(Object.values(inputs)[2])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFilled()) {
            // send post request
        } else { 
            return;
        }
    }

    const renderServices = () => Object.values(Services).map((service, i) => 
        <Select service={ service } key={ i } index={ i } handleUnfill={ setProjectTypeErr }
        setState={ setS } state={ s[i] } />)

    return (
        <Form onSubmit={ handleSubmit } method="post">
            <SpaceContainer ref={ inputsContainer }>
                <Input index={ 0 } state={ inputs } name="First name" />
                <Input index={ 1 } state={ inputs } name="Last name" />
                <Input index={ 2 } state={ inputs } name="Phone number" isPhoneNumberField={ true } />
            </SpaceContainer>
            <SpaceContainer>
                <H3>Project type <span className="error">{ projectTypeErr }</span></H3>
                { renderServices() }
            </SpaceContainer>
            <SpaceContainer>
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" rows={ 6 } cols={ 50 } placeholder="Type here..." />
            </SpaceContainer>
            <Submit type="submit" clicable={ isFilled() }>
                Send <FontAwesomeIcon icon={ faMailBulk } />
            </Submit>
        </Form>
    )
}

export interface Inputs {
    firstName: string;
    lastName: string;
    phoneNum: string;
}

export default ContactForm;