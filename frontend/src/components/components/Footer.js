import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__left">
          <Link to="/" className="footer__link">
            Privacy Policy
          </Link>
          <Link to="/" className="footer__link">
            Terms & Conditions
          </Link>
          <Link to="/" className="footer__link">
            Disclaimer
          </Link>
        </div>
        <div className="footer__right">
          <a
            href="https://www.facebook.com/amoolyagroupofconsultants/"
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/Amoolyagroupof1?s=08"
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://instagram.com/amoolyagroup?igshid=tttp2883vb5a"
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/amoolya-group-of-consultants"
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__text">
          Copyright © 2021 Amoolya - The group of consultants All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
