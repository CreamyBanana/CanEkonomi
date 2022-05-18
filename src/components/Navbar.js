import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
import LogoImg from "../assets/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Hem</NavbarLink>
            <NavbarLink to="/services"> Tjänster</NavbarLink>
            <NavbarLink to="/aboutUs"> Om Oss</NavbarLink>
            <NavbarLink to="/gdpr"> GDPR</NavbarLink>
            <NavbarLink to="/contact"> Kontakt</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Hem</NavbarLinkExtended>
          <NavbarLinkExtended to="/services"> Tjänster</NavbarLinkExtended>
          <NavbarLinkExtended to="/aboutUs"> Om Oss</NavbarLinkExtended>
          <NavbarLinkExtended to="/gdpr"> GDPR</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Kontakt</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
