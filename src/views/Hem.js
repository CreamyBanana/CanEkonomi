import React from 'react'
import { HemContainer, TextContainer,LogoTextContainer, Logo, TextOverImg} from "../styles/Hem.style";
import LogoImg from "../assets/institut.jpg";

export function Hem() {  
  return (
    <HemContainer>      
      <LogoTextContainer>
      <Logo src={LogoImg}>
      </Logo>
      <TextContainer>
        <p>Can Ekonomibyrå är en redovisningsbyrå i Västerås och vi erbjuder företag anpassade lösningar inom redovisningstjänster, bokföring, bokslut och årsredovisning samt företagsekonomisk rådgivning. Huvudkontoret ligger i en av Vallbyinstitutets lokaler i Vallby, i närhet av Vallby Centrum.</p>
        </TextContainer>
      </LogoTextContainer>
      
    </HemContainer>
  )
  
}

export default Hem