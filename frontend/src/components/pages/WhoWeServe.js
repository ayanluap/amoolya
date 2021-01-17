import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Modals from '../layouts/Modals';
import family from '../../assets/family.jpg';
import trust from '../../assets/trust.jpg';
import retire from '../../assets/retire.jpg';
import plan from '../../assets/plan.jpg';

const WhoWeServe = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const openModal1 = () => {
    setVisible1(true);
  };
  const openModal2 = () => {
    setVisible2(true);
  };
  const openModal3 = () => {
    setVisible3(true);
  };
  const openModal4 = () => {
    setVisible4(true);
  };

  const closeModal1 = () => {
    setVisible1(false);
  };
  const closeModal2 = () => {
    setVisible2(false);
  };
  const closeModal3 = () => {
    setVisible3(false);
  };
  const closeModal4 = () => {
    setVisible4(false);
  };

  return (
    <Layout>
      <div className="section__header who-we-serve">
        <div className="who-we-serve__overlay">
          <p className="about__text container prime-heading">Who We Serve?</p>
        </div>
      </div>
      <div className="who-we-serve__showcase ">
        <div className="container">
          <h1 className="h1">Replace Being Herded with Being Heard.</h1>
          <p className="u-text">
            People at the top of their field rarely get there by going at it all
            alone. Each one of our client relationships is incredibly unique.
            Whether you’re a family, institution, individual or employer we
            understand your situation and we are here to provide confidence and
            assurance in your financial life.
          </p>
        </div>
      </div>
      <div className="who-we-serve__details">
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="card2">
            <div className="card2__img">
              <img src={family} alt="family" />
            </div>
            <h2 className="h2 card2__title">Individuals & Families</h2>
            <button className="btn btn--blue" onClick={openModal1}>
              Learn More...
            </button>
          </div>

          <div className="card2">
            <div className="card2__img">
              <img src={plan} alt="plan" />
            </div>
            <h2 className="h2 card2__title">Special Needs Planning</h2>
            <button className="btn btn--blue" onClick={openModal2}>
              Learn More...
            </button>
          </div>

          <div className="card2">
            <div className="card2__img">
              <img src={retire} alt="retire" />
            </div>
            <h2 className="h2 card2__title">Retirement Plan Sponsors</h2>
            <button className="btn btn--blue" onClick={openModal3}>
              Learn More...
            </button>
          </div>

          <div className="card2">
            <div className="card2__img">
              <img src={trust} alt="trust" />
            </div>
            <h2 className="h2 card2__title">
              Trusts, Institutions & Foundations
            </h2>
            <button className="btn btn--blue" onClick={openModal4}>
              Learn More...
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}

      <Modals visible={visible1} closeModal={closeModal1}>
        <h2 className="h2">Individuals & Families</h2>
        <p className="u-text u-mb-3">
          Many successful families face a tricky dilemma: They may lack the
          $50–$100 million portfolio required to grab the attention of a
          traditional advisory firm, but the confined mold of a big bank or
          brokerage firm isn’t a good fit either. <br />
          At Amoolya group of consultants we believe that successful
          professionals and their families deserves appropriate advisory
          services for making the most of their career wealth. <br />
          With dedicated wealth and strategic partners who can provide
          transparent, evidence-based advice, we offer a better approach to
          replace the status of being underserved and overcharged , for average
          care.
        </p>
      </Modals>

      <Modals visible={visible2} closeModal={closeModal2}>
        <h2 className="h2">Special Needs Planning</h2>
        <p className="u-text">
          Between doctor appointments, IEP meetings and therapy visits raising a
          child with special needs can feel overwhelming. Taking a moment to set
          aside time to plan for your child’s future, is without question hard
          to do. Thinking of the day-to-day stuff that needs to happen is hard
          enough. Leave alone the planning that needs to be in place to secure
          your child’s future and start coordinating with the plans about your
          own retirement. <br />
          We get it. Having a plan though can help you achieve peace of mind
          that your child will be taken care of, even when you cannot. <br />
          We can help you develop a plan to ensure your child has the resources
          to reach his or her potential in society and maintain the appropriate
          level of independence. We’ll help you sort through various aspects of
          planning that should integrate life planning, resource planning,
          finance and legal planning and help you assemble a team of experts
          that can address all of these key areas. Perhaps most important we’ll
          help you ensure that a backup plan is in place even when the team may
          no longer be around. <br />
          We’ll help you look at: <br />
          <ul className="who-we-serve__list u-ml-5">
            <li className="who-we-serve__list-item">
              An estimate of lifetime financial support your child will need.
            </li>
            <li className="who-we-serve__list-item">
              A Letter of Intent that guides members of the family, friends of
              family and members of a Circle of Support, who will need to take
              over for parents when the need arises to address social life,
              employment, and residential needs.
            </li>
            <li className="who-we-serve__list-item">
              Document a Circle of Support of key individuals and what each does
              for your child such as family members, friends, a life coach,
              behavioral counselors, etc. and a transition plan to keep this all
              in place when you may not be able to.
            </li>
            <li className="who-we-serve__list-item">
              Help you coordinate legal and estate planning which includes
              Special Needs Trusts and government benefit eligibility.
            </li>
            <li className="who-we-serve__list-item">
              Assemble the right team of experts to ensure you’re doing the best
              you possibly can for securing your family’s future.
            </li>
          </ul>
        </p>
      </Modals>

      <Modals visible={visible3} closeModal={closeModal3}>
        <h2 className="h2">Retirement Plan Sponsors</h2>
        <p className="u-text">
          Retirement plan sponsors have an enormous responsibility when
          providing a 401(k) plan to employees. Determining plan fees can often
          be a difficult task. <br />
          At Amoolya group of consultants our goal is to partner with you to
          provide your participant’s with personalized advice and professionally
          designed portfolios, while safeguarding your own interests. <br />
          Throughout our work with employers we offer: <br />
          <ul className="who-we-serve__list u-ml-5">
            <li className="who-we-serve__list-item">
              Comprehensive fee and investment analysis on your current plan.
            </li>
            <li className="who-we-serve__list-item">
              Alternative solutions based on open architecture.
            </li>
            <li className="who-we-serve__list-item">
              Smoothly managed portfolio changes.
            </li>
            <li className="who-we-serve__list-item">
              Participant-focused services.
            </li>
            <li className="who-we-serve__list-item">
              Investment Policy Statement (IPS) and Investment Committee
              backing.
            </li>
            <li className="who-we-serve__list-item">
              Innovative Employee Financial Wellness Program.
            </li>
          </ul>
        </p>
      </Modals>

      <Modals visible={visible4} closeModal={closeModal4}>
        <h2 className="h2">Trusts, Institutions & Foundations</h2>
        <p className="u-text">
          At Amoolya group of consultants, our own community commitments and
          wealth management expertise, position us to serve as your informed
          institutional wealth alliance. We know what it takes to navigate your
          institutional wealth through the challenges, onward to your unique
          opportunities. <br />
          As your fiduciary partner, we will roll up our sleeves to provide:{' '}
          <br />
          <ul className="who-we-serve__list u-ml-5">
            <li className="who-we-serve__list-item">
              Multi-scenario projections to determine optimal balance of risk
              and return needed.
            </li>
            <li className="who-we-serve__list-item">
              Review and help to create an Investment Policy Statement and
              spending plan.
            </li>
            <li className="who-we-serve__list-item">
              Management of all custodial issues (including account setup,
              transfers, disbursements, etc).
            </li>
            <li className="who-we-serve__list-item">
              Clear and detailed quarterly performance reporting with benchmark
              comparisons and quarterly economic review/outlook.
            </li>
            <li className="who-we-serve__list-item">
              Committee presentations for meetings as needed.
            </li>
            <li className="who-we-serve__list-item">
              Institutional bond expertise and pricing.
            </li>
            <li className="who-we-serve__list-item">
              Access to institutional and nonprofit research and education.
            </li>
            <li className="who-we-serve__list-item">And more!</li>
          </ul>
        </p>
      </Modals>
    </Layout>
  );
};

export default WhoWeServe;
