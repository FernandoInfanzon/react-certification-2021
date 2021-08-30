import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/Video';
import VideoFav from '../../pages/VideoFav';
import Layout from '../Layout';
import { Favorites } from '../../pages/private/Favorites';
import Private from '../Private';
import ScrollToTop from '../ScrollToTop';

import ThemeContext from '../../context/ThemeContext';

import youtubeApi from '../../api/youtube';

function App() {
  const { favoritoSelected, favoritosList } = useContext(ThemeContext);

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
            <Home videoList={videoList} setVideoList={setVideoList} />
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Private exact path="/favorites">
            <Favorites />
          </Private>
          <Route exact path="/video/:id">
            <Video videoList={videoList} setVideoList={setVideoList} />
            <ScrollToTop />
          </Route>
          <Private exact path="/video_favorito/:id">
            <VideoFav favoritoSelected={favoritoSelected} favoritosList={favoritosList} />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
