import React from "react";
import styles from "./CategoryGrid.module.css";
import { CategoryCard } from "../../types";

interface CategoryGridProps {
  categories: CategoryCard[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section className={styles.categoryGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.categoryCard}
              style={{ backgroundImage: `url(${category.backgroundImage})` }}
            >
              <div className={styles.cardOverlay}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
