import styled from 'styled-components';
import SectionProto from '../../universal/section/section.styled';

const Section = styled(SectionProto)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    & > h2 > span {
        display: inline!important;
    }
    & > img {
        width: 600px;
        width: 45%;
        min-width: 300px;
        @media (max-width: 500px) {
            width: 90%;
        }
    }
`

export default Section;