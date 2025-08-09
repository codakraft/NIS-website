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
      "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(9).png?alt=media&token=15311dec-adcf-48bd-b9ec-09c1d75ef48c";

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
                    src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(13).png?alt=media&token=561796d2-8060-451a-b122-136a45aefeec"
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
                    src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(2).png?alt=media&token=7b4d225c-3f03-414e-abf4-52e7f3f95e6d"
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
                    src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(4).png?alt=media&token=add4732f-e5b4-4b8d-b5b1-afce4e99c1f8"
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
                    src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(3).png?alt=media&token=b738fcd1-6daf-40f0-b09f-8a80f1bc8426"
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
                src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(10).png?alt=media&token=6b5fc6c1-ddba-4c3a-8e1e-2554fa0d6e7f"
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
