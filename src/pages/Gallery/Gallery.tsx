import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import aboutUsHeroImage from "../../assets/icons/aboutUsHero.svg";
import {
  ArrowUpIconComponent,
  ArrowUpWhiteIconComponent,
} from "../../components/Icons";

// Gallery images with varying heights to match Figma design - using actual project images
const galleryImages = [
  // Classroom images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753056/_OP_9001_gj0bek.jpg",
    height: "tall",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753058/_OP_9037_s3nppy.jpg",
    height: "medium",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753049/_OP_8834_nz9b4j.jpg",
    height: "short",
    category: "Culture",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_9054.jpg?alt=media&token=0428cde0-1cce-4ff4-8338-bae8628dff81",
    height: "tall",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753047/_OP_8752_ty7s6q.jpg",
    height: "medium",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755327598/_OP_9145_fwbov5.jpg",
    height: "short",
    category: "Culture",
  },

  // Academics images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755327598/_OP_9145_fwbov5.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381069/_OP_9122_hjty9i.jpg",
    height: "tall",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381219/_OP_9287_zzebec.jpg",
    height: "short",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381219/_OP_9274_yj14og.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381218/_OP_8717_rndak9.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381218/_OP_8717_rndak9.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381277/WhatsApp_Image_2025-08-12_at_5.12.23_PM_dbkzf8.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381218/_OP_8709_igiejq.jpg",
    height: "medium",
    category: "Academics",
  },

  // Campus images
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8497.jpg?alt=media&token=79c63cc0-4d5f-431a-99b6-f1e0ea106ecb",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8507.jpg?alt=media&token=350b968f-4f7b-4826-a5ea-0438d6d11e5d",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8537.jpg?alt=media&token=806f6375-eabe-4bea-98a9-3a74e70dce20",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8551.jpg?alt=media&token=dabedda4-44d3-4c7d-9bab-cee6a0c4a0d6",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8571.jpg?alt=media&token=c5b38f9d-e847-41b3-81f4-d01ea038a640",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8576.jpg?alt=media&token=1ae2ab97-4270-4efd-ae9b-2a7e513520eb",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8583.jpg?alt=media&token=66a6db7f-3e84-421d-9fec-cab2d6c8fc91",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8588.jpg?alt=media&token=d9d39168-32a7-4d17-a0d6-6140b632337b",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8599.jpg?alt=media&token=3d58d81f-7a5a-42ae-88f2-a86aa3763ec2",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8603.jpg?alt=media&token=4bb3f748-5c52-4840-b1b2-aa4faca8f522",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8626.jpg?alt=media&token=9ca37491-3e1b-4734-bbff-6e56a11fac87",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8629.jpg?alt=media&token=5803f335-19bd-4645-adcc-5c955a2b51cd",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8634.jpg?alt=media&token=85cb9bd1-4585-414c-8699-76cc18e7ed5f",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8636.jpg?alt=media&token=bfb051ef-2671-4d09-8919-06190080536e",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8638.jpg?alt=media&token=9bbaac0e-4170-473d-a0a4-9dca6c9ee3aa",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8644.jpg?alt=media&token=412483ae-9826-4726-bc72-65e196d05bc1",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8652.jpg?alt=media&token=9d35e7a7-7dc0-46e1-8148-6bc3a6161169",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8698.jpg?alt=media&token=62592559-9292-44b2-8df5-528ad5b3ad0f",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8730.jpg?alt=media&token=75e73691-bc7f-436d-ae15-7c745b0e6d80",
    height: "tall",
    category: "Campus",
  },

  // Sports images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381442/WhatsApp_Image_2025-08-12_at_5.58.44_PM_1_ffa58a.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381442/WhatsApp_Image_2025-08-12_at_5.58.43_PM_rizuac.jpg",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381441/WhatsApp_Image_2025-08-12_at_5.58.44_PM_fmsjc8.jpg",
    height: "tall",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381441/WhatsApp_Image_2025-08-12_at_5.58.45_PM_jqzqlx.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381382/WhatsApp_Image_2025-08-12_at_5.52.38_PM_1_ufmyie.jpg",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381381/WhatsApp_Image_2025-08-12_at_5.53.39_PM_1_vbwxms.jpg",
    height: "tall",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381379/WhatsApp_Image_2025-08-12_at_5.54.52_PM_1_txrqno.jpg",
    height: "short",
    category: "Sports",
  },
  // ////////
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381378/WhatsApp_Image_2025-08-12_at_5.55.14_PM_1_amjsfg.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8918_xq0twl.jpg",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8910_pqbba2.jpg",
    height: "tall",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753049/_OP_8846_lyifo5.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8894.jpg?alt=media&token=678d8560-1f26-44f6-9e3f-53e4f439e72e",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754754812/_OP_8688_tx5czy.jpg",
    height: "tall",
    category: "Sports",
  },
  // {
  //   src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381379/WhatsApp_Image_2025-08-12_at_5.54.52_PM_1_txrqno.jpg",
  //   height: "short",
  //   category: "Sports",
  // },
];

