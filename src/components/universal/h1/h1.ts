import styled from 'styled-components';

const H1 = styled.h1`
    color: white;
    font-size: 35px;
    font-family: "Averta", sans-serif;
    transition: .3s ease-out;
    text-shadow: -5px 15px 10px black;
    & > span {
        display: block;
        &:nth-child(2n) {
            color: #00db53;
        }
    }
    &:hover {
        cursor: default;
        transform: translateY(-10px);
    }
    @media (max-width: 850px) {
        text-align: center;
        font-size: 30px;
        & > span {
            display: inline;
        }
    }
    @media (max-width: 600px) {
        font-size: 25px;
    }
`

export default H1;