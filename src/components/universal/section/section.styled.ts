import styled from 'styled-components';

const Section = styled.section`
    width: 100%:
    height: auto;
    min-height: 100vh;
    background: #262d2e;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 110px;
    }
`;

export default Section;