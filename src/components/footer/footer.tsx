import React from 'react';
import FooterStyled, { Ul, RightsReservedContainer } from './footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterStyled>
            <Ul>
                <h2>Contact</h2>
                <li>ITinc Poland</li>
                <li><FontAwesomeIcon icon={ faPhone } /> Phone number</li>
                <li><FontAwesomeIcon icon={ faEnvelopeOpen } /> Email adress</li>
            </Ul>
            <Ul>
                <h2>Our offices</h2>
                <li><FontAwesomeIcon icon={ faMapMarkerAlt } /> XYZ 10, Kraków, Poland</li>
                <li><FontAwesomeIcon icon={ faMapMarkerAlt } /> XYZ 10, Wrocław, Poland</li>
                <li><FontAwesomeIcon icon={ faMapMarkerAlt } /> XYZ 10, Warszawa, Poland</li>
                <li><FontAwesomeIcon icon={ faMapMarkerAlt } /> XYZ 10, Gdańsk, Poland</li>
            </Ul>
            <Ul>
                <h2>Social media</h2>
                <li><FontAwesomeIcon icon={ faFacebookF } /> Facebook</li>
                <li><FontAwesomeIcon icon={ faLinkedinIn } /> LinkedIn</li>
                <li><FontAwesomeIcon icon={ faGithubAlt } /> GitHub</li>
                <li><FontAwesomeIcon icon={ faInstagram } /> Instagram</li>
            </Ul>
            <Ul>
                <h2>Resources</h2>
                <li>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
                <li>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
                <li>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
                <li>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
            </Ul>
            <RightsReservedContainer>
                ITinc Poland | Copyright © | All rights reserved 2020
            </RightsReservedContainer>
        </FooterStyled>
    )
}

export default Footer;