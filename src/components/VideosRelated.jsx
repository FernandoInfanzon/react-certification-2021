import React from 'react';

import Video from './Video';

const VideosRelated = ({ videosRel, clasesCard }) => {
  return (
    <div className="container">
      <div className="row justify-content-center g-3">
        {videosRel.videosMetaInfo.map((videoItem) => (
          <Video
            title={videoItem.snippet.title}
            imagen={videoItem.snippet.thumbnails.medium.url}
            key={videoItem.id.videoId}
            llave={videoItem.id.videoId}
            clasesCard={clasesCard}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosRelated;
