import React, { useState, useEffect } from "react";
import styles from "./Admission.module.css";
import PrimarySchoolHero from "../../components/PrimarySchoolHero";
import Footer from "../../components/Footer";
import CompulsorySubjects from "../../components/CompulsorySubjects";
import RelatedPrograms from "../../components/RelatedPrograms";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";
import {
  ArrowUpIconComponent,
  ArrowUpWhiteIconComponent,
} from "../../components/Icons";
import CtaBanner from "../../components/CtaBanner/CtaBanner";

const PrimarySchool: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const handleMenuClick = () => {
    console.log("Menu clicked from Primary School page");
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked from Primary School page");
    // Add scroll to NIS experience section
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked from Primary School page");
    // Add virtual tour logic
  };

  const handleApplyClick = () => {
    console.log("Apply clicked from Primary School page");
    // Add application logic
  };

  useEffect(() => {
    // Firebase image URL for hero background
    const firebaseImageUrl =
      "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(5).png?alt=media&token=ae24b8ca-1fcf-43d7-9ad3-2e9c167ece19";

    // Test if the image loads successfully
    const img = new Image();
    img.onload = () => {
      console.log("Firebase image loaded successfully");
      setBackgroundImage(firebaseImageUrl);
    };
    img.onerror = () => {
      console.error("Failed to load Firebase image, using fallback");
      setBackgroundImage(aboutUsHeroImage);
    };
    img.src = firebaseImageUrl;
  }, []);

  console.log("Background image URL:", backgroundImage);

  return (
    <div className={styles.admissionPage}>
      {/* Primary School Hero Section */}
      <PrimarySchoolHero
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      <div className={styles.bodyContent}>
        {/* Compulsory Subjects Section */}
        <CompulsorySubjects />

        {/* Related Programs Section */}
        <RelatedPrograms />

        <div className={styles.ctaBannerContainer}>
          <CtaBanner
            href="https://norwegianschool.educare.school/admission-form"
            target="_blank"
          />
        </div>
      </div>      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PrimarySchool;
