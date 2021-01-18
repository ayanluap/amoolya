import React, { Fragment } from 'react';
import abt1 from '../../assets/about1.jpg';
import abt2 from '../../assets/about2.jpg';

const OurTeam = () => {
  return (
    <Fragment>
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
              rel="noreferrer"
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
        <div className="about__content u-mb-5">
          <div className="about__left">
            <img src={abt1} alt="dan amoolya" className="about__img" />
            <h3 className="h3" style={{ marginBottom: '0' }}>
              Amoolya group of consutlant, CFP®, ChSNC®, AIF
            </h3>
            <p className="u-badge">wealth advisor</p>
          </div>
          <div className="about__right">
            <p className="u-text">
              Jeff founded Amoolya group of consutlant in 2015 to provide
              clients a place to receive unbiased, evidence-based advice. Above
              all else, the guiding principle of the firm is to place the
              interests of all current and future clients at the forefront of
              every decision. Jeff assists clients in developing long-term
              investment strategies that help each client solve financial issues
              and position them to achieve all that is important to them. His
              clients include individuals, families, retirement plan sponsors
              and institutional trustees. <br />
              Jeff was a 2005 founding member of a similar independent
              registered investment advisor firm, where he honed in on his
              vision for what became Amoolya group of consutlant. He has been a
              financial professional in a variety of capacities since 2000,
              gaining seasoned experience from advisory positions at Mass
              Mutual, American Express and GE Financial. <br />
              After a few years of encouragement, Jeff recruited his father,
              Amoolya group of consutlant, to join Amoolya group of consutlant
              as a follow up to Dan’s own seasoned career as an accountant and
              CFO. With any luck, Jeff’s son Henry (born in 2014) or daughter
              Daisy (born in 2015), might someday join the firm as well.
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
              investor. <br />
              Before joining Amoolya group of consutlant, Dan was CFO for the
              Sacramento River Cats for 15 years (recognized by Forbes as the
              most valuable minor league professional baseball franchise). He
              also formed and chaired the Club’s philanthropic foundation.
              Before that, he served in several senior financial and management
              positions, overseeing a range of administrative and operational
              logistics for publicly and privately owned companies in the oil
              field service and environmental engineering industries. Dan
              launched his career as a tax manager and auditor at Deloitte,
              Haskins & Sells, CPAs (now Deloitte).
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurTeam;
