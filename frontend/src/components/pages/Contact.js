import React from 'react';
import Layout from '../layouts/Layout';
import logo from '../../assets/logo.png';

const Contact = () => {
  return (
    <Layout>
      <div className="section__header contact">
        <div className="contact__overlay">
          <p className="about__text container prime-heading">Contact Us</p>
        </div>
      </div>
      <div className="contact__container container">
        <form className="form">
          <div className="form__collection container">
            <p className="u-text u-mb-2">
              Please fill the given form to contact!
            </p>
            <div className="form__group">
              <label htmlFor="fullname" className="form__label">
                name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="form__input"
                placeholder="Full Name"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form__input"
                placeholder="Email id"
              />
            </div>
            <div className="form__group">
              <label htmlFor="phone" className="form__label">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="form__input"
                placeholder="Phone number"
              />
            </div>
            <div className="form__group">
              <label htmlFor="msg" className="form__label">
                message
              </label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                className="form__input"
                placeholder="enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn--blue">
              submit
            </button>
          </div>
        </form>

        <div className="address">
          <div className="address__img">
            <img src={logo} alt="logo" />
          </div>
          <p className="address__text u-text">
            KLJ Tower, 9th floor, 903, Netaji Subhash Place
          </p>
          <p className="u-badge u-text">Pitam Pura, Delhi, 110034</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
