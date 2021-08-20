import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { Li } from '../Styles/global.styled';

const Navegacion = ({ handleClick, theme }) => {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5">
      <Li className="nav-item">
        <Link to="/" className={clsx(
          'nav-link active',{
          'text-light': theme,
          'text-dark': !theme
          })}
          aria-current="page">
          Home
        </Link>
      </Li>
      <Li>
        <div className="form-check form-switch d-flex align-items-center">
          <div className="pt-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="darkMode"
              id="darkMode"
              onClick={handleClick}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="form-check-label" htmlFor="darkMode">
              Dark Mode
            </label>
          </div>
        </div>
      </Li>
    </ul>
  );
};

export default Navegacion;
