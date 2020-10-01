import styled from 'styled-components';

const Div = styled.div`
    width: 300px;
    height: 350px;
    box-sizing: border-box;
    box-shadow: 0 0 15px #121212;
    text-align: center;
    margin: 5px 15px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    transition: .3s ease-out;
    & > svg {
        color: #00db53;
        font-size: 40px;
    }
    &: hover {
        transform: translateY(-15px);
    }
`;

export default Div;