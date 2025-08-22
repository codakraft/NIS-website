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

// Loading fallback component with faster rendering
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f8fafc",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "32px",
          height: "32px",
          border: "3px solid #e2e8f0",
          borderTop: "3px solid #2D338A",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
          margin: "0 auto 16px",
        }}
      />
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        Loading...
      </div>
    </div>
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
