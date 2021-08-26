import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { P, Titulo, Imagen } from '../../components/Styles/global.styled';

import ThemeContext from '../../context/ThemeContext';
// import { set } from 'object-path';

function VideoFavorito({ title, imagen, description, key, llave, clasesCard }) {
  const { setFavoritoSelected } = useContext(ThemeContext);

  const selectVideo = () => {
    setFavoritoSelected({
      selectedVideoId: llave,
      selectedVideoDescription: description,
      selectedVideoTitle: title,
    });
  };

  const url = `/video_favorito/${llave}`;

  return (
    <div className={clasesCard} key={key}>
      <div className="card h-100">
        <Link to={url} onClick={() => selectVideo(llave, description, title)}>
          <Imagen src={imagen} alt={title} />
        </Link>
        <div className="card-body">
          <Link to={url} onClick={() => selectVideo(llave, description, title)}>
            <Titulo>{title}</Titulo>
          </Link>

          <P>{description}</P>
        </div>
      </div>
    </div>
  );
}

export default VideoFavorito;
