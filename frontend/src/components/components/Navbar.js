import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    window.addEventListener('scroll', scrollHandler);
  }, []);

  const navClose = () => {
    const checkNav = document.getElementById('checkNav');
    checkNav.checked = false;
  };

  return (
    <div
      className={
        scrolled ? 'navbar navbar-colored' : 'navbar navbar-transparent'
      }
    >
      <div className="container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" />
        </Link>

        <label htmlFor="checkNav" className="navbar__label">
          <svg width="30" height="19" fill="none">
            <line y1="1.5" x2="30" y2="1.5" stroke="#DBEE69" strokeWidth="3" />
            <line y1="9.5" x2="30" y2="9.5" stroke="#DBEE69" strokeWidth="3" />
            <line
              y1="17.5"
              x2="30"
              y2="17.5"
              stroke="#DBEE69"
              strokeWidth="3"
            />
          </svg>
        </label>

        <input
          type="checkbox"
          name="checkNav"
          id="checkNav"
          className="navbar__check"
        />

        <nav className="navbar__nav">
          <ul className="navbar__list-collection">
            <div className="close" id="closeNav" onClick={navClose}>
              &times;
            </div>
            <li className="navbar__list">
              <NavLink
                to="/"
                className="navbar__link"
                activeClassName="active"
                onClick={navClose}
              >
                Know us
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                to="/"
                className="navbar__link"
                activeClassName="active"
                onClick={navClose}
              >
                Client Experience
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                to="/"
                className="navbar__link"
                activeClassName="active"
                onClick={navClose}
              >
                Who We Serve
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                to="/"
                className="navbar__link"
                activeClassName="active"
                onClick={navClose}
              >
                Blogs
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                to="/"
                className="navbar__link"
                activeClassName="active"
                onClick={navClose}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
