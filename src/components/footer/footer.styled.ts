import styled from 'styled-components';

const Footer = styled.footer`
    width: 100vw;
    max-width: 100%;
    height: auto;
    border-top: 2px solid #00db53;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    padding: 20px 0;
    flex-wrap: wrap;
    margin-top: 50px;
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    flex: .20;
    min-width: 300px;
    text-align: left;
    & > li {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
        & > svg, & > a {
            color: #00db53;
            text-decoration: none;
        }
    }
`;

export const RightsReservedContainer = styled.div`
    width: 100%;
    height: auto;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    margin-top: 20px;
    text-align: center;
    padding: 15px 0;
`

export default Footer;