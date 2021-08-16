import React from 'react';

import HomePage from './Home.page';

function Home({ videoList, setVideoList }) {
  return <HomePage videoList={videoList} setVideoList={setVideoList} />;
}

export default Home;
