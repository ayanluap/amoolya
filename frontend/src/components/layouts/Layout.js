import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
