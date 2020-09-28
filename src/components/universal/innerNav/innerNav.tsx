import React from 'react';
import Nav from './innerNav.styled';
import Button from './innerNavButton';

const InnerNav = (props: props) => {

    const renderButtons = () => props.sectionNames.map((n, i) => 
                                                        <Button scrollToClass={ n } key={ i } />)

    return (
        <Nav>
            { renderButtons() }
        </Nav>
    )
}

interface props {
    sectionNames: string[];
}

export default InnerNav;