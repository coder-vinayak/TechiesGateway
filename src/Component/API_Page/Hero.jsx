import React from "react";
import PanelImg1 from "../../assets/API_page/panel-img1.png";
import PanelImg2 from "../../assets/API_page/panel-img2.png";

function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hw-sec-1">
        <div className="hw-sec-1-text">
          <p className="hw-sec-1-text-1">
            API Integration: Automate Your Social Media Growth⚡
          </p>
          <p className="hw-sec-1-text-2">Power Up Your Business with</p>
          <p className="hw-sec-1-text-2-1">
            Seamless <span>API Integration</span>
          </p>

          <p className="hw-sec-1-text-3">
            Automate and scale your social media services with seamless API
            integration.
          </p>
          <p className="hw-sec-1-text-3-1">
            Perfect for resellers and businesses!
          </p>
        </div>

        <div className="hw-sec-1-btn">
          <button className="hw-sec-1-btn1">Join as a reseller</button>
          <button className="hw-sec-1-btn2">Sign up </button>
        </div>
      </section>

      <section className="hw-sec-2">
        <img src={PanelImg1} alt="smm-panel-image" className="hw-sec-2-img-1" />
        <img src={PanelImg2} alt="smm-panel-image" className="hw-sec-2-img-2" />
      </section>
    </div>
  );
}

export default Hero;
