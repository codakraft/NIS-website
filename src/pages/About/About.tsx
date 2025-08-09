import React from "react";
import styles from "./About.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";
import {
  CommentIconComponent,
  MissionIconComponent,
  VisionIconComponent,
} from "../../components/Icons";

const About: React.FC = () => {
  const handleMenuClick = () => {
    console.log("Menu clicked from About page");
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked from About page");
    // Add scroll to NIS experience section
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked from About page");
    // Add virtual tour logic
  };

  const handleApplyClick = () => {
    console.log("Apply clicked from About page");
    // Add application logic
  };

  return (
    <div className={styles.aboutPage}>
      {/* Page Hero Section */}
      <PageHero
        backgroundImage={aboutUsHeroImage}
        title="What Sets Us Apart"
        subtitle="ABOUT NIS"
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.container}>
          <div className={styles.welcomeContent}>
            <div className={styles.welcomeImage}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/aboutNIS1.png?alt=media&token=1f8848c5-989a-4775-9b1c-2a4a587ad482"
                alt="Students and teacher"
              />
            </div>
            <div className={styles.welcomeText}>
              <p>
                We are very pleased to welcome you to our website. You may
                already know that Norwegian International School offers top
                quality, vibrant international education in a safe environment
                in Port Harcourt, Nigeria. Our school was established in 1983
                and has sustained the mission to provide a dynamic,
                international learning environment to pupils aged 2 to 16 years
                old. Our pupils enjoy very rich and rigorous education, based on
                the English National Curriculum. We are totally committed to
                supporting every pupil in the most appropriate way. Importantly,
                pupils are active participants in the learning process. The
                school has a team of highly educated, graduate teaching staff,
                many of whom have been with the school for 15 years or more. Our
                pupils are offered a variety of learning experiences which
                include collaborative and independent approaches.
              </p>
              <p>We hope to meet you soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Welcome Section */}
      <section className={styles.studentWelcomeSection}>
        <div className={styles.studentWelcomeContent}>
          <div className={styles.studentImageContainer}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flicker-rave.appspot.com/o/aboutNIS2.png?alt=media&token=b18802a0-16b6-4b79-861e-c452afa8b5a5"
              alt="Smiling student with glasses"
              className={styles.studentImage}
            />
          </div>
          <div className={styles.studentTextContainer}>
            <CommentIconComponent
              style={{ width: "62px", height: "35px", marginRight: "8px" }}
            />
            <h2 className={styles.studentTitle}>
              Hello, welcome to
              <br />
              Norwegian Int'l School
            </h2>
            <p className={styles.studentDescription}>
              At Norwegian International schools we offer the best, above
              standard in academics, athletics, arts and service. We enable each
              student to be an inspired lifelong learner and a responsible,
              compassionate global citizen.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionMissionSection}>
        <div className={styles.visionMissionContainer}>
          <div className={styles.visionMissionHeader}>
            <p className={styles.sectionLabel}>GOALS</p>
            <h2 className={styles.visionMissionTitle}>Our Vision & Mission</h2>
          </div>
          <div className={styles.visionMissionContent}>
            <div className={styles.visionCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <VisionIconComponent
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>
                <h3>Vision</h3>
              </div>
              <p>
                To help each child identify their potential and sufficiently
                equip each child to attain it.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <MissionIconComponent
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>
                <h3>Mission</h3>
              </div>
              <p>
                To promote holistic and high quality education to all pupils of
                the school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NIS Experience Section */}
      <section className={styles.nisExperienceSection}>
        <div className={styles.nisExperienceContainer}>
          <div className={styles.nisExperienceHeader}>
            <p className={styles.nisExperienceLabel}>THE NIS EXPERIENCE</p>
            <h2 className={styles.nisExperienceTitle}>
              Life Beyond
              <br />
              the Classroom
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
                  <p className={styles.cardSubtitle}>Play. Perform. Pursue.</p>
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

      {/* Up Next Section */}
      <section className={styles.upNextSection}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>UP NEXT</p>
          <div className={styles.upNextGrid}>
            <div className={styles.upNextCard}>
              <h3>Events & News</h3>
              <p>
                Stay updated with the latest happenings at Norwegian
                International School. From academic achievements to cultural
                celebrations, discover what makes our school community vibrant
                and dynamic.
              </p>
            </div>
            <div className={`${styles.upNextCard} ${styles.featured}`}>
              <h3>Admissions Open</h3>
              <p>
                Join our exceptional learning community! Applications are now
                open for the upcoming academic year. Experience world-class
                education in a nurturing environment that prepares students for
                global success.
              </p>
            </div>
            <div className={styles.upNextCard}>
              <h3>Virtual Campus Tour</h3>
              <p>
                Explore our state-of-the-art facilities and learning spaces
                through our interactive virtual tour. Discover the environment
                where academic excellence meets personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
