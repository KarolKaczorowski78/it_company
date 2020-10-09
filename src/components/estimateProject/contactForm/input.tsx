import { Input, Label } from './contactForm.styled';
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { Inputs } from './contactForm';

const InputComp = (props: props) => {

    const id = props.name.replace(/\s+/g, '-');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = Object.keys(props.state)[props.index] as keyof Inputs;
        e.target.placeholder = '';
        props.state[key] = e.target.value;
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const t = e.target;
        if (t.value.length === 0) {
            t.placeholder = ' Required field!';
        }
        if (props.isPhoneNumberField) {
            setErrorMessage(isInvalidPhoneNumber(t.value) ? 'Invalid phone number' : '');
        }
    }

    return (
        <>
            <Label htmlFor={ id }>{ props.name } <span className="error">{ errorMessage }</span> </Label>
            <Input id={ id } onChange={ handleChange } onBlur={ handleBlur } />
        </>
    )
}

export const isInvalidPhoneNumber = (str: string): boolean => 
    str.replace(/\s/g,'').length !== 9 || Array.from(str).some(i => isNaN(parseInt(i)));


interface props {
    index: number;
    state: Inputs;
    name: string;
    isPhoneNumberField?: boolean;
}

export default InputComp;