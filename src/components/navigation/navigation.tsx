import React, { useState, useEffect } from 'react';
import Nav, { NavButtonsContainer, Logo } from './navigation.styled';
import Button from './navButton/navButton';
import ShowNavButton from './showNavButton/showNavButton';
import RouteNames from '../../universal/constants/routeNames';

const Navigation = (props: props) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(false);
    const [scrollVal, setScrollVal] = useState<number>(props.scrollVal);

    const renderLinks = () => Object.values(RouteNames).map(name => <Button to={ name } />);

    useEffect(() => {
        setScrollVal(prev => {
            setHidden(prev < props.scrollVal ? true : false);
            return props.scrollVal;
        })
    }, [props.scrollVal])
    
    return (
        <Nav transparent={ scrollVal < 100 } hidden={ hidden }>
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