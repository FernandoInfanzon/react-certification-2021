import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { P, Titulo, Imagen } from '../../components/Styles/global.styled';

import { CorazonLleno } from '../../components/Layout/CorazonLleno';
import { CorazonVacio } from '../../components/Layout/CorazonVacio';

import ThemeContext from '../../context/ThemeContext';
// import { set } from 'object-path';

function VideoFavorito({ title, imagen, description, key, llave, clasesCard }) {
  const { setFavoritoSelected, favoritosList, setFavoritosList } = useContext(ThemeContext);

  const [corazon, setCorazon] = useState(true);


  const selectVideo = () => {
    setFavoritoSelected({
      selectedVideoId: llave,
      selectedVideoDescription: description,
      selectedVideoTitle: title,
    });
  };

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
      setFavoritosList([...favoritosList, [llave, description, title, imagen]]);
      setCorazon(!corazon);
    } else {
      handleRemoveItem(llave);
      setCorazon(!corazon);
    }
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
          
          <div
              className="text-end"
              id="corazon"
              title="Add to Favorites"
              onClick={() => handleClick(llave, description, title, imagen)}
              role="none"
            >
              {corazon ? <CorazonLleno /> : <CorazonVacio />}
            </div>
          <P>{description}</P>
        </div>
      </div>
    </div>
  );
}

export default VideoFavorito;
