import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 15px;
    font-size: 20px;
    font-weight: bold;
    position: relative;
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
`;

export default Button;