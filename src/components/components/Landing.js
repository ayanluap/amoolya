import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing" id="home">
      <div className="landing__overlay">
        <div className="container">
          <p className="prime-heading">Welcome to financial clarity.</p>
          <p className="second-heading">Welcome to a better way forward.</p>
          <Link to="/" className="btn">
            Know More
          </Link>
          <svg
            className="landing__down-caret"
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
          >
            <path d="M2 1L13.3028 14L24 1" stroke="#DBEE69" stroke-width="3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landing;
