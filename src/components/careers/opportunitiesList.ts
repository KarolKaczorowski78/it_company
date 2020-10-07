import styled from 'styled-components';

const Ul = styled.ul`
    height: auto;
    padding: 0;
    font-size: 30px;
    font-family: 'Averta', sans-serif;
    font-weight: bold;
    list-style: none;
    color: white;
    box-sizing: border-box;
    & > li > svg {
        color: #00db53;
        font-size: 35px;
    }
    & > li {
        margin: 20px;
        transition: .2s ease-out;
        &:hover {
            transform: translateX(10px);
        }
    }

    @media (max-width: 900px) {
        font-size: 20px;
        & > li > svg {
            font-size: 25px;
        }
    }
`

export default Ul;