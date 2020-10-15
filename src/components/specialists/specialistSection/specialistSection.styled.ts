import styled from 'styled-components';
import PProto from '../../universal/p/p';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    min-height: 100vh;
    position: relative;
`;

export const P = styled(PProto)`
    max-width: 80%;
`;

export const Half = styled.div`
    width: 50%;
    height: auto;
    min-height: 100vh;
    min-width: 300px;
    border: 1px solid white;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Img = styled.img`
    width: 100px;
    height: auto;
`

export default Div;