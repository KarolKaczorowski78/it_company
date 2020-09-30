import React from 'react';
import Button from './navButton.styled';
import capitalizeString from '../../../universal/functions/capitalizeString';

const NavButton = (props: { to: string }) => {
    return (
        <Button to={ `/${props.to}##` }>
            { capitalizeString(props.to.replace(/-/gi, ' ')) }
        </Button>
    )
}

export default NavButton;