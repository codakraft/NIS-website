import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/globals.css";

// Lazy load components for code splitting
const NorwegianSchoolLandingPage = lazy(
  () => import("./pages/homepage/NorwegianSchoolLandingPage")
);
const About = lazy(() => import("./pages/About"));
const Admission = lazy(() => import("./pages/Admission"));
const PrimarySchool = lazy(() => import("./pages/Admission/PrimarySchool"));
const NISExperience = lazy(() => import("./pages/NISExperience"));
const Contact = lazy(() => import("./pages/Contact"));
const VirtualTour = lazy(() => import("./pages/Tour/Tour"));
const Gallery = lazy(() => import("./pages/Gallery"));

// Loading fallback component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #393e8e 0%, #dc2c2c 100%)",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid rgba(255,255,255,0.3)",
        borderTop: "4px solid white",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </div>
  );
}

export default App;
