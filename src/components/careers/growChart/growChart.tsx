import React from 'react';
import Container from './growChart.styled';
import Column from './column';

const GrowChart = () => {
    return (
        <Container>
            <Column size={ 120 } />
            <Column size={ 170 } />
            <Column size={ 270 } />
            <Column size={ 340 } />
        </Container>
    )
}

export default GrowChart;