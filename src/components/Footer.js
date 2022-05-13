import React, { useState } from "react";
import Footer from ".";
import { FooterContainer, FooterWrapper, FooterRow, FooterColumn, FooterLink, FooterTitle } from "../styles/Footer.style";

export function Container() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRow>
                    <FooterColumn>
                        <FooterTitle>About Us</FooterTitle>
                        <FooterLink href="#">Story</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>skojj</FooterTitle>
                        <FooterLink href="#">Story</FooterLink>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterTitle>lall</FooterTitle>
                        <FooterLink href="#">Story</FooterLink>
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