import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    flex: .6;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    & > img {
        flex: .9;
        width: auto;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export default Div;
