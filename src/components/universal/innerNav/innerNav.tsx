import React from 'react';
import Nav from './innerNav.styled';
import Button from './innerNavButton';
import { Services, About } from '../../../universal/constants/sectionNames';
import RouteNames from '../../../universal/constants/routeNames';

const InnerNav = (props: props) => {

    const renderButtons = () => props.sectionNames.map((n, i) => 
                                        <Button url={ props.url } scrollToClass={ n } key={ i } />)
    return (
        <Nav>
            { renderButtons() }
        </Nav>
    )
}

interface props {
    sectionNames: (About|Services)[];
    url: RouteNames;
}

export default InnerNav;