import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import clsx from 'clsx';

import Buscar from './Buscar';
import Navegacion from './Navegacion';

import ThemeContext from '../../context/ThemeContext';

import './Layout.styles.css';

const Header = ({ onSearch, handleClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={clsx('navbar navbar-expand-lg', {
        'navbar-dark bg-obscuro': theme,
        'navbar-light bg-techno': !theme,
      })}
      id="arriba"
    >
      <div className="container-fluid">
        <Link
          to="/"
          className={clsx('navbar-brand text-uppercase', {
            'text-light': theme,
            'text-dark': !theme,
          })}
        >
          YouTube client app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <Navegacion handleClick={handleClick} />
          <span className="navbar-text">
            <Buscar onSearch={onSearch} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
