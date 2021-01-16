import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const ClientExp = () => {
  return (
    <Layout>
      <div className="section__header client-exp">
        <div className="client-exp__overlay"></div>
      </div>

      <div className="client-exp__showcase ">
        <div className="container">
          <h1 className="h1">
            The Experience We Deliver to Our Clients Every Day.
          </h1>
          <p className="u-text">
            When you work with us, you can expect that we will be fully devoted
            to doing what’s best for you - not what’s best for us. For us your
            opinions are also important for our integrated decision making.{' '}
            <br />
            As an independent wealth management firm, we make all of our
            recommendations based solely on how it best serves your near and
            long-term goals. That’s why our approach is fundamentally unique. By
            combining emotional and intelligence quotient - EQ and IQ - we can
            help you build a more secure and prosperous financial future. Here’s
            how we do it:
          </p>
          <Link to="/contact" className="btn btn--blue">
            Schedule Your Introductory Call Today
          </Link>
        </div>
      </div>

      <div className="client-exp__details container">
        <div className="client-exp__content u-mb-3">
          <h3 className="h2">IQ</h3>
          <p className="u-text">
            Our approach to evidence-based investing is completely based on
            identifying your most pressing financial issues and concerns. The
            investment approach embraces the facts that have come from decades
            of academic and practitioner research. Nothing we do is based on
            opinion, hope or hype. Just facts. We’ll help you build a plan to
            withstand market turbulence to free you to focus on what's most
            important to you. We’ll help you think through the key decisions
            that will impact you and your family for years and decades to come
            helping you create a plan that considers an appropriate investment
            strategy, risk management, tax minimization, and more.
          </p>
        </div>
        <div className="client-exp__content">
          <h3 className="h2">EQ</h3>
          <p className="u-text">
            Our approach to evidence-based investing is completely based on
            identifying your most pressing financial issues and concerns. The
            investment approach embraces the facts that have come from decades
            of academic and practitioner research. Nothing we do is based on
            opinion, hope or hype. Just facts. We’ll help you build a plan to
            withstand market turbulence to free you to focus on what's most
            important to you. We’ll help you think through the key decisions
            that will impact you and your family for years and decades to come
            helping you create a plan that considers an appropriate investment
            strategy, risk management, tax minimization, and more.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ClientExp;
