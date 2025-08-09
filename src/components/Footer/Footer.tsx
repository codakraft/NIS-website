import React from "react";
import styles from "./Footer.module.css";
import {
  FooterLineIcon,
  LocationIconComponent,
  PhoneIconComponent,
  FacebookIconComponent,
  TwitterIconComponent,
  LinkedInIconComponent,
  InstagramIconComponent,
} from "../Icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>School Address</h4>
          <FooterLineIcon
            style={{
              width: "50%",
              height: "100%",
              marginBottom: 24,
            }}
          />
          <div className={styles.footerAddress}>
            <LocationIconComponent
              style={{ width: "24px", height: "24px", marginRight: 8 }}
            />
            <div className={styles.addressText}>
              Portharcourt,
              <br />
              Rivers State, Nigeria
            </div>
          </div>
          <div className={styles.phoneNumber}>
            <PhoneIconComponent
              style={{ width: "24px", height: "24px", marginRight: 8 }}
            />
            <div className={styles.phoneText}>(+234) 7081888098</div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Contact Emails</h4>
          <FooterLineIcon
            style={{
              width: "50%",
              height: "100%",
              marginBottom: 24,
            }}
          />
          <div className={styles.footerEmails}>
            <p>admissions@nis-edu.com</p>
            <p>schooladmin@nisng.com</p>
            <p>careers@nis-edu.com</p>
            <p>Virtual Classroom</p>
            <p>Peer Learning</p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Follow Us</h4>
          <FooterLineIcon
            style={{
              width: "50%",
              height: "100%",
              marginBottom: 24,
            }}
          />
          <div className={styles.socialLinks}>
            <button className={styles.socialLink} aria-label="Twitter">
              <TwitterIconComponent style={{ width: "24px", height: "24px" }} />
            </button>
            <button className={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIconComponent
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <button className={styles.socialLink} aria-label="Instagram">
              <InstagramIconComponent
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <button className={styles.socialLink} aria-label="Facebook">
              <FacebookIconComponent
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <FooterLineIcon
            style={{
              width: "50%",
              height: "100%",
              marginBottom: 24,
            }}
          />
          <div className={styles.footerLinks}>
            <p className={styles.footerLink}>Primary School</p>
            <p className={styles.footerLink}>Junior School</p>
            <p className={styles.footerLink}>High School</p>
            <p className={styles.footerLink}>Sixth-Form</p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © 2025 Norwegian International School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
