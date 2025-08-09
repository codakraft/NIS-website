import React from "react";
import { Routes, Route } from "react-router-dom";
import NorwegianSchoolLandingPage from "./pages/homepage/NorwegianSchoolLandingPage";
import About from "./pages/About";
import Admission from "./pages/Admission";
import NISExperience from "./pages/NISExperience";
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NorwegianSchoolLandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/nis-experience" element={<NISExperience />} />
      </Routes>
    </div>
  );
}

export default App;
