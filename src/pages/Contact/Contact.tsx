import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";
import MapSection from "../../components/MapSection/MapSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";

const Contact: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const handleMenuClick = () => {
    console.log("Menu clicked from Contact page");
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked from Contact page");
    // Add scroll to NIS experience section
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked from Contact page");
    // Add virtual tour logic
  };

  const handleApplyClick = () => {
    console.log("Apply clicked from Contact page");
    // Add application logic
  };

  useEffect(() => {
    // Firebase image URL for hero background
    const firebaseImageUrl =
      "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Heading%20(1).png?alt=media&token=bff59766-ec7d-4296-9491-4806798ad9fb";

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
        title="Keep in Touch with Us"
        subtitle="CONTACT US"
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      <div className={styles.bodyContent}>
        {/* Content goes here */}
        <ContactSection />
        <MapSection
          title="Our Location"
          place="Norwegian International School Port Harcourt"
        />
        <div className={styles.faqSpacing}>
          <FaqSection
            eyebrow="FAQ"
            title={
              <>
                Answers for
                <br />
                Your Questions
              </>
            }
            imageSrc="https://res.cloudinary.com/dgslbycvk/image/upload/v1754808362/Photo_14_akjrad.png"
            imageAlt="Students on campus"
            items={[]}
            defaultOpenId="contact-teachers"
          />
        </div>

        <div className={styles.ctaBannerContainer}>
          <CtaBanner
            href="https://norwegianschool.educare.school/admission-form"
            target="_blank"
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;
