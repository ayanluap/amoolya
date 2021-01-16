import React from 'react';
import Layout from '../layouts/Layout';
import abt1 from '../../assets/about1.jpg';
import abt2 from '../../assets/about2.jpg';

const About = () => {
  return (
    <Layout>
      <div className="section__header about">
        <div className="about__overlay"></div>
      </div>

      <div className="about__showcase">
        <div className="container">
          <h1 className="h1">This is our story.</h1>
          <p className="u-text">
            What started as a family business idea in 2015 has grown into a
            trusted advisor source for many throughout California and several
            other states. We built our firm on the belief that everyone deserves
            better and we wholeheartedly believe in always putting our clients’
            interests first to achieve more together. <br />
            We are a member firm of{' '}
            <a
              href="https://buckinghamstrategicpartners.com/"
              className="u-link"
              target="_blank"
            >
              Buckingham Strategic Partners
            </a>
             (formerly the BAM Alliance). Buckingham is committed to creating a
            better wealth experience for ﬁnancial advisors and their clients.
            The ﬁrm’s comprehensive wealth platform supports a nationwide
            community of ﬁnancial advisors with the resources they need to
            deliver holistic wealth management solutions and to become better
            connected, more successful organizations.
          </p>
        </div>
      </div>

      <div className="about__details container">
        <div className="about__content u-mb-3">
          <div className="about__left">
            <img src={abt1} alt="dan amoolya" className="about__img" />
            <h3 className="h3" style={{ marginBottom: '0' }}>
              Dan amoolya, MS-Tax, CPA (Retired)
            </h3>
            <p className="u-badge">wealth advisor</p>
          </div>
          <div className="about__right">
            <p className="u-text">
              An action-oriented tax professional, former CFO and seasoned
              baseball operations executive, Dan’s rich experience and passion
              for leading by example adds considerable depth to the amoolya
              team. Drawing from over 40 years in varied business, finance,
              investment and accounting senior management roles, Dan enjoys
              advising other high-end professionals on how to turn their
              concentrated income into durable personal wealth for themselves
              and their families. He brings a distinct combination of
              perspectives as a wealth advisor, business leader and individual
              investor.
            </p>
          </div>
        </div>
        <div className="about__content">
          <div className="about__left">
            <img src={abt2} alt="dan amoolya" className="about__img" />
            <h3 className="h3" style={{ marginBottom: '0' }}>
              Dan amoolya, MS-Tax, CPA (Retired)
            </h3>
            <p className="u-badge">wealth advisor</p>
          </div>
          <div className="about__right">
            <p className="u-text">
              An action-oriented tax professional, former CFO and seasoned
              baseball operations executive, Dan’s rich experience and passion
              for leading by example adds considerable depth to the amoolya
              team. Drawing from over 40 years in varied business, finance,
              investment and accounting senior management roles, Dan enjoys
              advising other high-end professionals on how to turn their
              concentrated income into durable personal wealth for themselves
              and their families. He brings a distinct combination of
              perspectives as a wealth advisor, business leader and individual
              investor.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
