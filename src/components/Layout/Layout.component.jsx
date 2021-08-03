import React from 'react';

import './Layout.styles.css';

import Header from './Header';
import Footer from './Footer';

function Layout({ children, onSearch }) {
  return (
    <>
      <Header onSearch={onSearch} />
      <main className="container pb-5">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
