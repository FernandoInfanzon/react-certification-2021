import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import loginApi from '../../mock/login.api';

import './Login.styles.css';

import ThemeContext from '../../context/ThemeContext';

// import { AUTH_STORAGE_KEY } from '../../utils/constants';
// import { storage } from '../../utils/storage';
// import  {useLocalStorage} from '../../utils/hooks/useLocalStorage';

function LoginPage() {
  const history = useHistory();

  const { autenticado, setAutenticado, setPerfil } = useContext(ThemeContext);

  // const [error, setError] = useState(false);

  const [datos, setDatos] = useState({
    username: null,
    password: null,
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const authenticate = async (event) => {
    event.preventDefault();
    const resultado = await loginApi(datos.username, datos.password);
    console.log(resultado);

    setPerfil({
      id: resultado.id,
      name: resultado.name,
      avatarUrl: resultado.avatarUrl,
    });

    const setValue = (value) => {
      try {
        window.localStorage.setItem(autenticado, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };

    if (resultado.name !== '') {
      setAutenticado(true);
      setValue(autenticado);

      try {
        // await dispatch(action) // dispatch to redux or send a fetch
        history.push('/favorites'); // redirects if no errors
      } catch (err) {
        history.push('*'); // redirects if an error
      }
    }

    if (autenticado === false) {
      console.log('hubo un error');
      // setError(true);
      setDatos({
        username: null,
        password: null,
      });
    }
  };

  return (
    <section className="py-5 mx-5 row justify-content-center">
      <div className="col-lg-4 login">
        <h1>Welcome back!</h1>
        <form onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input
                required
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input
                required
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="d-grid gap-2 col-12 mx-auto py-5">
            <button className="btn btn-success" type="submit">
              login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
