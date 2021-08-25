import React, {useContext, useState} from 'react';

import { Link } from 'react-router-dom';

import {CorazonLleno} from './Layout/CorazonLleno';
import {CorazonVacio} from './Layout/CorazonVacio';

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
      ...videoList,
      selectedVideoId: videoId,
      selectedVideoDescription: itemDescription,
      selectedVideoTitle: itemTitle,
    });
  };

  const { autenticado, favoritosList, setFavoritosList } = useContext(ThemeContext);

  const url = `/video/${videoList.selectedVideoId}`;

  const actualizarListado = () => {
    const filtro = favoritosList.filter(item => item.llave !== llave);
    
    setFavoritosList(filtro);
  }
  

  const handleRemoveItem = (llave) => {
    actualizarListado();
    console.log('Se ejecutó la función de borrar')
  };



  const handleClick = (llave, videoDescription, title) =>{

    console.log(`El ID es ${llave}, el titulo del video es ${title} y la descripción es ${videoDescription}`)
    
    if (!corazon){
      setFavoritosList([...favoritosList, [llave, videoDescription, title, imagen] ]);
      setCorazon(!corazon);
    } else {
      handleRemoveItem(llave);
      setCorazon(!corazon);
    }
    
  }


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
          { autenticado ? 
          <div class="text-end" id="corazon" title="Add to Favorites" onClick={() => handleClick(llave, videoDescription, title, imagen, )}>
          { corazon ? <CorazonLleno/> : <CorazonVacio/> }  
          </div>
          : null}
          <P>{description}</P>
        </div>
      </div>
    </div>
  );
}

export default Video;
