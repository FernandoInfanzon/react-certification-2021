import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import clsx from 'clsx';

import { Button, Dropdown, ImagenIcon } from '../Styles/global.styled';

import ThemeContext from '../../context/ThemeContext';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const Buscar = ({ onSearch }) => {
  const { theme, autenticado, setAutenticado, perfil, setPerfil } = useContext(
    ThemeContext
  );

  const ColorIcon = !theme ? 'black' : 'white';

  const [value, setValue] = useState({
    word: 'mexico',
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(
    () => {
      onSearch('mexico');
    },
    // eslint-disable-next-line
    []
  );

  const logout = () => {
    setAutenticado(false);
    setPerfil({});
    storage.set(AUTH_STORAGE_KEY, false);
  };

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(value.word);
    try {
      // await dispatch(action) // dispatch to redux or send a fetch
      history.push('/'); // redirects if no errors
    } catch (err) {
      history.push('*'); // redirects if an error
    }
  };

  return (
    <>
      <form className="d-flex flex-row " onSubmit={onSubmit}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="word"
          value={value.word}
          onChange={handleChange}
        />
        <Button
          className={clsx('btn btn-outline-success', {
            'text-light': theme,
            'text-dark': !theme,
          })}
          type="submit"
        >
          Search
        </Button>
        {!autenticado ? (
          <Link to="/login" className="ps-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              fill={ColorIcon}
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Link>
        ) : (
          <div className="dropdown">
            <button
              className="btn dropdown-toggle dropstart"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImagenIcon src={perfil.avatarUrl} alt={perfil.name} />
            </button>

            <Dropdown className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <button className="btn btn-sm" type="button" onClick={logout}>
                Log Out
              </button>
            </Dropdown>
          </div>
        )}
      </form>
    </>
  );
};

export default Buscar;
