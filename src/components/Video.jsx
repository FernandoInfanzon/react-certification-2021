import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { CorazonLleno } from './Layout/CorazonLleno';
import { CorazonVacio } from './Layout/CorazonVacio';

import { P, Titulo, Imagen } from './Styles/global.styled';

import ThemeContext from '../context/ThemeContext';
// import { set } from 'object-path';

function Video({
  title,
  imagen,
  description,
  llave,
  videoList,
  setVideoList,
  videoDescription,
  clasesCard,
}) {
  const [corazon, setCorazon] = useState(false);
  // bi-heart-fill
  // bi-suit-heart

  const selectVideo = (videoId, itemDescription, itemTitle) => {
    setVideoList({
      // eslint-disable-next-line
      ...videoList,
      selectedVideoId: videoId,
      selectedVideoDescription: itemDescription,
      selectedVideoTitle: itemTitle,
    });
  };

  const { autenticado, favoritosList, setFavoritosList } = useContext(ThemeContext);

  const url = `/video/${videoList.selectedVideoId}`;

  const actualizarListado = (llaveBorrar) => {
    const nuevoFavoritos = favoritosList.filter(item => item[0] !== llaveBorrar);
    setFavoritosList(nuevoFavoritos);
    console.log(nuevoFavoritos);
  };

  const handleRemoveItem = (llaveABorrar) => {
    actualizarListado(llaveABorrar);
    console.log('Se ejecutó la función de borrar');
    
  };

  const handleClick = () => {
    if (!corazon) {
      setFavoritosList([...favoritosList, [llave, videoDescription, title, imagen]]);
      setCorazon(!corazon);
    } else {
      handleRemoveItem(llave);
      setCorazon(!corazon);
    }
  };

  return (
    <div className={clasesCard}>
      <div className="card h-100">
        <Link to={url} onClick={() => selectVideo(llave, videoDescription, title)}>
          <Imagen src={imagen} alt={title} />
        </Link>
        <div className="card-body">
          <Link to={url} onClick={() => selectVideo(llave, videoDescription, title)}>
            <Titulo>{title}</Titulo>
          </Link>

          {autenticado ? (
            // eslint-disable-next-line
            <div
              className="text-end"
              id="corazon"
              title="Add to Favorites"
              onClick={() => handleClick(llave, videoDescription, title, imagen)}
            >
              {corazon ? <CorazonLleno /> : <CorazonVacio />}
            </div>
          ) : null}
          <P>{description}</P>
        </div>
      </div>
    </div>
  );
}

export default Video;
