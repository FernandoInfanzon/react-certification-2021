import React from 'react';

import HomePage from './Home.page';

import { H1 } from '../../components/Styles/global.styled';

function Home({ videoList, setVideoList }) {
  const clasesCard = 'col-sm-6 col-lg-4 col-xl-3';

  return (
    <HomePage
      videoList={videoList}
      setVideoList={setVideoList}
      clasesCard={clasesCard}
      H1={H1}
    />
  );
}

export default Home;
