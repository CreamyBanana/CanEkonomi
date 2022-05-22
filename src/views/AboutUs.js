import React from 'react'
import { ViewContainerAbout, TextContainerAbout, LogoTextContainerAbout, LogoAbout, TextContainerAboutHeader } from "../styles/aboutus.style";
import aboutuspic from "../assets/aboutuspic.jpg";

function aboutUs() {
  return (
    <ViewContainerAbout>
      <LogoTextContainerAbout>
        <LogoAbout src={aboutuspic}>
        </LogoAbout>
          <TextContainerAboutHeader>
            <p>OM OSS</p>
          </TextContainerAboutHeader>
          <TextContainerAbout>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </TextContainerAbout>
      </LogoTextContainerAbout>
    </ViewContainerAbout>
  )
}

export default aboutUs