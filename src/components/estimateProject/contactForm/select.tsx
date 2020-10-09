import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Services } from '../../../universal/constants/sectionNames';
import capitalizeString from '../../../universal/functions/capitalizeString';

const Select = (props: props) => {

    const handleClick = () => {
        props.setState(state => {
            const newState = [...state];
            newState.splice(props.index, 1, !newState[props.index])
            newState[props.index] && props.handleUnfill(() => '');
            return newState;
        })
    }

    return (
        <Div>
            <Button type="button" active={ props.state } onClick={ handleClick }>
                <FontAwesomeIcon icon={ faCheck } />
            </Button>
            <Span> { capitalizeString(props.service) }</Span>
        </Div>
    )
}

const Div = styled.div`
    margin: 20px 0;
`;

const Button = styled.button<{ active: boolean }>`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 3px solid #00db53;
    & > svg {
        color: #00db53;
        visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    }
`;

const Span = styled.span`

`;

interface props {
    service: Services;
    index: number;
    setState: Dispatch<SetStateAction<boolean[]>>;
    state: boolean;
    handleUnfill: Dispatch<SetStateAction<string>>;
}

export default Select;