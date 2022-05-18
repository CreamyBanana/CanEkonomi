import React from 'react'
import Card from '../components/Card'
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import LogoImg from "../assets/logo.png"



function services() {
  return (
<div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Card imgsrc={Img1} title="Löpande bokföring" text="test" page="./Accounting"></Card>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={Img2} title="Deklarationer" text="test" page="./Declarations"></Card>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={LogoImg} title="Löneadministration" text="test" page="./SalaryAdministration"></Card>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={Img1} title="Rådgivning" text="test" page="./Advice"></Card>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={Img2} title="Bokslut & Årsredovisning" text="test" page="./FinancialStatementsAndAccounting"></Card>
                    </div>
                </div>
            </div>
  )
}

export default services