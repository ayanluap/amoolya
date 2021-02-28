import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
import logo from '../../assets/logo.png';

const Contact = () => {
  useEffect(() => {
    window.addEventListener('onload', () => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <Layout>
      <div className="section__header contact">
        <div className="contact__overlay">
          <p className="about__text container prime-heading">Contact Us</p>
        </div>
      </div>

      <div
        className="contact__container container"
        style={{ overflowX: 'hidden' }}
      >
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
                required
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
                required
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
                required
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
                required
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
          <div
            className="u-center"
            style={{ borderBottom: '.1rem solid #ccc' }}
          >
            <p className="address__text u-text">
              KLJ Tower, 9th floor, 903, Netaji Subhash Place
            </p>
            <p className="u-badge u-text">Pitam Pura, Delhi, 110034</p>
          </div>

          <div className="u-center">
            <span className="u-badge u-text">Virtual Office</span>
            <p className="address__text u-text">
              Flat no.10, Block c-6, Second Floor Pocket-8, Sector 23-B, Dwarka,
              New Delhi-110077
            </p>
          </div>
          <div className="u-center">
            <p className="u-badge u-text">Partner Office</p>
            <p className="address__text u-text">
              1st Floor Mehta Tower Community Centre B1, Janakpuri, Delhi-110085
            </p>
          </div>
          <div className="u-center">
            <p className="u-badge u-text">Marketing Office</p>
            <p className="address__text u-text">
              2nd Floor Vipul Agora Mall MG Road, Gurgaon
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
