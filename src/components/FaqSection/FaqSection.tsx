import React, { useId, useMemo, useState } from "react";
import type { FaqItem, FaqSectionProps } from "./types";
import "./FaqSection.css";

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M7 17L17 7M10 7h7v7" />
  </svg>
);

const FaqSection: React.FC<FaqSectionProps> = ({
  eyebrow = "FAQ",
  title = (
    <>
      Answers for
      <br />
      Your Questions
    </>
  ),
  imageSrc = "https://res.cloudinary.com/dgslbycvk/image/upload/v1754808362/Photo_14_akjrad.png",
  imageAlt = "Students on campus",
  items,
  defaultOpenId,
  className,
}) => {
  const defaultItems: FaqItem[] = useMemo(
    () => [
      { id: "tour", question: "How can I schedule a campus tour?" },
      {
        id: "contact-teachers",
        question: "How can I contact teachers directly?",
        answer:
          "You can reach out to teachers via email or through the school's website communication portal. If you meet any challenge, feel free to contact our CS.",
        href: "#",
      },
      { id: "dress-code", question: "Is there a school dress code?" },
      { id: "enrollment", question: "What is the enrollment process?" },
      {
        id: "extracurricular",
        question: "What extracurricular activities are available?",
      },
    ],
    []
  );

  const allItems = items && items.length ? items : defaultItems;
  const initialOpen = defaultOpenId ?? "contact-teachers";
  const [openId, setOpenId] = useState<string | null>(initialOpen);

  const makeIds = (id: string) => ({
    buttonId: `faq-btn-${id}`,
    panelId: `faq-panel-${id}`,
  });

  const onToggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section className={`faq ${className ?? ""}`} aria-labelledby="faq-title">
      <div className="wrapper">
        <div className="header">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h1 id="faq-title" className="title">
              {title}
            </h1>
          </div>
        </div>

        <div className="panel">
          <div className="left">
            {allItems.map((it, idx) => {
              const { buttonId, panelId } = makeIds(it.id);
              const isOpen = openId === it.id;
              return (
                <div className="item" key={it.id}>
                  <div className="row">
                    <div className="accent" aria-hidden />
                    <button
                      id={buttonId}
                      className="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => onToggle(it.id)}
                      type="button"
                    >
                      {it.question}
                    </button>
                    {it.href ? (
                      <a
                        className="iconLink"
                        href={it.href}
                        aria-label="Open link"
                      >
                        <ArrowUpRightIcon />
                      </a>
                    ) : null}
                  </div>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="content"
                    hidden={!isOpen}
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="contentInner">
                      {isOpen && it.answer ? (
                        <p className="answer">{it.answer}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* divider */}
                  {idx !== allItems.length - 1 ? (
                    <div className="divider" />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="right">
            <div className="imageWrap">
              <img className="image" src={imageSrc} alt={imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
