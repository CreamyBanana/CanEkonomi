import React from "react";
import { FooterContainer, FooterWrapper, FooterRow, FooterColumn, FooterLink, FooterText } from "../styles/Footer.style";

export function Container() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRow>
                    <FooterColumn>
                        <FooterLink onClick={() => window.location = 'mailto:Grupp3Projektblogg@gmail.com'}>Grupp3Projektblogg@gmail.com</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterLink href="tel:+46763114911">0763114911</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterText>Svalgången 1</FooterText>
                        <FooterText>724 81 Västerås</FooterText>
                    </FooterColumn>
                </FooterRow>
            </FooterWrapper>
        </FooterContainer>
    );
}
export default Container;