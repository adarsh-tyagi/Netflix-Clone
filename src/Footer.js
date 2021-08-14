import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="footer__mainlink" href="#">Questions? Contact us</a>
      <div className="footer__divs">
        <div className="footer__links">
          <a>FAQ</a>
          <a>Investor Relation</a>
          <a>Privacy</a>
          <a>Speed Test</a>
        </div>
        <div className="footer__links">
          <a>Help Center</a>
          <a>Jobs</a>
          <a>Cookie Preference</a>
          <a>Legal Notices</a>
        </div>
        <div className="footer__links">
          <a>Account</a>
          <a>Ways to watch</a>
          <a>Corporate Information</a>
          <a>Netflix Originals</a>
        </div>
        <div className="footer__links">
          <a>Media Center</a>
          <a>Terms of Use</a>
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
