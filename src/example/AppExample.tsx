import React from "react";
import NorwegianSchoolLandingPage from "../pages/homepage/NorwegianSchoolLandingPage";

const App: React.FC = () => {
  const handleMenuClick = () => {
    console.log("Menu clicked - Opening navigation");
    // Add your navigation logic here
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked");
    // Add your NIS Experience page navigation logic here
    // Example: navigate('/nis-experience');
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked");
    // Add your tour functionality here
    // Example: navigate('/tour');
  };

  const handleApplyClick = () => {
    console.log("Apply clicked");
    // Add your application form logic here
    // Example: navigate('/apply');
  };

  return (
    <div className="App">
      <NorwegianSchoolLandingPage
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />
    </div>
  );
};

export default App;
