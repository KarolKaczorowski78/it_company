import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Button = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 15px;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    font-family: "Averta", sans-serif;
    ::before {
        position: absolute;
        content: '';
        left: 0;
        bottom: -3px;
        height: 2.5px;
        width: 100%;
        background: #00db53;
        transition: .25s ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
    }
    &:hover {
        ::before {
            transform: scaleX(1);
        }
    }
    @media (max-width: 900px) {
        font-size: 25px;
    }
`;

export default Button;