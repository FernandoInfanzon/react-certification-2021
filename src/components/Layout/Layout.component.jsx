import React, { useContext, useState } from 'react';

import './Layout.styles.css';

import Header from './Header';
import Footer from './Footer';

import ThemeContext from '../../context/ThemeContext';

function Layout({ children, onSearch }) {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    setTheme(!theme);
  };

  const BodyClasses = theme ? 'bg-dark' : 'bg-light';

  return (
    <div className={BodyClasses}>
      <Header onSearch={onSearch} handleClick={handleClick} theme={theme} />
      <main className="container pb-5">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
