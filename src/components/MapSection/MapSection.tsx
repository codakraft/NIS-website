import React from "react";
import styles from "./MapSection.module.css";

interface MapSectionProps {
  title?: string;
  place?: string; // full address or place query
}

// Simple Google Maps embed via iframe (no API key needed)
// Replace the query with the exact place you want to highlight.
const MapSection: React.FC<MapSectionProps> = ({
  title = "Find Us on the Map",
  place = "Norwegian International School Port Harcourt",
}) => {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    place
  )}&output=embed`;
  return (
    <section className={styles.mapSection} aria-labelledby="map-heading">
      <div className={styles.wrapper}>
        {/* <h3 id="map-heading" className={styles.title}>
          {title}
        </h3> */}
        <div className={styles.mapContainer}>
          <iframe
            className={styles.iframe}
            src={src}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
