import React from "react";
import {
  NISExperienceSectionProps,
  defaultExperienceCards,
} from "../../types/nisExperience";
import ExperienceCard from "../ExperienceCard";
import styles from "./NISExperience.module.css";

/**
 * NISExperience Section Component
 *
 * A comprehensive section component that displays "THE NIS EXPERIENCE" with
 * a responsive grid layout. Features a sticky header on desktop and a 2x2
 * grid of experience cards with hover effects and accessibility support.
 */
const NISExperience: React.FC<NISExperienceSectionProps> = ({
  cards = defaultExperienceCards,
  className = "",
  onCardClick,
}) => {
  const handleCardClick = (cardId: string) => {
    console.log(`Experience card clicked: ${cardId}`);
    onCardClick?.(cardId);
  };

  return (
    <section className={`${styles.nisExperienceSection} ${className}`}>
      <div className={styles.nisExperienceContainer}>
        <header className={styles.nisExperienceHeader}>
          <p className={styles.nisExperienceLabel}>THE NIS EXPERIENCE</p>
          <h2 className={styles.nisExperienceTitle}>
            Life Beyond
            <br />
            the Classroom
          </h2>
        </header>

        <div className={styles.experienceGrid} role="grid">
          {cards.map((card, index) => (
            <ExperienceCard
              key={card.id}
              {...card}
              onClick={() => handleCardClick(card.id)}
              className={styles.gridItem}
              aria-posinset={index + 1}
              aria-setsize={cards.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NISExperience;
