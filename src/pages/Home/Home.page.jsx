import React from 'react';
import Videos from '../../components/Videos';

function HomePage({ videoList, setVideoList, clasesCard, H1 }) {
  return (
    <>
      <H1 role="heading">Welcome to the Challenge!</H1>
      <Videos videoList={videoList} setVideoList={setVideoList} clasesCard={clasesCard} />
    </>
  );
}

export default HomePage;
