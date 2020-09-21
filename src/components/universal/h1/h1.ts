import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 35px;
    transition: .3s ease-out;
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