import React from 'react';

import { Link } from 'react-router-dom';

import { Nav } from '../Styles/global.styled';

import Buscar from './Buscar';
import Navegacion from './Navegacion';

const Header = ({ onSearch }) => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light" id="arriba">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-uppercase">
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
          <Navegacion />
          <span className="navbar-text">
            <Buscar onSearch={onSearch} />
          </span>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
