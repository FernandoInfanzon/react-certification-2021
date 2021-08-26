import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Li } from '../Styles/global.styled';
import ThemeContext from '../../context/ThemeContext';

export const FavoritesMenu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Li className="nav-item">
      <Link
        to="/favorites"
        className={clsx('nav-link active', {
          'text-light': theme,
          'text-dark': !theme,
        })}
        aria-current="page"
      >
        Favorites
      </Link>
    </Li>
  );
};
