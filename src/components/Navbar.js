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
            <NavbarLink to="/tjanster"> Tjänster</NavbarLink>
            <NavbarLink to="/omoss"> Om Oss</NavbarLink>
            <NavbarLink to="/gdpr"> GDPR</NavbarLink>
            <NavbarLink to="/kontakt"> Kontakt</NavbarLink>
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
          <NavbarLinkExtended to="/tjanster"> Tjänster</NavbarLinkExtended>
          <NavbarLinkExtended to="/omoss"> Om Oss</NavbarLinkExtended>
          <NavbarLinkExtended to="/gdpr"> GDPR</NavbarLinkExtended>
          <NavbarLinkExtended to="/kontakt"> Kontakt</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
