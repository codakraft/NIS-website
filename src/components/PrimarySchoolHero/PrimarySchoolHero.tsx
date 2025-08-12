import React, { useState } from "react";
import styles from "./PrimarySchoolHero.module.css";
import NavigationMenu from "../NavigationMenu";
import Logo from "../../assets/logo.png";
import chevronRight from "../../assets/chevron-right.png";

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
    onNISExperienceClick?.();
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked");
    onTakeATourClick?.();
  };

  const handleApplyClick = () => {
    console.log("Apply clicked");
    onApplyClick?.();
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
              <img
                src={Logo}
                alt="Norwegian International School Logo"
                className={styles.logo}
              />
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
                className={styles.downloadButton}
                onClick={handleDownloadBrochure}
              >
                Download Brochure
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M10 7h7v7" />
                </svg>
              </button>
            </div>

            {/* Learning Outcomes Section */}
            <div className={styles.learningOutcomes}>
              <h2 className={styles.outcomesTitle}>Learning Outcomes</h2>
              <div className={styles.outcomesContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Morbi rhoncus tellus
                  nulla gravida ut tellus ac dui. Arcu sapien phasellus
                  facilisis fringilla mauris cursus id. Mus tortor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nullam urna quisque
                  ultrices amet. Eget amet in lectus non faucibus eu integer.
                  Non nisl mattis sed suspendisse morbi leo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A ut dignissim
                  pellentesque consectetur faucibus sapien ut sit. Suspendisse
                  integer sed a donec ornare aliquam tortor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Viverra sed ut velit
                  nec bibendum viverra tristique fermentum consectetur. Mi velit
                  morbi laoreet aliquam tellus placerat.
                </p>
              </div>
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
      </section>
    </>
  );
};

export default PrimarySchoolHero;
