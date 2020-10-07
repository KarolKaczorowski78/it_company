import styled from 'styled-components';

const Div = styled.div`
    height: auto;
    min-width: 300px;
    flex: .3;
    min-height: 100px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    ::before {
        content: '';
        position: absolute;
        left: 9px;
        width: 2px;
        height: 100%;
        height: calc(100% - 40px);
        top: 20px;
        background: white;
    }
`

export default Div;