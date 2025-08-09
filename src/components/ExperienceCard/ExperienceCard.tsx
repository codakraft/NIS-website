import React from "react";
import { ExperienceCardProps } from "../../types/nisExperience";
import styles from "./ExperienceCard.module.css";

/**
 * ExperienceCard Component
 *
 * A reusable card component for displaying NIS experience items with image overlay
 * and hover effects. Follows accessibility best practices and responsive design.
 */
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  className = "",
  onClick,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={`${styles.experienceCard} ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Learn more about ${title}` : undefined}
    >
      <div className={styles.cardImageContainer}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className={styles.cardImage}
          loading="lazy"
        />
        <div className={styles.cardOverlay}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardSubtitle}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
