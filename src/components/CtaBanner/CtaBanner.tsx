import React, { useId } from "react";
import "./CtaBanner.css";
import { ChevronRightRedIconComponent } from "../Icons";

export type CtaBannerProps = {
  title?: React.ReactNode;
  body?: string;
  ctaLabel?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  containerMaxWidth?: number; // optional: override internal max width
};

const ArrowSquareRight: React.FC<{ className?: string; title?: string }> = ({
  className,
  title,
}) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden={title ? undefined : true}
    role="img"
  >
    {title ? <title>{title}</title> : null}
    <rect
      x="1"
      y="1"
      width="18"
      height="18"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M6 10h8m-3-4 4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CtaBanner: React.FC<CtaBannerProps> = ({
  title = (
    <>
      Join
      <br />
      the NIS Family
    </>
  ),
  body = "NIS is simply the best provider of international education in Port-Harcourt. We are now receiving applications for the 2025/2026 academic session. There has never been a better time to enroll your children at NIS. Don’t wait too long. Visit our school; send us an email; or give us a call to get started! We’d be happy to put you through!",
  ctaLabel = "Apply",
  href,
  target,
  onClick,
  className,
  containerMaxWidth = 1152,
}) => {
  const titleId = useId();

  const ButtonTag = (href ? "a" : "button") as "a" | "button";

  const buttonProps =
    ButtonTag === "a" ? { href, target } : { type: "button" as const, onClick };

  return (
    <section
      className={`nis-cta ${className ?? ""}`}
      aria-labelledby={titleId}
      style={{ ["--container-max-w" as any]: `${containerMaxWidth}px` }}
    >
      <div className="nis-cta__inner">
        <h2 id={titleId} className="nis-cta__title">
          {title}
        </h2>

        <p className="nis-cta__body">{body}</p>

        <ButtonTag
          {...buttonProps}
          className="nis-cta__button"
          aria-label={ctaLabel}
        >
          <span className="nis-cta__button-label">{ctaLabel}</span>
          <ChevronRightRedIconComponent
            style={{ width: "20px", height: "20px" }}
          />
        </ButtonTag>
      </div>
    </section>
  );
};

export default CtaBanner;
