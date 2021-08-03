import React from 'react';

import { Link } from 'react-router-dom';

import { P, Titulo } from './Styles/global.styled';

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

  const url = `/video/${videoList.selectedVideoId}`;

  return (
    <div className={clasesCard}>
      <div className="card h-100">
        <Link to={url} onClick={() => selectVideo(llave, videoDescription, title)}>
          <img src={imagen} className="img-fluid" alt={title} />
        </Link>
        <div className="card-body">
          <Link to={url} onClick={() => selectVideo(llave, videoDescription, title)}>
            <Titulo>{title}</Titulo>
          </Link>
          <P>{description}</P>
        </div>
      </div>
    </div>
  );
}

export default Video;
