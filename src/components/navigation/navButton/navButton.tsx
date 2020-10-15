import React, { Dispatch, SetStateAction } from 'react';
import Button from './navButton.styled';
import capitalizeString from '../../../universal/functions/capitalizeString';

const NavButton = (props: props) => {
    return (
        <Button to={ `/${props.to}##` } onClick={ () => props.setVisible(false) }>
            { capitalizeString(props.to.replace(/-/gi, ' ')) }
        </Button>
    )
}

interface props {
    to: string,
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export default NavButton;