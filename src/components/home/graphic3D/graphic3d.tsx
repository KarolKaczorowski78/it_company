import React, { ReactNode } from 'react';
import Dice from './dice';
import { GraphicContainer, SecondContainer,  Base, BasePartBtm, BasePartLft } from './graphic3D.styled';
import { faCode, faHandshake, faUsersCog, faHistory } from '@fortawesome/free-solid-svg-icons';
import Principle from './principle';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Graphic3D = () => {

    const locations: string[][] = [
        ['5px', '5px'], ['5px', 'calc(100% - 55px)'], ['calc(100% - 55px)', '5px'], 
        ['calc(100% - 55px)', 'calc(100% - 55px)']
    ]

    const icons: IconProp[] = [faCode, faHandshake, faUsersCog, faHistory];

    const loadItems = () => locations.map(([top, left], i): ReactNode => 
    <>
        <Principle top={ top } left={ left } icon={ icons[i] } />
        <Dice top={ top } left={ left } />
    </>)
    

    return (
        <GraphicContainer>
            <SecondContainer>   
                { loadItems() } 
                <Base />
                <BasePartBtm />
                <BasePartLft />
            </SecondContainer>
        </GraphicContainer>
    )
}

export default Graphic3D;