import React from 'react';

import VideoFavorito from './VideoFavorito';

const VideosFavoritos = ({ favoritosList, clasesCard }) => {
  console.log(favoritosList);

  return (
    <div className="container">
      <div className="row justify-content-center g-3">
        {favoritosList.map((videoItem) => (
          <VideoFavorito
            title={videoItem[2]}
            imagen={videoItem[3]}
            description={videoItem[1]}
            key={videoItem[0]}
            llave={videoItem[0]}
            clasesCard={clasesCard}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosFavoritos;
