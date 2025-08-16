import React, { useState, useEffect } from "react";
import styles from "./Tour.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";
import {
  ArrowUpIconComponent,
  ArrowUpWhiteIconComponent,
} from "../../components/Icons";
import TourHeroSection from "../../components/TourHero/TourHero";
import VideoTourCards from "../../components/VideoTourCards/VideoTourCards";
import CtaBanner from "../../components/CtaBanner/CtaBanner";

const VirtualTour: React.FC = () => {
  return (
    <div className={styles.admissionPage}>
      {/* Page Hero Section */}
      <TourHeroSection />

      {/* Admission Content Section */}
      <div className={styles.bodyContent}>
        {/* Content goes here */}
        <section className={styles.contentSection}>
          <div className={styles.introTextBox}>
            <p className={styles.introText}>
              Explore our vibrant campus, meet our community, and experience the
              spirit of NIS — all from the comfort of your home.
            </p>
          </div>
        </section>

        {/* Video Tour Cards Section */}
        <VideoTourCards />

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

export default VirtualTour;
