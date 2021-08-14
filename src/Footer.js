import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="footer__mainlink" href="#">Questions? Contact us</a>
      <div className="footer__divs">
        <div className="footer__links">
          <a href="#">FAQ</a>
          <a href="#">Investor Relation</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="footer__links">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preference</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="footer__links">
          <a href="#">Account</a>
          <a href="#">Ways to watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Netflix Originals</a>
        </div>
        <div className="footer__links">
          <a href="#">Media Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
