import React, { useState, useEffect } from "react";
import styles from "./Admission.module.css";
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
      "https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Photo%20(5).png?alt=media&token=c29c2550-264d-423c-a73b-d9bc73cae02c";

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
      {/* Page Hero Section */}
      <PageHero
        backgroundImage={backgroundImage}
        title="Start the Journey Today"
        subtitle="ADMISSIONS"
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      {/* Admission Content Section */}
      <section className={styles.admissionContent}>
        <div className={styles.contentContainer}>
          <div className={styles.imageSection}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Group%2091%20(1).png?alt=media&token=39f8a211-6de6-4875-b70b-a4cd63e7c0b7"
              alt="Student and teacher at NIS"
              className={styles.admissionImage}
            />
          </div>
          <div className={styles.textSection}>
            <div className={styles.textContent}>
              {/* <p className={styles.mainText}>
                We're now accepting applications for the 2024/2025 academic
                session.
              </p> */}
              <p className={styles.description}>
                We're now accepting applications for the 2024/2025 academic
                session. At NIS, excellence isn't just a promise — it's a lived
                experience. If you're looking for a school where your child can
                thrive academically, grow in character, and be prepared for a
                global future, there's no better place to begin. Now is the
                time. Come visit us, send an email, or give us a call — we'll
                walk you through every step.
              </p>
              {/* <p className={styles.callToAction}>Now is the time.</p>
              <p className={styles.contact}>
                Come visit us, send an email, or give us a call — we'll walk you
                through every step.
              </p> */}
              <button
                className={styles.joinLink}
                onClick={() => console.log("Join NIS Family clicked")}
              >
                Join the NIS Family{" "}
                <ArrowUpIconComponent
                  style={{ width: "16px", height: "16px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nisExperienceSection}>
        <div className={styles.nisExperienceContainer}>
          <div className={styles.nisExperienceHeader}>
            <h2 className={styles.nisExperienceTitle}>
              Clear Steps,
              <br />
              Caring Support
            </h2>
            <div className={styles.nisExperienceSubText}>
              <p className={styles.nisExperienceLabel}>
                From inquiry to enrollment, we guide you every step of the way.
                For further enquiries,
              </p>
              <button
                className={styles.joinLink}
                onClick={() => console.log("Join NIS Family clicked")}
              >
                Contact Us{" "}
                <ArrowUpIconComponent
                  style={{ width: "16px", height: "16px" }}
                />
              </button>
            </div>
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
                  {/* <p className={styles.cardSubtitle}>
                    Thinking Deeply, Dreaming Big
                  </p> */}
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
                  {/* <p className={styles.cardSubtitle}>Play. Perform. Pursue.</p> */}
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
                  {/* <p className={styles.cardSubtitle}>Grow with Grace</p> */}
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
                  {/* <p className={styles.cardSubtitle}>
                    When Children Speak, We Listen
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Policy Section */}
      <section className={styles.admissionPolicySection}>
        <div className={styles.admissionPolicyContainer}>
          <div className={styles.policyTextSection}>
            <h2 className={styles.policyTitle}>Admission Policy</h2>
            <p className={styles.policyDescription}>
              The Norwegian International School has a comprehensive Admissions
              Policy which is available online to all parents and prospective
              parents.
            </p>
            <button className={styles.viewPolicyButton}>
              View Admission Policy
              <ArrowUpWhiteIconComponent
                style={{ width: "16px", height: "16px", marginLeft: "8px" }}
              />
            </button>
          </div>
          <div className={styles.policyImageSection}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/Rectangle%2019.png?alt=media&token=8e38aa5d-de0a-4767-957b-3ef5861e91eb"
              alt="Students in laboratory"
              className={styles.policyImage}
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Admission;
