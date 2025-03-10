import React from 'react';

import Video from './Video';

const Videos = ({ videoList, setVideoList, clasesCard }) => {
  return (
    <div className="container">
      <div className="row justify-content-center g-3">
        {videoList.videosMetaInfo.map((videoItem) => (
          <Video
            title={videoItem.snippet.title}
            imagen={videoItem.snippet.thumbnails.medium.url}
            description={videoItem.snippet.description}
            key={videoItem.id.videoId}
            llave={videoItem.id.videoId}
            videoList={videoList}
            setVideoList={setVideoList}
            videoDescription={videoItem.snippet.description}
            clasesCard={clasesCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
