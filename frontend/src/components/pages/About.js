import React from 'react';
import Layout from '../layouts/Layout';
import { NavLink, Route } from 'react-router-dom';
import OurVision from '../components/OurVision';
import OurTeam from '../components/OurTeam';

const About = () => {
  return (
    <Layout>
      <div className="section__header about">
        <div className="about__overlay">
          <p className="about__text container prime-heading"></p>
          <span className="about__tab-box">
            <NavLink
              to="/know-us/our-vision"
              className="about__tabs"
              activeClassName="active-tab"
            >
              Our vision
            </NavLink>
            <NavLink
              to="/know-us/our-team"
              className="about__tabs"
              activeClassName="active-tab"
            >
              Our team
            </NavLink>
          </span>
        </div>
      </div>

      <Route path="/know-us/our-vision" exact component={OurVision} />
      <Route path="/know-us/our-team" exact component={OurTeam} />
      {/* <Route /> */}
    </Layout>
  );
};

export default About;
