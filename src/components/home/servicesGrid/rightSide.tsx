import React, { ReactNode } from 'react';
import Services from '../../../universal/constants/services';
import Service from './service';

const RightSide = () => {

    const renderServices = (): ReactNode => Object.entries(Services).map(([key, val]) => 
        <Service to={ key } name={ val } />)

    return (
        <>
            { renderServices() }
        </>
    )
}

export default RightSide