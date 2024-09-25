import React from "react";
import TermsImg from "../../assets/Terms_Page/terms-hero-sec-img.png";

function Hero() {
  return (
    <div className="terms-hero-section-wrapper">
      <section className="terms-hero-sec-text">
        <h1 className="terms-hero-sec-text-1">
          Policies & Agreements: Payments, Refunds, and Privacy
        </h1>
        <p className="terms-hero-sec-text-2">
          Review our policies on payments, refunds, and privacy to understand
          your rights, transaction guidelines, and data protection practices.
        </p>
      </section>
      <section className="terms-hero-sec-img">
        <img src={TermsImg} alt="" />
      </section>
    </div>
  );
}

export default Hero;
