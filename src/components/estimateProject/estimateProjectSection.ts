import styled from 'styled-components';
import SectionProto from '../universal/section/section.styled';

const Section = styled(SectionProto)`
    padding-top: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 800px) {
        flex-direction: row-reverse;
    }
`

export default Section;