import React from "react";
import { Link } from "react-router-dom";
import twitterIcon from "../../assets/API_page/twitter.png";
import facebookIcon from "../../assets/API_page/facebook.png";
import instagramIcon from "../../assets/API_page/instagram.png";
import linkedInIcon from "../../assets/API_page/linkedin.png";

function Footer() {
  return (
    <footer className="footer-component-wrapper">
      <section className="fcw-section-top">
        <div className="fcw-st-section-1">
          <section className="fwc-st-s1-head">
            <Link to="/">
              <p>
                SMM
                <span>Panel</span>
              </p>
            </Link>
          </section>
          <section className="fwc-st-s1-body">
            <p>
              Boost your social media with our reliable SMM panel. Fast, secure,
              and affordable services for followers, likes, views, and more.
              Perfect for businesses, influencers, and resellers. 24/7 support
              available!
            </p>
          </section>
          <section className="fwc-st-s1-foot">
            <Link>
              <img
                src={twitterIcon}
                alt="twitter/x-icon"
                className="footer-social-handle-icon"
              />
            </Link>
            <Link>
              <img
                src={facebookIcon}
                alt="facebook/meta-icon"
                className="footer-social-handle-icon"
              />
            </Link>
            <Link>
              <img
                src={instagramIcon}
                alt="instagram-icon"
                className="footer-social-handle-icon"
              />
            </Link>
            <Link>
              <img
                src={linkedInIcon}
                alt="linkedin-icon"
                className="footer-social-handle-icon"
              />
            </Link>
          </section>
        </div>
        <div className="fcw-st-section-2">
          <section className="fcw-st-s2-quick-link">
            <h4>Quick Link</h4>
            <Link>
              <p>Service</p>
            </Link>
            <Link>
              <p>Api Integration</p>
            </Link>
            <Link>
              <p>Terms</p>
            </Link>
            <Link>
              <p>Reseller</p>
            </Link>
          </section>

          <section className="fcw-st-s2-social-handles-grow">
            <h4>Social Handles Grow</h4>
            <Link>
              <p>Instagram</p>
            </Link>
            <Link>
              <p>Facebook</p>
            </Link>
            <Link>
              <p>LinkedIn</p>
            </Link>
            <Link>
              <p>X</p>
            </Link>
          </section>
          <section className="fcw-st-s2-Legal">
            <h4>Legal</h4>
            <Link>
              <p>Refund Policy</p>
            </Link>
            <Link>
              <p>FAQ</p>
            </Link>
            <Link>
              <p>Privacy Policy</p>
            </Link>
            <Link>
              <p>Terms and Conditions</p>
            </Link>
          </section>
        </div>
      </section>

      <section className="fcw-section-bottom">
        <hr />
        <p>© Copyright 2022, All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
