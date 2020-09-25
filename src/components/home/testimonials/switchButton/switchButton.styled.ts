import styled from 'styled-components';

const Button = styled.button<props>`
    position: absolute;
    width: 35px;
    height: 60px;
    top: 50%;
    ${({ side }) => side + ': 0'};
    z-index: 2;
    margin-top: -30px;
    border: 2px solid #00db53;
    background: none;
    border-radius: 10%;
    color: #00db53;
    font-size: 30px;
`;

export enum Sides {
    LEFT = 'left',
    RIGHT = 'right',
}

interface props {
    side: Sides;
}

export default Button;