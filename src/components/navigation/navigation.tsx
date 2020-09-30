import React, { useState } from 'react';
import Nav, { NavButtonsContainer, Logo } from './navigation.styled';
import Button from './navButton/navButton';
import ShowNavButton from './showNavButton/showNavButton';
import RouteNames from '../../universal/constants/routeNames';

const Navigation = (props: props) => {

    const [visible, setVisible] = useState<boolean>(false);

    const renderLinks = () => Object.values(RouteNames).map(name => <Button to={ name } />);

    return (
        <Nav transparent={ props.scrollVal < 100 }>
            <Logo><b>IT</b>inc</Logo>
                <ShowNavButton visibilityData={ { visible, setVisible } } />
                <NavButtonsContainer visible={ visible }>
                { renderLinks() }
                </NavButtonsContainer>
        </Nav>
    )
}

interface props {
    scrollVal: number;
}

export default Navigation;