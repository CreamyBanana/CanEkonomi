import React from 'react'
import { ViewContainer, TextContainer, LogoTextContainer, Logo } from "../styles/View.style";
import LogoImg from "../assets/institut.jpg";

export function home() {
  return (
    <ViewContainer>
      <LogoTextContainer>
        <Logo src={LogoImg}>
        </Logo>
        <TextContainer>
          <p>Can Ekonomibyrå är en redovisningsbyrå i Västerås och vi erbjuder företag anpassade lösningar inom redovisningstjänster, bokföring, bokslut och årsredovisning samt företagsekonomisk rådgivning. Huvudkontoret ligger i en av Vallbyinstitutets lokaler i Vallby, i närhet av Vallby Centrum.</p>
        </TextContainer>
      </LogoTextContainer>
    </ViewContainer>
  )

}

export default home