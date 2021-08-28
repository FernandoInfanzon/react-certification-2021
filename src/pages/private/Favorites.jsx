import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from '../../context/ThemeContext';
import VideosFavoritos from './VideosFavoritos';
import { Espacio } from '../../components/Styles/global.styled';

export const Favorites = () => {
  const { perfil, theme, favoritosList } = useContext(ThemeContext);

  const clasesCard = 'col-sm-6 col-lg-4 col-xl-3';

  console.log(favoritosList);
  return (
    <div className="row justify-content-center py-5 ">
      <div className="col-12 text-center">
        <h1
          className={clsx({
            'text-light': theme,
            'text-dark': !theme,
          })}
        >
          Welcome to {perfil.name}&apos;s Favorite Videos
        </h1>
        {favoritosList.length > 0 ? (
          <VideosFavoritos favoritosList={favoritosList} clasesCard={clasesCard} />
        ) : (
          <>
            <div className="alert alert-warning d-flex align-items-center" role="alert">
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
              <div className="ps-3">
                You haven&apos;t added any video to your favorites yet
              </div>
            </div>
            <Espacio />
          </>
        )}
      </div>
      {/* <VideosFavorito favoritosList={favoritosList} clasesCard={clasesCard} /> */}
    </div>
  );
};
