import React from "react";
import styles from "./Testimonials.module.css";
import { Testimonial } from "../../types";

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  currentTestimonial: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
  currentTestimonial = 0,
}) => {
  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonialsContent}>
          <div className={styles.testimonialsLeft}>
            <span className={styles.testimonialsSubtitle}>{subtitle}</span>
            <h2 className={styles.testimonialsTitle}>{title}</h2>

            <div className={styles.testimonialQuote}>
              <blockquote className={styles.quote}>
                "{currentTestimonialData.quote}"
              </blockquote>
              <div className={styles.author}>
                <span className={styles.authorName}>
                  {currentTestimonialData.author}
                </span>
                {currentTestimonialData.position && (
                  <span className={styles.authorPosition}>
                    {currentTestimonialData.position}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.testimonialsRight}>
            <div className={styles.redPanel}>
              <div className={styles.navigationDots}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.navigationDot} ${
                      index === currentTestimonial
                        ? styles.navigationDotActive
                        : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
