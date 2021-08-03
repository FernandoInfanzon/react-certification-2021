import React from 'react';

import { FooterP, SmallP } from '../Styles/global.styled';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-center">
        <FooterP className="text-muted text-center">Luis F. Infanzón M.</FooterP>
        <SmallP className="text-muted text-center">
          Wizeline Academy - 2021 React Bootcamp
        </SmallP>
        <SmallP className="text-muted text-center">Mini Challenge 3</SmallP>
      </div>
    </footer>
  );
};

export default Footer;
