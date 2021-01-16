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
            TnC
          </Link>
        </div>
        <div className="footer__right">
          <a href="#" target="_blank" className="footer__link">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" target="_blank" className="footer__link">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" target="_blank" className="footer__link">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" target="_blank" className="footer__link">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <p className="footer__text">
        <div className="container">
          Copyright © 2021 Amoolya - The group of consultants All rights
          reserved
        </div>
      </p>
    </div>
  );
};

export default Footer;
