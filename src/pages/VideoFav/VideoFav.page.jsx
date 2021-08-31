import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import VideosFavoritos from '../private/VideosFavoritos';
import ScrollToTop from '../../components/ScrollToTop';

import ThemeContext from '../../context/ThemeContext';

import { P, H2, BigTitulo, HRVideo } from '../../components/Styles/global.styled';

function VideoFavPage() {
  const { favoritoSelected, favoritosList } = useContext(ThemeContext);

  console.log(favoritoSelected);

  const url = `https://www.youtube.com/embed/${favoritoSelected.selectedVideoId}?controls=0&autoplay=1`;

  return (
    <section>
      <div className="row justify-content-center">
        <div className="col-12">
          <P>
            welcome to {favoritoSelected.title} Video...
            <Link to="/"> ← go back</Link>
          </P>
        </div>
        <div className="col-lg-8">
          <div className="ratio ratio-16x9">
            <iframe
              src={url}
              title={favoritoSelected.selectedVideoTitle}
              allowFullScreen
            />
          </div>
          <H2 className="text-danger">{favoritoSelected.selectedVideoTitle}</H2>
          <P>{favoritoSelected.selectedVideoDescription}</P>
          <HRVideo />
        </div>
        <div className="col-lg-4 text-center">
          <BigTitulo>Favorite videos</BigTitulo>
          <VideosFavoritos favoritosList={favoritosList} />
          <ScrollToTop />
        </div>
      </div>
    </section>
  );
}

export default VideoFavPage;
