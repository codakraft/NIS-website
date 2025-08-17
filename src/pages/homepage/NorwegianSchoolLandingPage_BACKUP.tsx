import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NorwegianSchoolLandingPage.module.css";
import { NorwegianSchoolHeaderProps } from "../../types/norwegian-school";
import HeroSection from "../../components/Hero/Hero";
import Footer from "../../components/Footer";
import {
  TeacherStudentIcon,
  TeacherStudent2Icon,
  LineIcon,
  OrnamentIcon,
  Nis1Icon,
  Nis2Icon,
  Nis3Icon,
  Nis4Icon,
} from "../../components/Icons";
import { testimonialsData } from "../../data/siteData";

// University logos data
const universityLogos = [
  {
    name: "Stanford University",
    logo: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/stanford-1024x449-1.png",
  },
  {
    name: "University of Oxford",
    logo: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/oxford.png",
  },
  {
    name: "Ohio University",
    logo: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/ohio.png",
  },
  {
    name: "Massachusetts Institute of Technology",
    logo: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/mit-1024x672-1.jpg",
  },
  {
    name: "Harvard University",
    logo: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/havard.png",
  },
  {
    name: "University of Cambridge",
    logo: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/UniversityOfCambridgeLogo-1.png",
  },
];

// Custom hook for count-up animation
const useCountUp = (
  end: number,
  duration: number = 2000,
  isVisible: boolean = false
) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isVisible || hasStarted) return;

    setHasStarted(true);
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible, hasStarted]);

  return count;
};

// Intersection Observer hook
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.3, ...options }
    );

    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [options]);

  return { targetRef, isIntersecting };
};

