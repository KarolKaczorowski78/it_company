import React, { FormEvent, useState } from 'react';
import Form, { Input, Textarea, SpaceContainer, Label, Submit } from './contactForm.styled';
import Select from './select';
import H3 from '../../universal/h3/h3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Services } from '../../../universal/constants/sectionNames';

const ContactForm = () => {

    const [s, setS] = useState<boolean[]>(Object.values(Services).map(() => false));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitting');
    }

    const renderServices = () => Object.values(Services).map((service, i) => 
        <Select service={ service } key={ i } index={ i } setState={ setS } state={ s[i] } />)

    return (
        <Form onSubmit={ handleSubmit }>
            <SpaceContainer>
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" />
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" />
                <Label htmlFor="phone-number">Phone number</Label>
                <Input id="phone-number" />
            </SpaceContainer>
            <SpaceContainer>
                <H3>Project type</H3>
                { renderServices() }
            </SpaceContainer>
            <SpaceContainer>
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" rows={ 6 } cols={ 50 } placeholder="Type here..." />
            </SpaceContainer>
            <Submit type="submit">
                Send <FontAwesomeIcon icon={ faMailBulk } />
            </Submit>
        </Form>
    )
}

export default ContactForm;