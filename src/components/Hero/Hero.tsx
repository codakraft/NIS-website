import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { NorwegianSchoolHeaderProps } from "../../types/norwegian-school";
import Logo from "../../assets/logo.png";
import chevronRIght from "../../assets/chevron-right.png";
import NavigationMenu from "../NavigationMenu";

const HeroSection: React.FC<NorwegianSchoolHeaderProps> = ({
  onMenuClick,
  onNISExperienceClick,
  onTakeATourClick,
  onApplyClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  // Lazy load video after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100); // Small delay to allow page to render first

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
  };

  const handleVideoError = () => {
    console.warn("Video failed to load, using fallback image");
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
    console.log("Menu clicked - Opening navigation");
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
  return (
    <>
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        onNavigate={handleNavigate}
      />
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          {/* Lazy-loaded video */}
          {showVideo && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className={styles.heroImage}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              preload="none"
            >
              <source
                src="https://res.cloudinary.com/dgslbycvk/video/upload/v1755888196/HomePageVideo_lfwpu9.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
          <div className={styles.heroOverlay}></div>
        </div>

        <header className={styles.header}>
          {/* Hamburger Menu */}
          <button
            className={styles.hamburgerMenu}
            onClick={handleMenuClick}
            aria-label="Open navigation menu"
          >
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </button>

          {/* Logo and Action Buttons Container */}
          <div className={styles.rightSection}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <img
                src={Logo}
                alt="Norwegian International School Logo"
                className={styles.logo}
              />
            </div>

            {/* Action Buttons */}
            <nav className={styles.actionButtons}>
              <button
                className={`${styles.actionButton} ${styles.nisExperience}`}
                onClick={handleNISExperienceClick}
              >
                NIS Experience
                {/* <span className={styles.buttonArrow}> */}
                <img
                  src={chevronRIght}
                  alt="Chevron Right"
                  width={20}
                  height={20}
                />
                {/* </span> */}
              </button>
              <button
                className={`${styles.actionButton} ${styles.takeTour}`}
                onClick={handleTakeATourClick}
              >
                Take a Tour
                <img
                  src={chevronRIght}
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
                  src={chevronRIght}
                  alt="Chevron Right"
                  width={20}
                  height={20}
                />
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Title */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to
            <br />
            <span className={styles.heroSchoolName}>
              Norwegian Int'l School
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
