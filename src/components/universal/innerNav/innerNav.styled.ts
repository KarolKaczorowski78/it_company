import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    @media (max-width: 700px) {
        display: none;
    }
`;

export default Nav;