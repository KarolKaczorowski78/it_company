import styled from 'styled-components';

const Section = styled.section`
    height: calc(100vh - 60px);
    width: 100%;
    position: relative;
    padding: 0 5px;
    @media (max-width: 700px) {
        height: calc(100vh);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .6;
`

export const Div = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export default Section;