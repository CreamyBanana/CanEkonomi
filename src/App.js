import "./styles//App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hem from "./views/Home";
import Tjanster from "./views/Services";
import Omoss from "./views/AboutUs";
import Gdpr from "./views/Gdpr";
import Kontakt from "./views/Contact";
import Lopandebokforing from "./views/Accounting";
import Bokslutocharsredovisning from "./views/FinancialStatements&Accounting";
import Deklarationer from "./views/Declaration";
import Loneadministration from "./views/SalaryAdministration";
import Radgivning from "./views/Advice";
import Error from "./views/Error";
import Container from "./components/Footer";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hem />}/>
        <Route path="/tjanster" element={<Tjanster/>}/>
        <Route path="/omoss" element={<Omoss/>}/>
        <Route path="/gdpr" element={<Gdpr/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/lopande-bokforing" element={<Lopandebokforing/>}/>
        <Route path="/bokslut-och-arsredovisning" element={<Bokslutocharsredovisning/>}/>
        <Route path="/deklarationer" element={<Deklarationer/>}/>
        <Route path="/loneadministration" element={<Loneadministration/>}/>
        <Route path="/radgivning" element={<Radgivning/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </div>
    <Container/>
    </div>
  );
}

export default App;
