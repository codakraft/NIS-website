import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PrimarySchoolHero.module.css";
import NavigationMenu from "../NavigationMenu";
import Logo from "../../assets/logo.png";
import chevronRight from "../../assets/chevron-right.png";
import { ChevronRightTopBlueIconComponent } from "../Icons";

interface PrimarySchoolHeroProps {
  onMenuClick?: () => void;
  onNISExperienceClick?: () => void;
  onTakeATourClick?: () => void;
  onApplyClick?: () => void;
}

const PrimarySchoolHero: React.FC<PrimarySchoolHeroProps> = ({
  onMenuClick,
  onNISExperienceClick,
  onTakeATourClick,
  onApplyClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsMenuOpen(true);
    onMenuClick?.();
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`);
    // Add navigation logic here
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked");
    navigate("/nis-experience");
    onNISExperienceClick?.();
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked");
    navigate("/tour");
    onTakeATourClick?.();
  };

  const handleApplyClick = () => {
    console.log("Apply clicked");
    // onApplyClick?.();
    window.open(
      "https://norwegianschool.educare.school/admission-form",
      "_blank"
    );
  };

  const handleApplyProgram = () => {
    window.open(
      "https://norwegianschool.educare.school/admission-form",
      "_blank"
    );
  };

  const handleDownloadBrochure = () => {
    console.log("Download Brochure clicked");
    // Add download logic here
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* Navigation Menu */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        onNavigate={handleNavigate}
      />

      {/* Primary School Hero Section */}
      <section className={styles.heroSection}>
        {/* Navigation Header */}
        <header className={styles.heroHeader}>
          <button
            className={styles.hamburgerMenu}
            onClick={handleMenuClick}
            aria-label="Open navigation menu"
          >
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </button>

          <div className={styles.rightSection}>
            <div className={styles.logoContainer}>
              <button
                onClick={handleLogoClick}
                className={styles.logoButton}
                aria-label="Go to homepage"
              >
                <img
                  src={Logo}
                  alt="Norwegian International School Logo"
                  className={styles.logo}
                />
              </button>
            </div>

            <nav className={styles.actionButtons}>
              <button
                className={`${styles.actionButton} ${styles.nisExperience}`}
                onClick={handleNISExperienceClick}
              >
                NIS Experience
                <img
                  src={chevronRight}
                  alt="Chevron Right"
                  width={20}
                  height={20}
                />
              </button>
              <button
                className={`${styles.actionButton} ${styles.takeTour}`}
                onClick={handleTakeATourClick}
              >
                Take a Tour
                <img
                  src={chevronRight}
                  alt="Chevron Right"
                  width={20}
                  height={20}
                />
              </button>
              <button
                className={`${styles.actionButton} ${styles.apply}`}
                onClick={handleApplyClick}
              >
                Apply
                <img
                  src={chevronRight}
                  alt="Chevron Right"
                  width={20}
                  height={20}
                />
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.leftContent}>
            {/* Purple banner with title */}
            <div className={styles.titleBanner}>
              <p className={styles.eyebrow}>ADMISSION</p>
              <h1 className={styles.title}>Primary School</h1>
            </div>

            {/* Description */}
            <p className={styles.description}>
              Preparing for our school students future in science, technology,
              engineering, and mathematics.
            </p>

            {/* Action Buttons */}
            <div className={styles.actionButtonsContainer}>
              <button
                className={styles.applyButton}
                onClick={handleApplyProgram}
              >
                Apply Program
              </button>
              <button
                className={styles.downloadLink}
                onClick={handleDownloadBrochure}
              >
                Download Brochure
                <ChevronRightTopBlueIconComponent
                  style={{ width: "16px", height: "16px" }}
                />
              </button>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754996436/Photo_15_osmuhx.png"
                alt="Primary school students in sports uniforms"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
        {/* Learning Outcomes Section */}
        <div className={styles.learningOutcomes}>
          <div className={styles.outcomesContainer}>
            <h2 className={styles.outcomesTitle}>Learning Outcomes</h2>
            <div className={styles.outcomesContent}>
              <p>
                At Norwegian International Schools you can enrol your wards in
                our Primary School into all Arts, Science and Commercial subject
                areas to get the best of both Nigerian and British curriculum.
              </p>
              <p>
                Our Primary schools are for Six years after which students take
                their school leaving certificate examination as we are
                accredited by the Basic Examination Board in Nigeria and the
                SAT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimarySchoolHero;
