import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.css";
import { LogoTransparentIcon } from "../Icons";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (section: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const handleNavigate = (section: string) => {
    onNavigate?.(section);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.menuContainer}>
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <div className={styles.closeLine}></div>
          <div className={styles.closeLine}></div>
        </button>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <LogoTransparentIcon className={styles.logo} />
        </div>

        {/* Navigation Links */}
        <nav className={styles.navigation}>
          <Link to="/" className={styles.navItem} onClick={onClose}>
            Home
          </Link>
          <Link to="/about" className={styles.navItem} onClick={onClose}>
            About NIS
          </Link>
          <Link to="/admission" className={styles.navItem} onClick={onClose}>
            Admissions
          </Link>
          <Link
            to="/nis-experience"
            className={styles.navItem}
            onClick={onClose}
          >
            NIS Experience
          </Link>
          <button
            className={styles.navItem}
            onClick={() => handleNavigate("virtual-tour")}
          >
            Virtual Tour
          </button>
          <button
            className={styles.navItem}
            onClick={() => handleNavigate("contact-us")}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavigationMenu;
