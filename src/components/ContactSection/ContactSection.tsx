import React, { useId, useMemo, useState } from "react";
import styles from "./ContactSection.module.css";
import {
  EmailIconComponent,
  WhatsAppIconComponent,
  PhoneRedIconComponent,
  ChevronRightIconComponent,
} from "../Icons";

// Inline SVG Icons
const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="m4 7 8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.5 3.5h2l2 4-2 1.5a12.5 12.5 0 0 0 6.5 6.5L16 13.5l4 2v2a2 2 0 0 1-2 2c-8 0-14-6-14-14a2 2 0 0 1 2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsappIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 3a9 9 0 0 0-7.74 13.5L3 21l4.65-1.22A9 9 0 1 0 12 3Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8.5 8.5c.5 2 3 5 5 5 .5 0 1-.2 1.5-.5l1.5 1.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronRightIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export interface ContactSectionProps {
  onSubmit?: (data: {
    fullName: string;
    phone: string;
    email: string;
    message: string;
    subscribe: boolean;
  }) => Promise<void> | void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const messageId = useId();
  const subscribeId = useId();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = useMemo(
    () =>
      (values: {
        fullName: string;
        phone: string;
        email: string;
        message: string;
      }) => {
        const e: Record<string, string> = {};
        if (!values.fullName.trim()) e.fullName = "Full Name is required";
        if (!values.phone.trim()) e.phone = "Phone Number is required";
        if (!values.email.trim()) e.email = "Email Address is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
          e.email = "Enter a valid email";
        if (!values.message.trim()) e.message = "Please enter a message";
        return e;
      },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    const eMap = validate({ fullName, phone, email, message });
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    try {
      setSubmitting(true);
      await new Promise((res) => setTimeout(res, 900));
      if (onSubmit) {
        await onSubmit({ fullName, phone, email, message, subscribe });
      }
      setSuccess("Your message has been sent successfully.");
      setFullName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setSubscribe(false);
      setErrors({});
    } catch (err) {
      setSuccess(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        {/* Heading occupies row 1, left column */}
        <h2 id="contact-heading" className={styles.title}>
          Send Us a Message
        </h2>

        {/* Form occupies row 2, left column */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor={nameId} className={styles.label}>
              Full Name
            </label>
            <input
              id={nameId}
              className={styles.input}
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? nameId + "-error" : undefined}
            />
            {errors.fullName && (
              <div id={nameId + "-error"} className={styles.errorText}>
                {errors.fullName}
              </div>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor={phoneId} className={styles.label}>
              Phone Number
            </label>
            <input
              id={phoneId}
              className={styles.input}
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? phoneId + "-error" : undefined}
            />
            {errors.phone && (
              <div id={phoneId + "-error"} className={styles.errorText}>
                {errors.phone}
              </div>
            )}
          </div>

          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor={emailId} className={styles.label}>
              Email Address
            </label>
            <input
              id={emailId}
              className={styles.input}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? emailId + "-error" : undefined}
            />
            {errors.email && (
              <div id={emailId + "-error"} className={styles.errorText}>
                {errors.email}
              </div>
            )}
          </div>

          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor={messageId} className={styles.label}>
              Your Message
            </label>
            <textarea
              id={messageId}
              className={styles.textarea}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? messageId + "-error" : undefined
              }
            />
            {errors.message && (
              <div id={messageId + "-error"} className={styles.errorText}>
                {errors.message}
              </div>
            )}
          </div>

          <div className={styles.checkboxWrap}>
            <input
              id={subscribeId}
              className={styles.checkbox}
              type="checkbox"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
            />
            <label htmlFor={subscribeId} className={styles.newsletterLabel}>
              Subscribe me to{" "}
              <a href="#newsletter" className={styles.inlineLink}>
                School Newsletter
              </a>
            </label>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.button}
              type="submit"
              disabled={submitting}
            >
              <span className={styles.btnText}>
                {submitting ? "Sending…" : "Send Message"}
              </span>
              <span className={styles.btnIcon} aria-hidden="true">
                <ChevronRightIconComponent />
              </span>
            </button>
          </div>

          {success && (
            <div
              aria-live="polite"
              className={`${styles.successText} ${styles.fieldFull}`}
            >
              {success}
            </div>
          )}
        </form>

        {/* Card occupies row 2, right column */}
        <aside className={styles.card} aria-label="Contact information">
          <h3 className={styles.cardTitle}>We’re Here to Help</h3>
          <p className={styles.cardBody}>
            Reach us by phone, email, or in person — whatever works best for
            you.
          </p>
          <div className={styles.hr} />

          <div className={styles.row}>
            {/* <MailIcon className={styles.icon} /> */}
            <EmailIconComponent className={styles.icon} />
            <div>
              <div>admissions@nis-edu.com</div>
              <div>schooladmin@nising.com</div>
              <div>careers@nis-edu.com</div>
            </div>
          </div>

          <div className={styles.row}>
            <PhoneRedIconComponent className={styles.icon} />
            <div>(+234) 7081888098</div>
          </div>

          <div className={styles.hr} />

          <div className={styles.row}>
            <WhatsAppIconComponent className={styles.icon} />
            <a href="#whatsapp" className={styles.cardLink}>
              Got a question? Let’s chat.
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
