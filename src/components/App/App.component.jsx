import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/Video';
import Layout from '../Layout';

import youtubeApi from '../../api/youtube';
import ScrollToTop from '../ScrollToTop';

function App() {
  const [videoList, setVideoList] = useState({
    videosMetaInfo: [],
    selectedVideoId: null,
    selectedVideoDescription: null,
    selectedVideoTitle: null,
  });

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });
    setVideoList({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    console.log(videoList.videosMetaInfo);
  };

  return (
    <Router>
      <Layout onSearch={onSearch}>
        <Switch>
          <Route exact path="/">
            <HomePage videoList={videoList} setVideoList={setVideoList} />
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/video">
            <Video videoList={videoList} setVideoList={setVideoList} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <ScrollToTop />
      </Layout>
    </Router>
  );
}

export default App;
