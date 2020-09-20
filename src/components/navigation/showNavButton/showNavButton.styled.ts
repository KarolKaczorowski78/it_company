import styled from 'styled-components';

const Button = styled.button<{ visible: boolean }>`
    width: 50px;
    height: 50px;
    display: none;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    & > span {
        width: 40px;
        height: 5px;
        position: relative;
        &, ::before, ::after {
            border-radius: 20%;
            background: #00db53;
            border-radius: 15%;
        }
        ::before, ::after {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            content: '';
            transition: .2s .3s ease-in;
        }
        ::before {
            bottom: ${({ visible }) => visible ? '0px' : '8px'};
        }
        ::after {
            top: ${({ visible }) => visible ? '0px' : '8px'};
        }
    }
    @media (max-width: 900px) {
        display: flex;
    }
`;

export default Button;