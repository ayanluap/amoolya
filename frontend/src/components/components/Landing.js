import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <div className="landing" id="home">
        <div className="landing__overlay">
          <div className="container">
            <p className="prime-heading">Welcome to financial stability!</p>
            <p className="second-heading">
              A way to become a Crazy Rich Asian.
            </p>
            <Link to="/about" className="btn btn--yellow">
              Know More
            </Link>
            <svg
              className="landing__down-caret"
              width="26"
              height="17"
              viewBox="0 0 26 17"
              fill="none"
            >
              <path
                d="M2 1L13.3028 14L24 1"
                stroke="#DBEE69"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="landing__showcase ">
        <div className="container">
          <h1 className="h1">
            Integrated Advice and Solution for a wealthy Life
          </h1>
          <p className="u-text">
            Amoolya group of consultants, we believe everyone deserves to be
            wealthy, with unmistakable advices delivered by advisors who truly
            care for their consumers life.
            <br />
            By putting your interests first, we can achieve more together. We
            bring transparent, evidence-based advice to help our clients
            safeguard their financial futures and to fulfill their dreams.
            <br />
            Our day-to-day work is focused on addressing and solving our
            client’s most pressing tax, estate and financial concerns. We help
            our clients take appropriate actions to accomplish what's most
            important for their economic betterment. <br />
            Amoolya’s customized advice and collaborative approach is focuses on
            five key planning areas.
          </p>
        </div>
      </div>

      <div className="landing__content container">
        <div className="card">
          <div className="card__img u-center u-mb-2">
            <i class="fas fa-rupee-sign fa-7x"></i>
          </div>
          <div className="card__title h3 u-center">Enhancing wealth</div>
          <div className="card__text u-text u-center">
            Enhancing wealth by helping you make smarter financial decisions.
          </div>
        </div>
        <div className="card">
          <div className="card__img u-center u-mb-2">
            <i class="fas fa-hands-helping fa-7x"></i>
          </div>
          <div className="card__title h3 u-center">Helping you</div>
          <div className="card__text u-text u-center">
            Helping you minimize income and estate taxes over the course of your
            lifetime.
          </div>
        </div>
        <div className="card">
          <div className="card__img u-center u-mb-2">
            <i class="fas fa-user-shield fa-7x"></i>
          </div>
          <div className="card__title h3 u-center">Ensure your protection</div>
          <div className="card__text u-text u-center">
            Ensuring your assets are protected from unwelcome third parties.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
