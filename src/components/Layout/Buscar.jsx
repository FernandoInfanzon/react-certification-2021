import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '../Styles/global.styled';

const Buscar = ({ onSearch, LinkClasses }) => {
  const ButtonClasses = `btn btn-outline-success ${LinkClasses}`;
  const ColorIcon = LinkClasses === 'text-dark' ? 'black' : 'white';

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
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        name="word"
        value={value.word}
        onChange={handleChange}
      />
      <Button className={ButtonClasses} type="submit">
        Search
      </Button>
      <Link to="/login" className="ps-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
    </form>
  );
};

export default Buscar;
