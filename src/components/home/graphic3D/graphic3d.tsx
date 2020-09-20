import React from 'react';
import Dice from './dice';
import { GraphicContainer, SecondContainer,  Base, BasePartBtm, BasePartLft } from './graphic3D.styled';
import { faCode, faHandshake, faUsersCog, faHistory } from '@fortawesome/free-solid-svg-icons';
import Principle from './principle';

const Graphic3D = () => {

    const diceLocations = [
        "left: 0px; bottom: 250px",
        "bottom: 125px; left: 50%; margin-left: -25px;",
        "right: -0px; bottom: 250px;",
        "left: 50%; bottom: 350px; margin-left: -25px;"
    ]

    const locations = [
        ['5px', '5px'], ['5px', 'calc(100% - 55px)'], ['calc(100% - 55px)', '5px'], 
        ['calc(100% - 55px)', 'calc(100% - 55px)']
    ]

    const icons = [faCode, faHandshake, faUsersCog, faHistory];

    const loadItems = () => locations.map(([top, left], i) => 
    <>
        <Principle top={ top } left={ left } icon={ icons[i] } />
        <Dice top={ top } left={ left } />
    </>)
    

    return (
        <GraphicContainer>
            <SecondContainer>   
                { loadItems() } 
                    {/* <Dice top={ '5px' } left={ '5px' } />
                    <Principle icon={ faCode } top={ '5px' } left={ '5px' } />  
                    <Principle icon={ faHandshake } top={ '5px' } left={ 'calc(100% - 55px)' } />
                    <Principle icon={ faUsersCog } top={ 'calc(100% - 55px)' } left={ '5px' } />
                    <Principle icon={ faHistory } top={ 'calc(100% - 55px)' } left={ 'calc(100% - 55px)' } /> */}
                <Base>
                </Base>
                <BasePartBtm />
                <BasePartLft />
            </SecondContainer>
        </GraphicContainer>
    )
}

export default Graphic3D;