const categories = [
  { name: "All", images: galleryImages },
  {
    name: "Culture",
    images: galleryImages.filter((img) => img.category === "Culture"),
  },
  {
    name: "Academics",
    images: galleryImages.filter((img) => img.category === "Academics"),
  },
  {
    name: "Campus",
    images: galleryImages.filter((img) => img.category === "Campus"),
  },
  {
    name: "Sports",
    images: galleryImages.filter((img) => img.category === "Sports"),
  },
];

const Admission: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<typeof galleryImages>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753061/_OP_9310_h4qfad.jpg";

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

  // Loading effect - 3 seconds delay to ensure images are populated
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const getImages = () => {
    if (selectedCategory === "All") {
      return galleryImages;
    }
    return (
      categories.find((cat) => cat.name === selectedCategory)?.images || []
    );
  };

  const filteredImages = getImages();

  // Handle category change with loading
  const handleCategoryChange = (categoryName: string) => {
    if (categoryName === selectedCategory) return; // Don't reload if same category

    setIsLoading(true);
    setSelectedCategory(categoryName);

    // Show loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // Lightbox functions
  const openLightbox = (imageIndex: number) => {
    console.log(`lightbox:`);
    const images = getImages();
    setCurrentImages(images);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const goToNextImage = () => {
    if (currentImageIndex < currentImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        if (currentImageIndex < currentImages.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, currentImageIndex, currentImages.length]);

  console.log("Background image URL:", backgroundImage);

  return (
    <div className={styles.nisExperiencePage}>
      {/* Page Hero Section */}
      <PageHero
        backgroundImage={backgroundImage}
        title="Real Moments, Real Voices"
        subtitle="THE NIS EXPERIENCE"
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      <div className={styles.bodyContent}>
        {/* Gallery Section */}
        <div className={styles.galleryPage}>
          {/* Category Tabs - Always visible */}
          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={
                  selectedCategory === cat.name ? styles.activeTab : styles.tab
                }
                onClick={() => handleCategoryChange(cat.name)}
                disabled={isLoading} // Disable during loading
              >
                {cat.name}
              </button>
            ))}
          </div>

          {isLoading ? (
            /* Loading Spinner */
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>
                Loading{" "}
                {selectedCategory === "All" ? "Gallery" : selectedCategory}...
              </p>
            </div>
          ) : (
            /* Gallery Content */
            <div className={styles.masonryGallery}>
              {filteredImages.map((img, idx) => (
                <div
                  className={`${styles.galleryCard} ${styles[img.height]}`}
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={img.src}
                      alt="Gallery"
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.overlayContent}>
                        {/* <span className={styles.viewIcon}>👁</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Twitter-style Lightbox */}
      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              ×
            </button>

            {/* Navigation buttons */}
            {currentImageIndex > 0 && (
              <button
                className={styles.navButton + " " + styles.navPrev}
                onClick={goToPrevImage}
              >
                ‹
              </button>
            )}

            {currentImageIndex < currentImages.length - 1 && (
              <button
                className={styles.navButton + " " + styles.navNext}
                onClick={goToNextImage}
              >
                ›
              </button>
            )}

            {/* Main image */}
            <div className={styles.lightboxImageContainer}>
              <img
                src={currentImages[currentImageIndex]?.src}
                alt="Gallery"
                className={styles.lightboxImage}
              />
            </div>

            {/* Image counter */}
            <div className={styles.lightboxCounter}>
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Admission;
