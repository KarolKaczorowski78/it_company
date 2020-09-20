import React, { Dispatch, SetStateAction, MouseEvent } from 'react';
import Button from './showNavButton.styled';

const ShowNavButton = (props: { visibilityData: visibilityData }) => {

    const { visible, setVisible } = props.visibilityData;

    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setVisible(state => !state);
    }

    return (
        <Button visible={ visible } onClick={ handleClick }>
            <span></span>
        </Button>
    )
}

interface visibilityData {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>
}

export default ShowNavButton;