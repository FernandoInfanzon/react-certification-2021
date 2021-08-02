import React from 'react';

import { Link } from 'react-router-dom';

import { P } from './Styles/global.styled';

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
  const selectVideo = (videoId, itemDescription, itemTitle) => {
    setVideoList({
      ...videoList,
      selectedVideoId: videoId,
      selectedVideoDescription: itemDescription,
      selectedVideoTitle: itemTitle,
    });
  };

  return (
    <div className={clasesCard}>
      <div className="card h-100">
        <img src={imagen} className="img-fluid" alt={title} />
        <div className="card-body">
          <Link to="/video" onClick={() => selectVideo(llave, videoDescription, title)}>
            {title}
          </Link>
          <P>{description}</P>
        </div>
      </div>
    </div>
  );
}

export default Video;
