import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const ClientExp = () => {
  return (
    <Layout>
      <div className="section__header client-exp">
        <div className="client-exp__overlay">
          <p className="about__text container prime-heading">
            Client Experence
          </p>
        </div>
      </div>

      <div className="client-exp__showcase ">
        <div className="container">
          <h1 className="h1">Helping create restful nights.</h1>
          <p className="u-text">
            We lend a helping hand to fabricate snug nights for our clients,
            knowing they have a plan that can render the market’s daily ups and
            downs irrelevant to their future opulence. <br />
            The descriptive and customized steps taken from our side helps you
            to concentrate on things that are relevant so you can enjoy life
            more. Cooperatively we can generate a salient plan that provides you
            the best odds of knowing your major financial objective.
          </p>
        </div>
      </div>

      <div className="client-exp__content container">
        <div className="card">
          <h3 className="card__title h3 u-center">
            Initial & On-Going Discovery
          </h3>
          <div className="card__text u-text u-center">
            Sitting down with you and your family, we take the time to
            understand your unique goals, issues, and to learn more about your
            concerns around your wealth and your life. What are your plans and
            goals? What are the risks and opportunities most relevant to you?
            How do you currently address these matters? What should change?
          </div>
        </div>

        <div className="card">
          <h3 className="card__title h3 u-center">Building a Foundation</h3>
          <div className="card__text u-text u-center">
            Once we begin learning where you are, where you’d like to be and
            what’s most important to you, we'll begin assembling all of that
            input into a plan for you. We’ll collaborate with you and your other
            tax and legal advisors to consider your values, tax and estate
            issues, risk factors or special needs unique to you to develop a
            well thought out plan that will help you navigate the next chapters
            of your life.
          </div>
        </div>

        <div className="card">
          <h3 className="card__title h3 u-center">Advanced Planning</h3>
          <div className="card__text u-text u-center">
            Going well beyond investments, we'll help you take deliberate steps
            to address your most pressing concerns.  Advanced planning helps you
            address areas such as business succession or charitable giving plans
            or helping you facilitate family meetings to prepare your loved ones
            for potential inheritance.  All of this is done to help you
            accomplish what's most important to you.
          </div>
        </div>

        <div className="card">
          <h3 className="card__title h3 u-center">Tracking Progress</h3>
          <div className="card__text u-text u-center">
            Your plan is written into an Investment Policy Statement that serves
            as a roadmap describing how your investments will be handled in a
            coordinated fashion and in line with your big picture planning
            needs. Easy 24/7 tracking is made available for you to check
            performance of your investment portfolio and monitor the ongoing
            status of your wealth management plan. Perhaps most importantly, we
            make ourselves available whenever needed to meet with you to review
            what’s on your mind and talk through how we can continue to best
            help you stay on track.  
          </div>
        </div>
      </div>

      <div className="container u-center u-mb-3">
        <strong className="u-text" style={{ display: 'block' }}>
          Let us help you focus on your destination so you can enjoy the ride!
        </strong>
        <Link to="/contact" className="btn btn--blue">
          get started Today
        </Link>
      </div>
    </Layout>
  );
};

export default ClientExp;
