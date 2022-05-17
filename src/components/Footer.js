import React from "react";
import { FooterContainer, FooterWrapper, FooterColumn, FooterLink, FooterText, Logo } from "../styles/Footer.style";
import LogoImg from "../assets/logo.png";

export function Container() {
    return (
        <FooterContainer>
            <FooterWrapper>
                    <FooterColumn>
                    <Logo src={LogoImg}></Logo>
                    <FooterText>Svalgången 1, 724 81 Västerås</FooterText>
                    <FooterLink onClick={() => window.location = 'tel:+46762342303'}>0762342303</FooterLink>
                        <FooterLink onClick={() => window.location = 'mailto:Grupp3Projektblogg@gmail.com'}>Grupp3Projektblogg@gmail.com</FooterLink>
                    </FooterColumn>
            </FooterWrapper>
        </FooterContainer>
    );
}
export default Container;