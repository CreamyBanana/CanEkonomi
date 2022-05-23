import React from "react";
import { FooterContainer, FooterWrapper, FooterColumn, FooterLink, Logo } from "../styles/Footer.style";
import LogoImg from "../assets/logo.png";

{/* Component that is used as the footer of the website. The component has
 a container and wrapper that holds what is to displayed
 a column that determines how the content is to be displayed and lastly the content itselft
*/}
export function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterColumn>
                    <Logo src={LogoImg}></Logo>
                    <FooterLink onClick={() => window.open("https://www.google.se/maps/place/Svalg%C3%A5ngen+1,+724+81+V%C3%A4ster%C3%A5s/@59.6241863,16.4999469,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63fcc20cbb81:0x1334cfd6399f338a!8m2!3d59.6241863!4d16.5021357")}>Svalgången 1, 724 81 Västerås</FooterLink>
                    <FooterLink onClick={() => window.location = 'tel:+46700440344'}>+46700440344</FooterLink>
                    <FooterLink onClick={() => window.location = 'mailto:zekican.abc@gmail.com'}>zekican.abc@gmail.com</FooterLink>
                </FooterColumn>
            </FooterWrapper>
        </FooterContainer>
    );
}
export default Footer;