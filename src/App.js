import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hem from "./sidor/Hem";
import Tjanster from "./sidor/Tjanster";
import Omoss from "./sidor/Omoss";
import Gdpr from "./sidor/Gdpr";
import Kontakt from "./sidor/Kontakt";
import Lopandebokforing from "./sidor/Lopandebokforing";
import Bokslutocharsredovisning from "./sidor/Bokslutocharsredovisning";
import Deklarationer from "./sidor/Deklarationer";
import Loneadministration from "./sidor/Loneadministration";
import Radgivning from "./sidor/Radgivning";
import Error from "./sidor/Error";

function App() {
  return (
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
  );
}

export default App;
