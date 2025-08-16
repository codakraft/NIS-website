import React from "react";
import { Routes, Route } from "react-router-dom";
import NorwegianSchoolLandingPage from "./pages/homepage/NorwegianSchoolLandingPage";
import About from "./pages/About";
import Admission from "./pages/Admission";
import PrimarySchool from "./pages/Admission/PrimarySchool";
import NISExperience from "./pages/NISExperience";
import Contact from "./pages/Contact";
import VirtualTour from "./pages/Tour/Tour";
import Gallery from "./pages/Gallery";
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NorwegianSchoolLandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/primary-school" element={<PrimarySchool />} />
        <Route path="/nis-experience" element={<NISExperience />} />
        <Route path="/tour" element={<VirtualTour />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
