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
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753061/_OP_9309_fdqvmd.jpg",
    height: "tall",
    category: "Classroom",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753057/_OP_8989_bnamas.jpg",
    height: "medium",
    category: "Classroom",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753054/_OP_8928_pvfilt.jpg",
    height: "short",
    category: "Classroom",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753056/_OP_9001_gj0bek.jpg",
    height: "tall",
    category: "Classroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(13).png?alt=media&token=561796d2-8060-451a-b122-136a45aefeec",
    height: "medium",
    category: "Classroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(2).png?alt=media&token=7b4d225c-3f03-414e-abf4-52e7f3f95e6d",
    height: "short",
    category: "Classroom",
  },

  // Dining/School life images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753060/_OP_9279_indxqb.jpg",
    height: "medium",
    category: "Dining",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8918_xq0twl.jpg",
    height: "tall",
    category: "Dining",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(4).png?alt=media&token=add4732f-e5b4-4b8d-b5b1-afce4e99c1f8",
    height: "short",
    category: "Dining",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(3).png?alt=media&token=b738fcd1-6daf-40f0-b09f-8a80f1bc8426",
    height: "medium",
    category: "Dining",
  },

  // Events/Activities images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753047/_OP_8753_lycn8p.jpg",
    height: "tall",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753045/_OP_8730_gjlxlv.jpg",
    height: "short",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753050/_OP_8859_htwgyz.jpg",
    height: "medium",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753050/_OP_8857_ha80da.jpg",
    height: "tall",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753045/_OP_8751_kymx7t.jpg",
    height: "short",
    category: "Events",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(9).png?alt=media&token=15311dec-adcf-48bd-b9ec-09c1d75ef48c",
    height: "medium",
    category: "Events",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(10).png?alt=media&token=6b5fc6c1-ddba-4c3a-8e1e-2554fa0d6e7f",
    height: "tall",
    category: "Events",
  },

  // Additional school images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754808362/Photo_14_akjrad.png",
    height: "short",
    category: "Classroom",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754996436/Photo_15_osmuhx.png",
    height: "medium",
    category: "Classroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(5).png?alt=media&token=ae24b8ca-1fcf-43d7-9ad3-2e9c167ece19",
    height: "tall",
    category: "Events",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Rectangle%209.png?alt=media&token=616ceba0-2547-454a-a0b0-2fd10500754a",
    height: "short",
    category: "Dining",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Photo%20(11).png?alt=media&token=4074358e-da32-4e67-9a2d-1e3e52d26cc6",
    height: "medium",
    category: "Events",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Rectangle%209%20(1).png?alt=media&token=8268ce0d-82d2-42ca-a7c2-1147d6bf39ba",
    height: "tall",
    category: "Classroom",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Heading%20(1).png?alt=media&token=bff59766-ec7d-4296-9491-4806798ad9fb",
    height: "short",
    category: "Events",
  },
];

const categories = [
  { name: "Culture", images: galleryImages },
  {
    name: "Academics",
    images: galleryImages.filter((img) => img.category === "Classroom"),
  },
  {
    name: "Campus",
    images: galleryImages.filter((img) => img.category === "Dining"),
  },
  {
    name: "Sports",
    images: galleryImages.filter((img) => img.category === "Events"),
  },
];

const Admission: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const getImages = () => {
    if (selectedCategory === "All") {
      return galleryImages;
    }
    return (
      categories.find((cat) => cat.name === selectedCategory)?.images || []
    );
  };

  const filteredImages = getImages();

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
          {/* <h1 className={styles.galleryTitle}>Gallery</h1> */}
          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={
                  selectedCategory === cat.name ? styles.activeTab : styles.tab
                }
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className={styles.masonryGallery}>
            {filteredImages.map((img, idx) => (
              <div
                className={`${styles.galleryCard} ${styles[img.height]}`}
                key={idx}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={img.src}
                    alt="Gallery"
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.viewIcon}>👁</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Admission;
