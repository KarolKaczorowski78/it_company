import React, { ReactNode } from 'react';
import { Services } from '../../../universal/constants/sectionNames';
import Service from './service';

const RightSide = () => {

    // const renderServices = (): ReactNode => Object.entries(Services).map(([key, val]) => 
    //     <Service to={ key.replace(/\s+/g, '-') } name={ val } />)

    const renderServices = (): ReactNode => Object.values(Services).map((val) => 
        <Service to={ val.replace(/\s+/g, '-') } name={ val } />)

    return (
        <>
            { renderServices() }
        </>
    )
}

export default RightSide