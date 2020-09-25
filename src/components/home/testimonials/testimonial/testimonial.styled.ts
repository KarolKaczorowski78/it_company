import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > q {
        color: white;
        max-width: 25ch;
        font-size: 50px;
        font-weight: bold;
        font-family: "Averta", sans-serif;
        text-align: center;
        @media (max-width: 600px) {
            font-size: 25px;
        }
    }
`;

export default Div;
