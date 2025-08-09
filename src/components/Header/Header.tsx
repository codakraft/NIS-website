import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { NavigationItem } from "../../types";

interface HeaderProps {
  navigationItems: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.crest}>NIS</div>
            </div>
            <span className={styles.schoolName}>NORWEGIAN INT'L SCHOOL</span>
          </div>
        </div>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
        >
          <ul className={styles.navList}>
            {navigationItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                {item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className={`${styles.navLink} ${
                      styles[`navLink--${item.color}`]
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${
                      styles[`navLink--${item.color}`]
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
