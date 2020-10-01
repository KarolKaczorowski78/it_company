import styled from 'styled-components';
import SectionProto from '../../universal/section/section.styled';

const Section = styled(SectionProto)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: calc(100vh - 100px);
    & > .service-explanation {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: calc(100vh - 150px);
        max-width: 60ch;
        & > * {
            z-index: 2;
        }
        @media (max-width: 700px) {
            max-width: 50ch;
        }
    }
`;

export const Img = styled.img`
    height: 60px;
    width: auto;
    margin-top: 1em;
`

export const HorizontalLine = styled.div`
    width: 1px;
    height: 100vh;
    background: #00db53;
    @media (max-width: 700px) {
        display: none;
    }
`

export default Section;