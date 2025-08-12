import React from "react";
import FaqSection from "./FaqSection";

const FaqSectionExample: React.FC = () => {
  return (
    <FaqSection
      eyebrow="FAQ"
      title={
        <>
          Answers for
          <br />
          Your Questions
        </>
      }
      imageSrc="https://res.cloudinary.com/dgslbycvk/image/upload/v1754808362/Photo_14_akjrad.png"
      imageAlt="Students on campus"
      items={[]}
      defaultOpenId="contact-teachers"
    />
  );
};

export default FaqSectionExample;
