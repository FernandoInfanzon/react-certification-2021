import React from 'react';

import styled from 'styled-components';

import Videos from '../../components/Videos';

import './Home.styles.css';

const H1 = styled.h1`
  padding-top: 3rem;
  text-align: center;
`;

function HomePage({ videoList, setVideoList }) {
  const clasesCard = 'col-sm-6 col-lg-4 col-xl-3';

  return (
    <>
      <H1 role="heading">Welcome to the Challenge!</H1>
      <Videos videoList={videoList} setVideoList={setVideoList} clasesCard={clasesCard} />
    </>
  );
}

export default HomePage;
