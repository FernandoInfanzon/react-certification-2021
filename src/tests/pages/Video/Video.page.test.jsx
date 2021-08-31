import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import VideoPage from '../../../pages/Video/Video.page';

const videoList = {
  videosMetaInfo: [
    {
      kind: 'youtube#searchResult',
      etag: 'wJ_py78ujrhdAtbMgTHHsZLWmF0',
      id: {
        kind: 'youtube#video',
        videoId: 'R9EEKbVcZA4',
      },
      snippet: {
        publishedAt: '2021-08-02T04:05:48Z',
        channelId: 'UCTIyEyDNHPrwVFPhpi5dm0A',
        title:
          'Resumen y goles | Estados Unidos vs México | Copa Oro 2021 - Final | TUDN',
        description:
          'Estados Unidos vence al tricolor con un gol agónico y se proclama campeón absoluto de la Copa Oro 2021. Síguenos en nuestras redes sociales: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/R9EEKbVcZA4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/R9EEKbVcZA4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/R9EEKbVcZA4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'TUDN México',
        liveBroadcastContent: 'none',
        publishTime: '2021-08-02T04:05:48Z',
      },
    },
  ],
  selectedVideoId: 'RdKAvtCsJJE',
};

describe('Video Page ', () => {
  it('must display Video details', () => {
    render(
      <BrowserRouter>
        <VideoPage videoList={videoList} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Resumen y goles/i)).toBeInTheDocument();
  });
});
