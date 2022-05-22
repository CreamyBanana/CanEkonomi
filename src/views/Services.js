import React from 'react'
import Card from '../components/Card'
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import LogoImg from "../assets/logo.png"
import { TextContainerServices } from "../styles/View.style";



function services() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12">
          <TextContainerServices>
            <p>Can Ekonomibyrå är ett tjänstebaserat företag som erbjuder våra kunder anpassade lösningar inom redovisningstjänster och företagsekonomisk
              rådgivning. Redovisningsbyrån ligger i en av Vallbyinstitutets lokaler i Vallby, i närhet av Vallby Centrum.</p>
          </TextContainerServices>
        </div>
        <div className="col-md-4">
          <Card imgsrc={Img1} title="Löpande bokföring" text="Vi erbjuder olika bokföringsprogram från
                     marknaden och ofta väljer kunderna ett upplägg där vi arbetar tillsammans i webbaserade bokföringssystem."
            page="/Accounting" />
        </div>
        <div className="col-md-4">
          <Card imgsrc={Img2} title="Deklarationer" text="Att deklarera rätt är oerhört viktigt
                     då konsekvenserna av felhantering kan bli ödesdigra. Vi hjälper er att deklarera rätt!"
            page="/Declarations" />
        </div>
        <div className="col-md-4">
          <Card imgsrc={LogoImg} title="Löneadministration" text="Det är viktigt att lönehantering
                     fungerar bra i bolaget för att undvika missnöje i organisationen. Vi har möjlighet att hjälpa ert företag
                      med alla frågor som rör löneadministration." page="/SalaryAdministration" />
        </div>
        <div className="col-md-4">
          <Card imgsrc={Img1} title="Rådgivning" text="Vi träffar våra kunder regelbundet och diskuterar utsikter för 
                    företaget och informerar om de nyheter som påverkar verksamheten för egenföretagare och ägare i fåmansbolag."
            page="/Advice" />
        </div>
        <div className="col-md-4">
          <Card imgsrc={Img2} title="Bokslut & Årsredovisning" text="Vi kan ta fram årsredovisning för ert företag.
                     Vi erbjuder även delårsbokslut." page="/FinancialStatementsAndAccounting" />
        </div>
      </div>
    </div>
  )
}

export default services