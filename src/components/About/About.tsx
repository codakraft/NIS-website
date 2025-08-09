import React from "react";
import styles from "./About.module.css";

interface AboutProps {
  title: string;
  subtitle: string;
  description: string;
  images: {
    classroom: string;
    teaching: string;
  };
}

const About: React.FC<AboutProps> = ({
  title,
  subtitle,
  description,
  images,
}) => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <span className={styles.aboutSubtitle}>{subtitle}</span>
            <h2 className={styles.aboutTitle}>{title}</h2>
            <p className={styles.aboutDescription}>{description}</p>

            <button className={styles.learnMoreButton}>
              Learn More
              <svg
                className={styles.arrowIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.aboutImages}>
            <div className={styles.imageContainer}>
              <img
                src={images.classroom}
                alt="Students in classroom"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.imageContainer}>
              <img
                src={images.teaching}
                alt="Teacher helping student"
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
