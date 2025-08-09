import React from "react";
import styles from "./Statistics.module.css";
import { Statistic } from "../../types";

interface StatisticsProps {
  title: string;
  statistics: Statistic[];
  libraryImage: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  title,
  statistics,
  libraryImage,
}) => {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        <div className={styles.statisticsContent}>
          <div className={styles.statisticsLeft}>
            <h2 className={styles.statisticsTitle}>{title}</h2>
            <div className={styles.statisticsGrid}>
              {statistics.map((stat, index) => (
                <div key={index} className={styles.statisticItem}>
                  <div
                    className={styles.statisticNumber}
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className={styles.statisticLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.statisticsRight}>
            <div className={styles.imageContainer}>
              <img
                src={libraryImage}
                alt="Library study area"
                className={styles.libraryImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
