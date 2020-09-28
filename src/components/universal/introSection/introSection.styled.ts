import styled from 'styled-components';

const Section = styled.section`
    height: calc(100vh - 100px);
    width: 100%;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    opacity: .6;
`


export default Section;