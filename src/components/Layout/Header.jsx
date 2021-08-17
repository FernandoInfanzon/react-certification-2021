import React from 'react';

import { Link } from 'react-router-dom';

import Buscar from './Buscar';
import Navegacion from './Navegacion';

import './Layout.styles.css';

const Header = ({ onSearch, theme, handleClick }) => {
  const HeaderClasses = theme
    ? 'navbar navbar-expand-lg navbar-dark bg-obscuro'
    : 'navbar navbar-expand-lg navbar-light bg-techno';
  const LogoClasses = theme
    ? 'navbar-brand text-uppercase text-light'
    : 'navbar-brand text-uppercase text-dark';
  const LinkClasses = theme ? 'text-light' : 'text-dark';

  return (
    <nav className={HeaderClasses} id="arriba">
      <div className="container-fluid">
        <Link to="/" className={LogoClasses}>
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
          <Navegacion handleClick={handleClick} LinkClasses={LinkClasses} />
          <span className="navbar-text">
            <Buscar onSearch={onSearch} LinkClasses={LinkClasses} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
