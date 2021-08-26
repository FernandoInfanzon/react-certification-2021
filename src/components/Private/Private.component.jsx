import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';

function Private({ children, ...rest }) {
  const { autenticado } = useContext(ThemeContext);

  return (
    <Route {...rest} render={() => (autenticado ? children : <Redirect to="/" />)} />
  );
}

export default Private;
