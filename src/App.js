import "./styles//App.style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Services from "./views/Services";
import AboutUs from "./views/AboutUs";
import Gdpr from "./views/Gdpr";
import Contact from "./views/Contact";
import Accounting from "./views/Accounting";
import FinancialStatementsAndAccounting from "./views/FinancialStatementsAndAccounting";
import Declarations from "./views/Declarations";
import SalaryAdministration from "./views/SalaryAdministration";
import Advice from "./views/Advice";
import Error from "./views/Error";
import Container from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/financialStatementsAndAccounting" element={<FinancialStatementsAndAccounting />} />
            <Route path="/declarations" element={<Declarations />} />
            <Route path="/salaryAdministration" element={<SalaryAdministration />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
      <Container />
    </div>
  );
}

export default App;
