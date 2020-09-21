import styled from 'styled-components';

const H2 = styled.h2`
    color: white;
    font-size: 35px;
    & > span {
        color: #00db53;
        display: block;
    }
    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

export default H2;