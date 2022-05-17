import React from "react";
import { FooterContainer, FooterWrapper, FooterRow, FooterColumn, FooterLink, FooterTitle } from "../styles/Footer.style";

export function Container() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRow>
                    <FooterColumn>
                        <FooterTitle>About Us</FooterTitle>
                        <FooterLink onClick={() => window.location = 'mailto:Grupp3Projektblogg@gmail.com'}>Grupp3Projektblogg@gmail.com</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>skojj</FooterTitle>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>lall</FooterTitle>
                        <FooterLink href="tel:+46763114911">0763114911</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>test</FooterTitle>
                        <FooterLink href="#">Story</FooterLink>
                    </FooterColumn>
                </FooterRow>
            </FooterWrapper>
        </FooterContainer>
    );
}
export default Container;