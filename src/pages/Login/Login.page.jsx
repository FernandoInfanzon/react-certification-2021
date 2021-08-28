import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import loginApi from '../../mock/login.api';

import './Login.styles.css';

import ThemeContext from '../../context/ThemeContext';

// import { AUTH_STORAGE_KEY } from '../../utils/constants';
// import { storage } from '../../utils/storage';
// import  {useLocalStorage} from '../../utils/hooks/useLocalStorage';

function LoginPage() {
  const history = useHistory();

  const { autenticado, setAutenticado, perfil, setPerfil } = useContext(ThemeContext);

  const [error, setError] = useState('');

  const [datos, setDatos] = useState({
    username: null,
    password: null,
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    setError(false);
  };

  
  const validacion = () => {
    setTimeout(() => {
      if (perfil.name !== '' && perfil !== null ) {
        setAutenticado(true);
        // setValue(autenticado);
  
        try {
          // await dispatch(action) // dispatch to redux or send a fetch
          history.push('/favorites'); // redirects if no errors
        } catch (err) {
          history.push('*'); // redirects if an error
        }
      } else {
        console.log('hubo un error');
        // setError(true);
        
      }
    }, 10);
  }


  const salir = () => {
        setTimeout(() => {
      setError(true);
    }, 1000);

  }

  const authenticate = async (event) => {
    event.preventDefault();
    const resultado = await loginApi(datos.username, datos.password).then(
      usuario => setPerfil({
        id: usuario.id,
        name: usuario.name,
        avatarUrl: usuario.avatarUrl
      })
    ).catch(salir());
   
    
    // const setValue = (value) => {
    //   try {
    //     window.localStorage.setItem(autenticado, JSON.stringify(value));
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    
  };

  useEffect(() => {
    
  validacion();

  },);

  return (
    <section className="py-5 mx-5 row justify-content-center">
      <div className="col-lg-4 login">
        <h1>Welcome back!</h1>
        { (error === true && error !== '') ? 
          <div className="alert alert-danger d-flex align-items-center" role="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-info-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
              <div className="ps-3 fs-6 text">
              Username or password invalid
              </div>
            </div>
         : null}
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
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
