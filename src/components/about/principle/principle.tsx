import React from 'react';
import Div from './principle.styled';
import H3 from '../../universal/h3/h3';
import P from '../../universal/p/p';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Principle = (props: props) => {
    return (
        <Div>
            <H3>{ props.name }</H3>
            <FontAwesomeIcon icon={ props.icon }/>
            <P style={{ fontSize: '14px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </P>
        </Div>
    )
}

interface props {
    name: string;
    icon: IconProp
}

export default Principle;