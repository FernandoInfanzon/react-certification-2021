import React from 'react';
import { Link } from 'react-router-dom';

import Videos from '../../components/Videos';

import youtubeApi from '../../api/youtube';

import { P, H2, BigTitulo } from '../../components/Styles/global.styled';

function VideoPage({ videoList, setVideoList }) {
  const onRelated = async (keyword) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
        relatedToVideoId: videoList.selectedVideoId,
      },
    });
    setVideoList({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    console.log(videoList.videosMetaInfo);
  };

  const url = `https://www.youtube.com/embed/${videoList.selectedVideoId}?controls=0&autoplay=1`;

  return (
    <section>
      <div className="row justify-content-center">
        <div className="col-12">
          <P>
            welcome to {videoList.selectedVideoTitle} Video...
            <Link to="/"> ← go back</Link>
          </P>
        </div>
        <div className="col-lg-8">
          <div className="ratio ratio-16x9">
            <iframe src={url} title={videoList.selectedVideoTitle} allowFullScreen />
          </div>
          <H2>{videoList.selectedVideoTitle}</H2>
          <P>{videoList.selectedVideoDescription}</P>
        </div>
        <div className="col-lg-4 text-center">
          <BigTitulo>Related videos</BigTitulo>
          <Videos
            videoList={videoList}
            setVideoList={setVideoList}
            onRelated={onRelated}
          />
        </div>
      </div>
    </section>
  );
}

export default VideoPage;
