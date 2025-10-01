import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FooterLineIcon,
  LocationIconComponent,
  PhoneIconComponent,
  FacebookIconComponent,
  TwitterIconComponent,
  InstagramIconComponent,
  YouTubeIconComponent,
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
              11 Rotimi Amaechi Drive GRA Phase 3,
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
            <p>schooladmin@norwegianinternationalschools.com</p>
            <p>admissions@norwegianinternationalschools.com</p>
            <p>careers@norwegianinternationalschools.com</p>
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
            <button
              className={styles.socialLink}
              aria-label="Twitter"
              onClick={() =>
                window.open("https://x.com/nisngPHC?mx=2", "_blank")
              }
            >
              <TwitterIconComponent style={{ width: "24px", height: "24px" }} />
            </button>
            <button
              className={styles.socialLink}
              aria-label="YouTube"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=nc2kiHuoQxc&feature=youtu.be",
                  "_blank"
                )
              }
            >
              <YouTubeIconComponent style={{ width: "24px", height: "24px" }} />
            </button>
            <button
              className={styles.socialLink}
              aria-label="Instagram"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/norwegianinternationalschool/",
                  "_blank"
                )
              }
            >
              <InstagramIconComponent
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <button
              className={styles.socialLink}
              aria-label="Facebook"
              onClick={() =>
                window.open("https://www.facebook.com/NISPHC", "_blank")
              }
            >
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
            <Link to="#" className={styles.footerLink}>
              Early Years Foundation School (EYFS)
            </Link>
            <Link to="/admission/primary-school" className={styles.footerLink}>
              Primary School (Key Stage 1-2)
            </Link>
            <p className={styles.footerLink}>Secondary (Key Stage 2 and 4)</p>
            <p className={styles.footerLink}>⁠⁠Lower/Upper Six (Key Stage 5)</p>
            {/* <p className={styles.footerLink}>Sixth-Form</p> */}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Our Affiliations</h4>
          <FooterLineIcon
            style={{
              width: "50%",
              height: "100%",
              marginBottom: 24,
            }}
          />
          <div className={styles.affiliationsContainer}>
            <img
              src="https://norwegianinternationalschools.com/wp-content/uploads/2024/06/affiliations-new-Main.png"
              alt="School Affiliations"
              className={styles.affiliationsImage}
              width="497"
              height="199"
            />
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
