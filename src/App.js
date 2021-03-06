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
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

{/* App.js is like the heart of the system. it helps us navigate trhough all our pages 
with uor imports and routes. It also displays navbar and footer on every page and 
includes the component scrolltotop which task is to scroll every page to the top afgter navigating*/}

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
      <Footer />
    </div>
  );
}

export default App;
