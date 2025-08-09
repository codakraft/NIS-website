import React, { useState, useEffect } from "react";
import styles from "./NISExperience.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";
import {
  ArrowUpIconComponent,
  ArrowUpWhiteIconComponent,
} from "../../components/Icons";

const Admission: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const handleMenuClick = () => {
    console.log("Menu clicked from Admission page");
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked from Admission page");
    // Add scroll to NIS experience section
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked from Admission page");
    // Add virtual tour logic
  };

  const handleApplyClick = () => {
    console.log("Apply clicked from Admission page");
    // Add application logic
  };

  useEffect(() => {
    // Firebase image URL for hero background
    const firebaseImageUrl =
      "https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(9).png?alt=media&token=c538a96a-18d4-4f2e-af91-2cbbbbce4525";

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
    <div className={styles.nisExperiencePage}>
      {/* Page Hero Section */}
      <PageHero
        backgroundImage={backgroundImage}
        title="Life Beyond the Classroom"
        subtitle="THE NIS EXPERIENCE"
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      <div className={styles.bodyContent}>
        {/* Content goes here */}
        <section className={styles.contentSection}>
          <div className={styles.introTextBox}>
            <p className={styles.introText}>
              At NIS, campus life is where learning comes alive. From vibrant
              classrooms to creative clubs, faith moments to lifelong
              friendships, every corner of our community is designed to inspire
              growth, curiosity, and connection.
              <br />
              <br />
              Here, students don't just attend school — they thrive in a culture
              of joy, purpose, and belonging.
            </p>
          </div>
        </section>

        <section className={styles.nisExperienceSection}>
          <div className={styles.nisExperienceContainer}>
            <div className={styles.nisExperienceHeader}>
              <p className={styles.nisExperienceLabel}>THE NIS EXPERIENCE</p>
              <h2 className={styles.nisExperienceTitle}>
                Real Moments,
                <br />
                Real Voices
              </h2>
            </div>
            <div className={styles.experienceGrid}>
              <div className={styles.experienceCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(1).png?alt=media&token=6c532079-e9fa-4d6c-9519-0413eab0a84a"
                    alt="Students studying in classroom"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>Academics</h3>
                    <p className={styles.cardSubtitle}>
                      Thinking Deeply, Dreaming Big
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.experienceCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(2).png?alt=media&token=2c827355-f169-431e-a389-769a4e0e626e"
                    alt="Students in sports and activities"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>Clubs & Activities</h3>
                    <p className={styles.cardSubtitle}>
                      Play. Perform. Pursue.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.experienceCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(4).png?alt=media&token=52cb68f3-e27e-466f-8f2f-81755b5b2253"
                    alt="Students in assembly gathering"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>Faith & Character</h3>
                    <p className={styles.cardSubtitle}>Grow with Grace</p>
                  </div>
                </div>
              </div>
              <div className={styles.experienceCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(3).png?alt=media&token=42f13d0c-a9b8-4f8a-b5e0-9eb68e24b9a8"
                    alt="Individual student portrait"
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>Student Voice</h3>
                    <p className={styles.cardSubtitle}>
                      When Children Speak, We Listen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.campusExploreSection}>
          <div className={styles.campusExploreContainer}>
            <div className={styles.campusImageColumn}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(10).png?alt=media&token=3c6f6536-2ac5-4f07-a9b5-52a716ce9a33"
                alt="Students exploring campus"
                className={styles.campusImage}
              />
            </div>
            <div className={styles.campusTextColumn}>
              <p className={styles.campusLabel}>EXPLORE OUR CAMPUS</p>
              <h2 className={styles.campusTitle}>
                A Space to Grow,
                <br />
                Wonder, and Belong.
              </h2>
              <p className={styles.campusDescription}>
                Take an interactive walk through
                <br />
                our beautiful, purpose-driven
                <br />
                spaces.
              </p>
              <button className={styles.takeATourButton}>
                Take a Tour
                <ArrowUpIconComponent
                  style={{ width: "16px", height: "16px" }}
                />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Admission;
