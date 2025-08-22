import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageHero.module.css";
import NavigationMenu from "../NavigationMenu";
import Logo from "../../assets/logo.png";
import chevronRight from "../../assets/chevron-right.png";

interface PageHeroProps {
  backgroundImage: string; // Accepts both SVG imports and image URLs (http/https/data URLs)
  title: string;
  subtitle: string;
  onMenuClick?: () => void;
  onNISExperienceClick?: () => void;
  onTakeATourClick?: () => void;
  onApplyClick?: () => void;
}

const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
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
    onApplyClick?.();
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Helper function to format background image URL
  const getBackgroundImageStyle = (imageUrl: string) => {
    if (!imageUrl) return {};

    // If it's already a data URL or starts with http/https, use as is
    // If it's an imported SVG/image, it should already be a proper URL
    return {
      backgroundImage: `url("${imageUrl}")`,
    };
  };

  console.log("Background image URL:", backgroundImage);

  return (
    <>
      {/* Navigation Menu */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        onNavigate={handleNavigate}
      />

      {/* Page Hero Section */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroBackground}
          style={getBackgroundImageStyle(backgroundImage)}
        ></div>

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

        {/* Hero Content - Purple overlay section */}
        <div className={styles.heroContent}>
          <div className={styles.heroTextBox}>
            <p className={styles.sectionLabel}>{subtitle}</p>
            <h1 className={styles.heroTitle}>{title}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHero;
