import React, { useState } from 'react';

const ThemeContext = React.createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const [autenticado, setAutenticado] = useState(false);
  const [perfil, setPerfil] = useState({
    id: '',
    name: '',
    avatarUrl: '',

    // id: '123',
    // name: 'Wizeline',
    // avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png'
  });

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, autenticado, setAutenticado, perfil, setPerfil }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
