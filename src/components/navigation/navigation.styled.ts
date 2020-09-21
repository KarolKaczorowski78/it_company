import styled from 'styled-components';

const Navigation = styled.nav<{ makeTransparent: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100%;
    height: 100px;
    box-sizing: border-box;
    background: #262d2e;
    padding: 0 20px;
    z-index: 3;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    & > *:not(div) {
        z-index: 2;
    }
    @media (max-width: 900px) {
        justify-content: space-between;
    }
`;

export const NavButtonsContainer = styled.div<{ visible: boolean }>`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    @media (max-width: 900px) {
        min-height: 400px;
        background: #262d2e;
        position: fixed;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        left: 0;
        top: 0;
        transition: .6s ease-in;
        clip-path: ${({ visible }) => visible ? 'circle(1100px' : 'circle(0px'} at 0% 0%);
    }
`;

export const Logo = styled.span`
    color: #00db53;
    font-weight: bold;
    font-family: cursive;
    & > b {
        font-family: Tahoma;
        font-size: 40px;
    }
`

export default Navigation;