import React from 'react';
import Videos from '../../components/Videos';

import ScrollToToop from '../../components/ScrollToTop';

import { H1 } from '../../components/Styles/global.styled';

function HomePage({ videoList, setVideoList }) {
  const clasesCard = 'col-sm-6 col-lg-4 col-xl-3';

  return (
    <>
      <H1 role="heading">Welcome to the Challenge!</H1>
      <Videos videoList={videoList} setVideoList={setVideoList} clasesCard={clasesCard} />
      <ScrollToToop />
    </>
  );
}

export default HomePage;
