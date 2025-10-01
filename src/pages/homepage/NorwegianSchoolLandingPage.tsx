import React, { useState, useEffect, useRef, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NorwegianSchoolLandingPage.module.css";
import { NorwegianSchoolHeaderProps } from "../../types/norwegian-school";
import HeroSection from "../../components/Hero/Hero";
import Footer from "../../components/Footer";
import LazyImage from "../../components/LazyImage";
import {
  TeacherStudentIcon,
  LineIcon,
  OrnamentIcon,
} from "../../components/Icons";
import { testimonialsData } from "../../data/siteData";
import { useOptimizedData, useThrottle } from "../../hooks/usePerformance";
import {
  useProgressiveLoading,
  useConnectionSpeed,
  preloadCriticalResources,
  measurePerformance,
} from "../../hooks/usePerformanceOptimizations";

// Memoized university logos data to prevent recreation on every render
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
  {
    name: "Columbia University",
    logo: "https://res.cloudinary.com/dgslbycvk/image/upload/v1757006936/columbia_p4hcxu.jpg",
  },
  {
    name: "Barnard College",
    logo: "https://res.cloudinary.com/dgslbycvk/image/upload/v1757006935/barnard_college_wr9hsh.jpg",
  },
  {
    name: "University of Birmingham",
    logo: "https://res.cloudinary.com/dgslbycvk/image/upload/v1757006935/UBirmi_kjmlwv.png",
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

  // Performance monitoring
  const [endMeasure] = useState(() => measurePerformance("homepage-render"));

  // Progressive loading for non-critical content
  const isUniversityLogosReady = useProgressiveLoading(1000);
  const isTestimonialsReady = useProgressiveLoading(1500);

  // Connection speed detection
  const isSlowConnection = useConnectionSpeed();

  // Preload critical resources on mount
  useEffect(() => {
    preloadCriticalResources();

    // Cleanup performance measurement on unmount
    return () => {
      endMeasure();
    };
  }, [endMeasure]);

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
    navigate("/nis-experience");
    onNISExperienceClick?.();
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked");
    navigate("/tour");
    onTakeATourClick?.();
  };

  const handleApplyClick = () => {
    console.log("Apply clicked");
    onApplyClick?.();
  };

  const handleLearnMoreClick = () => {
    console.log("Learn More clicked - Navigating to About page");
    navigate("/about");
  };

  const { targetRef, isIntersecting } = useIntersectionObserver();

  // Memoize count calculations to prevent unnecessary recalculations
  const optimizedCounts = useOptimizedData(
    {
      count1: useCountUp(14566, 2500, isIntersecting),
      count2: useCountUp(100, 2000, isIntersecting),
      count3: useCountUp(100, 1800, isIntersecting),
    },
    [isIntersecting]
  );

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

  // Optimize touch handlers with throttling
  const handleTouchStart = useThrottle((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);

    if (
      (e.currentTarget as HTMLElement).classList.contains(styles.categoryRow)
    ) {
      const element = e.currentTarget as HTMLElement;
      element.style.cursor = "grabbing";
    }
  }, 16); // ~60fps

  const handleTouchMove = useThrottle((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, 16); // ~60fps

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
              {/* <TeacherStudent2Icon style={{ width: "100%", height: "100%" }} /> */}
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1755427340/Rectangle_lz3ppx.png"
                alt="About NIS - School building"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Right Side: Image and Text */}
            <div className={styles.aboutRightSection}>
              <div className={styles.aboutImageRight}>
                <TeacherStudentIcon style={{ width: "100%", height: "100%" }} />
              </div>

              {/* Text and Button */}
              <div className={styles.aboutTextBlock}>
                <p className={styles.aboutDescription}>
                  Norwegian International School has over 40 years' experience
                  in providing top quality international education in Port
                  Harcourt. Along with academic rigour, strong tradition and
                  innovation, we equip our pupils with the ability to be
                  well-balanced citizens and leaders of the world.
                </p>
                <button
                  className={styles.learnMoreButton}
                  onClick={handleLearnMoreClick}
                >
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
              For over 40 years, NIS has been more than a school, it’s been a
              launchpad. From early learners to global citizens, the numbers
              reflect our commitment: generations shaped, futures secured.
            </p>

            <LineIcon className={styles.divider} />
            <div className={styles.statisticsNumbers}>
              <div className={styles.statistic}>
                <span className={styles.statisticNumber}>
                  {optimizedCounts.count1.toLocaleString()}+
                </span>
                <span className={styles.statisticLabel}>
                  Enrollments since inception
                </span>
              </div>
              <div className={styles.statistic}>
                <span className={styles.statisticNumber}>
                  {optimizedCounts.count2}%
                </span>
                <span className={styles.statisticLabel}>
                  Passes into university
                </span>
              </div>
              <div className={styles.statistic}>
                <span className={styles.statisticNumber}>
                  {optimizedCounts.count3}%
                </span>
                <span className={styles.statisticLabel}>Happy parents</span>
              </div>
            </div>
          </div>
          <div className={styles.statisticsRight}>
            <OrnamentIcon style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </section>

      {/* Head of School Section */}
      <section className={styles.headOfSchoolSection}>
        <div className={styles.headOfSchoolContainer}>
          <div className={styles.headOfSchoolContent}>
            {/* Left Column - Image */}
            <div className={styles.headOfSchoolImageWrapper}>
              <div className={styles.headOfSchoolImageContainer}>
                <LazyImage
                  src="https://res.cloudinary.com/dgslbycvk/image/upload/v1759332443/head_of_school_o2vrbv.png"
                  alt="David Roantree - Acting Head of School"
                  className={styles.headOfSchoolImage}
                />
                <div className={styles.headOfSchoolImageOverlay}>
                  <div className={styles.headOfSchoolTag}>HEAD OF SCHOOL</div>
                </div>
              </div>
            </div>

            {/* Right Column - Message */}
            <div className={styles.headOfSchoolMessage}>
              <div className={styles.headOfSchoolHeader}>
                <h2 className={styles.headOfSchoolTitle}>
                  A Message from Our Head of School
                </h2>
                <div className={styles.headOfSchoolDecoration}></div>
              </div>

              <div className={styles.headOfSchoolText}>
                <p>
                  At NIS, every student is inspired to achieve their very best.
                  Our commitment is to provide an education that combines
                  academic excellence with genuine care, ensuring that children
                  are not only challenged but also supported every step of the
                  way. We believe a school should be a place where parents see
                  their highest hopes for their children come to life: a safe,
                  caring environment that also challenges them to aim higher and
                  reach further.
                </p>

                <p>
                  As an international school, NIS combines global standards with
                  a strong sense of community. Our diverse environment reflects
                  the world our students will go on to shape; preparing them
                  with the knowledge, values, and resilience needed to succeed
                  anywhere. With teachers experienced across continents,
                  internationally benchmarked curriculum standards, and a
                  culture that celebrates both academic excellence and personal
                  growth, we are equipping young people not just for
                  examinations, but for life.
                </p>

                <p>
                  What makes NIS truly special is its spirit. Our students learn
                  in an environment where diversity is celebrated, individuality
                  is embraced, and every child is known and valued. Beyond the
                  classroom, opportunities in arts, sports, culture, and service
                  ensure that children discover their talents, build confidence,
                  and develop into compassionate, well-rounded individuals ready
                  to make a difference in the world.
                </p>

                <p>
                  The task before us is a shared one. Parents, staff, and
                  community partners all play a vital role in creating the
                  future we want for our children. At NIS, we are committed to
                  working with all our stakeholders to expand opportunities,
                  strengthen our impact, and make this school a model of what
                  international education can achieve in Nigeria and beyond.
                  Together, we have the chance to build something extraordinary,
                  for our students today, and for the generations that will
                  follow.
                </p>
              </div>

              <div className={styles.headOfSchoolSignature}>
                <p className={styles.signatureName}>David Roantree</p>
                <p className={styles.signatureTitle}>Acting Head of School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {isTestimonialsReady && (
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
              <div
                className={styles.testimonialContent}
                key={currentTestimonial}
              >
                <div className={styles.sectionTag}>TESTIMONIALS</div>
                <h2 className={styles.testimonialsTitle}>Hear what they say</h2>
                <div className={styles.testimonialQuote}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quoteText}>
                    {testimonialsData[currentTestimonial].quote}
                  </p>
                  <div className={styles.quoteAuthor}>
                    <strong>
                      {testimonialsData[currentTestimonial].author}
                    </strong>
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
      )}

      {/* University Partners Carousel */}
      {isUniversityLogosReady && (
        <section className={styles.universitySection}>
          <div className={styles.universityContainer}>
            <h2 className={styles.universityTitle}>
              OUR GRADUATES HAVE GONE ON TO CONTINUE THEIR EDUCATION AT THE
              WORLD'S MOST PRESTIGIOUS SCHOOLS.
            </h2>
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                {/* First set of logos */}
                {universityLogos.map((university, index) => (
                  <div key={`first-${index}`} className={styles.logoItem}>
                    <div className={styles.logoContent}>
                      <LazyImage
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
                      <LazyImage
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
      )}

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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753061/_OP_9309_fdqvmd.jpg"
                alt="Academics - Smiling student with glasses"
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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753056/_OP_9001_gj0bek.jpg"
                alt="Culture - Students in cultural activity"
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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754754812/_OP_8688_tx5czy.jpg"
                alt="Campus - School building exterior"
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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8918_xq0twl.jpg"
                alt="Sports - Students playing sports"
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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753060/_OP_9279_indxqb.jpg"
                alt="Laboratory - Science laboratory equipment"
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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753047/_OP_8753_lycn8p.jpg"
                alt="Dining - School cafeteria"
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
              <LazyImage
                src="https://res.cloudinary.com/dgslbycvk/image/upload/v1754753045/_OP_8730_gjlxlv.jpg"
                alt="Campus - School outdoor area"
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

// Memoize the component to prevent unnecessary re-renders
export default memo(NorwegianSchoolLandingPage);
