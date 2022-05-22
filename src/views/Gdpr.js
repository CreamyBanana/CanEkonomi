import React from 'react'
import { ViewContainer, LogoTextContainer, TextContainerGdpr, Logo, TextContainerHeader } from "../styles/View.style";
import gdprImg from "../assets/gdpr.jpg";
import { Link } from 'react-router-dom';

function gdpr() {
  return (
    <ViewContainer>
      <LogoTextContainer>
        <Logo src={gdprImg} />
        <TextContainerHeader>
          <p>Can Ekonomibyrås integritetspolicy</p>
        </TextContainerHeader>
        <TextContainerGdpr>
          <p>Can Ekonomibyrå värnar om individens personliga integritet och är mån om att personuppgifter behandlas på ett säkert,
            korrekt och lagenligt sätt. Vi har antagit denna integritetspolicy (”Integritetspolicy”) i syfte att informera dig om
            hur vi hanterar dina personuppgifter. Om du på något vis ska lämna eller har lämnat personuppgifter till oss
            uppmanar vi dig att först läsa igenom denna Integritetspolicy.<br /><br /> En ”personuppgift” innefattar all slags information som
            direkt eller indirekt kan kopplas till dig. Vi behandlar olika kategorier av personuppgifter i ett antal olika
            sammanhang. Exempel på sådana sammanhang är när vi behandlar personuppgifter om våra kunder, arbetssökandens
            personuppgifter eller när personuppgifter skapas då någon besöker vår hemsida.  Vi är personuppgiftsansvarig sådana
            personuppgifter. Det innebär att vi styr över, och är ansvariga för, hur behandlingen av personuppgifterna går till.<br /><br />
            Ibland agerar vi också som personuppgiftsbiträde åt våra kunder. Detta sker främst när kunderna anlitar oss för att utföra
            ekonomitjänster för kundens räkning. I dessa fall är det respektive kund som är ansvarig för att samla in och administrera
            personuppgifterna. Det är därför kunderna som är personuppgiftsansvariga för dessa personuppgifter. Vi behandlar bara sådana
            personuppgifter efter sina kunders instruktioner.
            <br /><br />Denna Integritetspolicy omfattar all vår behandling av personuppgifter, oavsett hur dessa har inhämtats.</p>
        </TextContainerGdpr>
        <TextContainerHeader>
          <p>Kategorier av personuppgifter som vi behandlar</p>
        </TextContainerHeader>
        <TextContainerGdpr>
          <p>Vi behandlar ett antal olika personuppgifter om våra kunder. De kategorier av personuppgifter som vi inhämtar och behandlar är i huvudsak:
            <br /><br />
            <li>Identifieringsuppgifter i form av namn.</li>
            <li>Kontaktuppgifter (såsom adress, telefonnummer, mailadress).</li>
            <li>Betalningsinformation innefattande betalningshistorik, fakturering <br /> och eventuella betalningspåminnelser samt
              elektronisk identifieringsdata i form av IP-adress och cookies.</li>
            <br />
            Personuppgifter kan komma att kompletteras, inhämtas och kontrolleras genom användandet av offentliga och övriga register
            såsom folkbokföringsregistret, kreditupplysningsbolag, bolagsregister etc.
            <br /><br />
            I egenskap av personuppgiftsbiträde åt våra kunder kan vi komma att behandla exempelvis följande kategorier av personuppgifter:
            <br /><br />
            <li>Identifieringsuppgifter såsom namn, titel, personnummer.</li>
            <li>Uppgifter avseende anställning så som anställningsdatum, löneuppgifter,<br /> semesterrätt, arbetsschema, tidrapporter, bilförmån och relaterade uppgifter behandlas i syfte att beräkna och betala ut lön, sammanställa kontrolluppgifter och relaterad administration åt den personuppgiftsansvariga och den registrerade samt
              personuppgifter i bokföringsdata och underlag, t.ex. lönespecifikationer, kvitton för personalrepresentation eller kontaktuppgifter på kund- och leverantörsfakturor.</li></p>
        </TextContainerGdpr>
        <TextContainerHeader>
          <p>Ändamålet och laglig grund för vår behandling av personuppgifter</p>
        </TextContainerHeader>
        <TextContainerGdpr>
          <p>Vi behandlar enbart sådana personuppgifter som vi har en laglig grund för och ett specifikt ändamål med att
            behandla. Ändamålet med behandlingen är att fullgöra våra åtaganden inom vår verksamhet gentemot våra kunder,
            leverantörer och mot arbetssökande. Vi behandlar också personuppgifter med syftet att lämna information och erbjudanden om
            våra tjänster.
            <br /><br></br>
            Den lagliga grunden är huvudsakligen fullgörande av avtal vilket även innefattar fullgörande av
            personuppgiftsbiträdesavtal i de fall som vi är personuppgiftsbiträde. Personuppgifter som används
            för marknadsföring kan behandlas med den lagliga grunden ”berättigat intresse”. Det kan även vara nödvändigt att
            behandla personuppgifterna för att kunna fullgöra de förpliktelser som åligger oss enligt lag.
            <br /></p>
            <div className="col-8 pt-3 mx-auto text-center">
        <Link to="/Contact" className="btn btn-outline-secondary">Kontakta Oss</Link>
        </div>
        </TextContainerGdpr>
      </LogoTextContainer>
    </ViewContainer>
  )
}

export default gdpr