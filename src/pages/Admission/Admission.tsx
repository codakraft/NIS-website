import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Admission.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";
import {
  ArrowUpIconComponent,
  ArrowUpWhiteIconComponent,
} from "../../components/Icons";

const Admission: React.FC = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const handleMenuClick = () => {
    console.log("Menu clicked from Admission page");
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked from Admission page");
    navigate("/nis-experience");
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked from Admission page");
    navigate("/tour");
  };

  const handleApplyClick = () => {
    console.log("Apply clicked from Admission page");
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
              src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Rectangle%209%20(1).png?alt=media&token=8268ce0d-82d2-42ca-a7c2-1147d6bf39ba"
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
                  src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(13).png?alt=media&token=561796d2-8060-451a-b122-136a45aefeec"
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
                  src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(2).png?alt=media&token=7b4d225c-3f03-414e-abf4-52e7f3f95e6d"
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
                  src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(4).png?alt=media&token=add4732f-e5b4-4b8d-b5b1-afce4e99c1f8"
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
                  src="https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(3).png?alt=media&token=b738fcd1-6daf-40f0-b09f-8a80f1bc8426"
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
              src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753060/_OP_9279_indxqb.jpg"
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
