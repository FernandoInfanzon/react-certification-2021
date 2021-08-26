import React, { useContext, useReducer } from 'react';

import clsx from 'clsx';

import './Layout.styles.css';

import Header from './Header';
import Footer from './Footer';

import ThemeContext from '../../context/ThemeContext';

function Layout({ children, onSearch }) {
  const initialState = {
    darkMode: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'DARKMODETHEME':
        return !state.darkMode;
      default:
        return state;
    }
  };

  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, initialState);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    dispatch({ type: 'DARKMODETHEME' });
    setTheme(!theme);
  };

  return (
    <div className={clsx({ 'bg-dark': theme, 'bg-light': !theme })}>
      <Header onSearch={onSearch} handleClick={handleClick} />
      <main className="container pb-5">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
