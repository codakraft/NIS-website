import React from "react";
import styles from "./CompulsorySubjects.module.css";
import {
  SubjectIcon1Component,
  SubjectIcon2Component,
  SubjectIcon3Component,
  SubjectIcon4Component,
  SubjectIcon5Component,
  SubjectIcon6Component,
} from "../Icons";

interface Subject {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const subjects: Subject[] = [
  {
    id: 1,
    title: "English Language",
    description:
      "Develops reading, writing, speaking, and listening for clear, confident communication.",
    icon: SubjectIcon1Component,
  },
  {
    id: 2,
    title: "Mathematics",
    description:
      "Builds numeracy, problem-solving, and logical reasoning using real-world math.",
    icon: SubjectIcon2Component,
  },
  {
    id: 3,
    title: "Geography",
    description:
      "Explores places, people, maps, and environments to understand our changing world.",
    icon: SubjectIcon3Component,
  },
  {
    id: 4,
    title: "Science",
    description:
      "Investigates living things, materials, and forces through inquiry and experiments.",
    icon: SubjectIcon4Component,
  },
  {
    id: 5,
    title: "ICT",
    description:
      "Introduces digital literacy, keyboarding, and safe, creative use of technology.",
    icon: SubjectIcon5Component,
  },
  {
    id: 6,
    title: "Citizenship",
    description:
      "Encourages responsibility, values, and community participation in everyday life.",
    icon: SubjectIcon6Component,
  },
  {
    id: 7,
    title: "Music",
    description:
      "Cultivates rhythm, singing, and musical expression through listening and performance.",
    icon: SubjectIcon6Component,
  },
  {
    id: 8,
    title: "Arts & Design",
    description:
      "Develops creativity and visual skills through drawing, painting, and making.",
    icon: SubjectIcon6Component,
  },
  {
    id: 9,
    title: "Critical Thinking",
    description:
      "Strengthens analysis, reasoning, and decision-making across subjects.",
    icon: SubjectIcon6Component,
  },
  {
    id: 10,
    title: "History",
    description:
      "Learns about people and events of the past to understand societies today.",
    icon: SubjectIcon6Component,
  },
];

const CompulsorySubjects: React.FC = () => {
  return (
    <section className={styles.subjectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>SUBJECTS</p>
          <h2 className={styles.sectionTitle}>Compulsory subjects</h2>
        </div>

        <div className={styles.subjectsGrid}>
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <div key={subject.id} className={styles.subjectCard}>
                <IconComponent style={{ width: "80px", height: "80px" }} />
                {/* <div className={styles.iconContainer}>
                </div> */}
                <div className={styles.subjectContent}>
                  <h3 className={styles.subjectTitle}>{subject.title}</h3>
                  <p className={styles.subjectDescription}>
                    {subject.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompulsorySubjects;
