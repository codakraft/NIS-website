import React from "react";
import styles from "./RelatedPrograms.module.css";

interface Program {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Junior School",
    description:
      "Our Junior schools are for three years after which students take their senior certificate examination as we are an accredited by the west African examination council.",
    imageUrl:
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753050/_OP_8859_htwgyz.jpg",
    href: "/admission/junior-school",
  },
  {
    id: 2,
    title: "High School",
    description:
      "Our High schools are for three years after which students take their senior certificate examination as we are an accredited by the west African examination council.",
    imageUrl:
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753050/_OP_8857_ha80da.jpg",
    href: "/admission/high-school",
  },
  {
    id: 3,
    title: "Sixth Form",
    description:
      "Our Sixth Form is designed to prepare students for university and beyond, offering a rigorous curriculum and a supportive environment.",
    imageUrl:
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753045/_OP_8751_kymx7t.jpg",
    href: "/admission/sixth-form",
  },
];

const RelatedPrograms: React.FC = () => {
  return (
    <section className={styles.relatedSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Related programs</h2>

        <div className={styles.programsGrid}>
          {programs.map((program) => (
            <div key={program.id} className={styles.programCard}>
              <div className={styles.imageContainer}>
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className={styles.programImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.programTitle}>{program.title}</h3>
                <p className={styles.programDescription}>
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPrograms;