const NorwegianSchoolLandingPage: React.FC<NorwegianSchoolHeaderProps> = ({
  onMenuClick,
  onNISExperienceClick,
  onTakeATourClick,
  onApplyClick,
}) => {
  const navigate = useNavigate();

  // Function to navigate to gallery page
  const handleImageClick = () => {
    navigate("/gallery");
  };

  const handleMenuClick = () => {
    console.log("Menu clicked - Opening navigation");
    onMenuClick?.();
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked");
    onNISExperienceClick?.();
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked");
    onTakeATourClick?.();
  };

  const handleApplyClick = () => {
    console.log("Apply clicked");
    onApplyClick?.();
  };

  const { targetRef, isIntersecting } = useIntersectionObserver();
  const count1200 = useCountUp(14566, 2500, isIntersecting);
  const count100 = useCountUp(100, 2000, isIntersecting);
  const count95 = useCountUp(100, 1800, isIntersecting);

  // State for testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Function to go to next testimonial
  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextTestimonial();
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);

    if (
      (e.currentTarget as HTMLElement).classList.contains(styles.categoryRow)
    ) {
      const element = e.currentTarget as HTMLElement;
      element.style.cursor = "grabbing";
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (
      (e.currentTarget as HTMLElement).classList.contains(styles.categoryRow)
    ) {
      const element = e.currentTarget as HTMLElement;
      element.style.cursor = "grab";
    }

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (e.currentTarget === testimonialRef.current) {
      if (isLeftSwipe) {
        goToNextTestimonial();
      } else if (isRightSwipe) {
        setCurrentTestimonial((prev) =>
          prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <HeroSection />

      {/* About Section - Figma Accurate */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutSectionWrapper}>
          {/* Purple Card Overlay */}
          <div className={styles.aboutCardOverlay}>
            <div className={styles.sectionTag}>ABOUT NIS</div>
            <h2 className={styles.aboutTitle}>What Sets Us Apart</h2>
          </div>
          {/* Images and Text Row */}
          <div className={styles.aboutRow}>
            {/* Left Image */}
            <div className={styles.aboutImageLeft}>
              <TeacherStudent2Icon style={{ width: "100%", height: "100%" }} />
            </div>

            {/* Right Side: Image and Text */}
            <div className={styles.aboutRightSection}>
              <div className={styles.aboutImageRight}>
                <TeacherStudentIcon style={{ width: "100%", height: "100%" }} />
              </div>

              {/* Text and Button */}
              <div className={styles.aboutTextBlock}>
                <p className={styles.aboutDescription}>
                  Norwegian International School has over 30 years' experience
                  in providing top quality international education in Port
                  Harcourt. Along with academic rigour, strong tradition and
                  innovation, we equip our pupils with the ability to be
                  well-balanced citizens and leaders of the world.
                </p>
                <button className={styles.learnMoreButton}>
                  Learn More <span className={styles.buttonArrow}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statisticsSection} ref={targetRef}>
        <div className={styles.statisticsContent}>
          <div className={styles.statisticsLeft}>
            <h2 className={styles.statisticsTitle}>Numbers Don't Lie</h2>
            <p className={styles.statisticsDescription}>
              Norwegian International School has over 40 years of experience
              providing top-quality international education in Port Harcourt.
            </p>

            <LineIcon className={styles.divider} />
            <div className={styles.statisticsNumbers}>
              <div className={styles.statistic}>
                <span className={styles.statisticNumber}>
                  {count1200.toLocaleString()}+
                </span>
                <span className={styles.statisticLabel}>
                  Enrollments since inception
                </span>
              </div>
              <div className={styles.statistic}>
                <span className={styles.statisticNumber}>{count100}%</span>
                <span className={styles.statisticLabel}>
                  Passes into university
                </span>
              </div>
              <div className={styles.statistic}>
                <span className={styles.statisticNumber}>{count95}%</span>
                <span className={styles.statisticLabel}>Happy parents</span>
              </div>
            </div>
          </div>
          <div className={styles.statisticsRight}>
            <OrnamentIcon style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={styles.testimonialsSection}
        ref={testimonialRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.testimonialsWrapper}>
          <div
            className={styles.testimonialBluePanel}
            style={{
              backgroundColor:
                currentTestimonial % 2 === 0 ? "#393e8e" : "#dc2c2c",
            }}
          >
            <div className={styles.testimonialContent} key={currentTestimonial}>
              <div className={styles.sectionTag}>TESTIMONIALS</div>
              <h2 className={styles.testimonialsTitle}>Hear what they say</h2>
              <div className={styles.testimonialQuote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  {testimonialsData[currentTestimonial].quote}
                </p>
                <div className={styles.quoteAuthor}>
                  <strong>{testimonialsData[currentTestimonial].author}</strong>
                  <span>{testimonialsData[currentTestimonial].position}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialDotsWrapper}>
            <div
              className={styles.testimonialRedPanel}
              style={{
                backgroundColor:
                  currentTestimonial % 2 === 0 ? "#dc2c2c" : "#393e8e",
              }}
            >
              <div className={styles.testimonialDots}>
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === currentTestimonial ? styles.active : ""
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners Carousel */}
      <section className={styles.universitySection}>
        <div className={styles.universityContainer}>
          <h2 className={styles.universityTitle}>
            <span className={styles.titleDesktop}>
              OUR GRADUATES HAVE GONE ON TO CONTINUE THEIR EDUCATION AT THE
              WORLD'S MOST PRESTIGIOUS SCHOOLS.
            </span>
            <span className={styles.titleMobile}>WHERE OUR GRADUATES GO</span>
          </h2>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              {/* First set of logos */}
              {universityLogos.map((university, index) => (
                <div key={`first-${index}`} className={styles.logoItem}>
                  <div className={styles.logoContent}>
                    <img
                      src={university.logo}
                      alt={university.name}
                      className={styles.logoImage}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {universityLogos.map((university, index) => (
                <div key={`second-${index}`} className={styles.logoItem}>
                  <div className={styles.logoContent}>
                    <img
                      src={university.logo}
                      alt={university.name}
                      className={styles.logoImage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesGrid}>
          {/* First Row */}
          <div
            className={styles.categoryRow}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753061/_OP_9309_fdqvmd.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Academics</h3>
              </div>
            </div>

            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753056/_OP_9001_gj0bek.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Culture</h3>
              </div>
            </div>
            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754754812/_OP_8688_tx5czy.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Campus</h3>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div
            className={styles.categoryRow}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8918_xq0twl.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Sports</h3>
              </div>
            </div>
            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753060/_OP_9279_indxqb.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Laboratory</h3>
              </div>
            </div>
            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753047/_OP_8753_lycn8p.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Dining</h3>
              </div>
            </div>
            <div
              className={styles.categoryCard}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753045/_OP_8730_gjlxlv.jpg"
                alt="Smiling student with glasses"
                className={styles.studentImage}
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryTitle}>Campus</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default NorwegianSchoolLandingPage;
