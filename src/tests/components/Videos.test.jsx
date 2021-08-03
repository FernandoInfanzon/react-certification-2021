import React from 'react';

import { render, screen } from '@testing-library/react';

import Videos from '../../components/Videos';

const videoList = [
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
      title: 'Resumen y goles | Estados Unidos vs México | Copa Oro 2021 - Final | TUDN',
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
  {
    kind: 'youtube#searchResult',
    etag: 'JJuPY42qV28-NzxSZT-VIXTIJZg',
    id: {
      kind: 'youtube#video',
      videoId: 'aKj3SmWXjwU',
    },
    snippet: {
      publishedAt: '2021-08-02T15:00:01Z',
      channelId: 'UC08mnbiC4FykqpHqbEWgFcg',
      title:
        'HUGO: &quot;A MÍ ME QUEMARON. El TATA FRACASÓ PEOR&quot;. México cayó ante Estados Unidos. | Futbol Picante',
      description:
        'México cayó 1-0 ante Estados Unidos en la final de la Copa Oro. Un gol de Miles Robinson en el minuto 117 condenó al Tri del Tata Martino. Hugo Sánchez ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/aKj3SmWXjwU/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/aKj3SmWXjwU/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/aKj3SmWXjwU/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ESPN Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T15:00:01Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'fa8Z61xy9jS8QSMKVguTo_cxUhE',
    id: {
      kind: 'youtube#video',
      videoId: 'jugtfkHJNoI',
    },
    snippet: {
      publishedAt: '2021-08-02T04:56:48Z',
      channelId: 'UC08mnbiC4FykqpHqbEWgFcg',
      title:
        'FRACASO MONUMENTAL México y Martino pierden la final de Copa Oro vs Estados Unidos | Futbol Picante',
      description:
        'México y Estados Unidos se fueron al alargue y con un gol de Miles Robinson, los estadounidenses celebran su sexto título en la final de la Copa Oro 2021.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/jugtfkHJNoI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/jugtfkHJNoI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/jugtfkHJNoI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ESPN Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T04:56:48Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'ZcvsXvQ6--7wQRf43U_ep7jIBfU',
    id: {
      kind: 'youtube#video',
      videoId: 'H_tOzyYWJ88',
    },
    snippet: {
      publishedAt: '2021-08-02T17:59:08Z',
      channelId: 'UCFyLSmYThaqMgUQOm31SnAA',
      title:
        '¡HOY SORTEO! - USA vence a MÉXICO - Dos finales perdidas - ¿Quién debe irse? - Copa Oro 2021',
      description:
        'La Selección del Tata Martino entregó un partido que estaba para ganarse. Muchos factores fueron los causantes de esta miseria futbolística, pero hay nombres ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/H_tOzyYWJ88/default_live.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/H_tOzyYWJ88/mqdefault_live.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/H_tOzyYWJ88/hqdefault_live.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Leyendas del Futbol Mexicano',
      liveBroadcastContent: 'live',
      publishTime: '2021-08-02T17:59:08Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'YCMjsqSaAoadWjokHBFGkDlmBn4',
    id: {
      kind: 'youtube#video',
      videoId: 'gIdGM_W2WmA',
    },
    snippet: {
      publishedAt: '2021-08-02T18:18:25Z',
      channelId: 'UCqfCJBfrFSO4tZM1LNZTBFQ',
      title: 'México vs Brasil | Semifinal | Fútbol Varonil',
      description:
        'La Selección Olímpica Mexicana en busca de conseguir el oro olímpico se enfrenta a su primer gran obstáculo, el vigente campeón y el gran favorito de la ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/gIdGM_W2WmA/default_live.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/gIdGM_W2WmA/mqdefault_live.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/gIdGM_W2WmA/hqdefault_live.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Marca Claro',
      liveBroadcastContent: 'upcoming',
      publishTime: '2021-08-02T18:18:25Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'naq6fvUCWDnAs21qjYWzYRcv5UA',
    id: {
      kind: 'youtube#video',
      videoId: 'Y6zZ9BLHKio',
    },
    snippet: {
      publishedAt: '2021-08-02T22:15:01Z',
      channelId: 'UC08mnbiC4FykqpHqbEWgFcg',
      title:
        '&quot;MÉXICO TUVO QUE SER CAMPEÓN&quot;. ¿Fue mucho balancear Copa Oro con los Olímpicos? | Futbol Picante',
      description:
        'Con compromisos en la Copa Oro y los Juegos Olímpicos, México tuvo que armar dos selecciones. Aunque el Tri Olímpico sigue todavía con vida en Tokio, las ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Y6zZ9BLHKio/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Y6zZ9BLHKio/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Y6zZ9BLHKio/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ESPN Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T22:15:01Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '09WIxztHD1L8XmrHn1f_qxypplE',
    id: {
      kind: 'youtube#video',
      videoId: '_YcEAy9mpww',
    },
    snippet: {
      publishedAt: '2021-08-02T03:44:10Z',
      channelId: 'UC2BQRGYB13s0rGlXL-rKKEw',
      title: '¡FRACASO! México vs Estados Unidos 0-1 | Resumen Completo | 2021',
      description:
        'SUBSCRIBETE ▻ https://bit.ly/2T52E9R LIGA MX HIGHLIGHTS ▻ https://bit.ly/3lRspqq.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/_YcEAy9mpww/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/_YcEAy9mpww/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/_YcEAy9mpww/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'GOLAZO MX',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T03:44:10Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '_5l4OIgqEGSjQy4XtWuDQSfQl08',
    id: {
      kind: 'youtube#video',
      videoId: 'cpPazeqrD8U',
    },
    snippet: {
      publishedAt: '2021-08-02T04:00:43Z',
      channelId: 'UCqn7r-so0mBLaJTtTms9dAQ',
      title: 'Extended Highlights: USA 1-0 Mexico - 2021 Gold Cup Final',
      description:
        "Extended Highlights: Re-watch the best moments of United States' 1-0 victory over Mexico in Las Vegas. #USMNT clinches their 7th title! #GoldCup21 ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/cpPazeqrD8U/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/cpPazeqrD8U/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/cpPazeqrD8U/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Concacaf',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T04:00:43Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'nnMtzCxUcAzAbLz1fkCj6xtXxQ0',
    id: {
      kind: 'youtube#video',
      videoId: 'Ceu39JTUNsc',
    },
    snippet: {
      publishedAt: '2021-08-03T01:00:02Z',
      channelId: 'UC08mnbiC4FykqpHqbEWgFcg',
      title:
        '¿MISIÓN IMPOSIBLE? México busca vencer a Brasil en la semifinal de los Juegos Olímpicos | Exclusivos',
      description:
        'México venció a Corea del Sur 6-3 y ahora tiene a Brasil por delante en las semifinales de los Juegos Olímpicos de Tokio 2020. El equipo de Jimmy Lozano ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Ceu39JTUNsc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Ceu39JTUNsc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Ceu39JTUNsc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ESPN Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-03T01:00:02Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'Udb4I3QUHKM13AY1NZnIjfVLt8o',
    id: {
      kind: 'youtube#video',
      videoId: 'czIQ2QKcC_A',
    },
    snippet: {
      publishedAt: '2021-07-31T16:30:07Z',
      channelId: 'UCnakvGHvF7Y13eQ54M4ypPQ',
      title: 'ESPAÑOL REACCIONA al COREA DEL SUR 3-6 MÉXICO | Cuartos TOKIO 2020',
      description:
        'Compra las mejores camisetas baratas 2021/22 en KitFutboll: https://www.kitfutboll.com, usa el código "zaba" para obtener un 10% de descuento. ⭐ Hazte ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/czIQ2QKcC_A/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/czIQ2QKcC_A/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/czIQ2QKcC_A/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ZABALIVE',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-31T16:30:07Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'PIBknVUXGnynwUYqGib5Kv8AREU',
    id: {
      kind: 'youtube#video',
      videoId: 'ypZxM7lfMBE',
    },
    snippet: {
      publishedAt: '2021-08-02T14:53:40Z',
      channelId: 'UCOJNw9aHGRkYuIOqwU7yK-Q',
      title: 'E FOMOS PARA O MÉXICO...',
      description:
        'Bem-vindos à Cancún! Inscreva-se no canal: https://www.youtube.com/c/MundoSemFim/?sub_confirmation=1 Acompanhe-nos em nossas redes sociais: IG: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ypZxM7lfMBE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ypZxM7lfMBE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/ypZxM7lfMBE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Mundo Sem Fim',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T14:53:40Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'rD7bJtTDg2CuJb4Va_IsWxSk5Rk',
    id: {
      kind: 'youtube#video',
      videoId: 'YjeZjLjzlZg',
    },
    snippet: {
      publishedAt: '2021-07-28T14:15:07Z',
      channelId: 'UCqfCJBfrFSO4tZM1LNZTBFQ',
      title:
        'México vs Sudáfrica [3-0]: El Tri avanza a la siguiente fase Juegos Olímpicos Tokyo 2020 |Highlights',
      description:
        'La selección de fútbol varonil de México consiguió su pase a la siguiente ronda al vencer 3-0 a Sudáfrica en los Juegos Olímpicos de Tokyo 2020.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/YjeZjLjzlZg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/YjeZjLjzlZg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/YjeZjLjzlZg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Marca Claro',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-28T14:15:07Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'nHHhvZc5oWHFDC5wa4Ogggt8sCY',
    id: {
      kind: 'youtube#video',
      videoId: 'ak2xqQD1xzE',
    },
    snippet: {
      publishedAt: '2021-07-31T13:31:08Z',
      channelId: 'UCqfCJBfrFSO4tZM1LNZTBFQ',
      title:
        'México vs Corea del Sur en vivo: Fútbol varonil | Cuartos de final - Tokyo 2020',
      description:
        'El Tri Olímpico iniciará la fase de los Cuartos de Final con el ánimo a tope tras golear 4-0 en la última jornada de la Fase de Grupo a la nación de Sudáfrica.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ak2xqQD1xzE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ak2xqQD1xzE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/ak2xqQD1xzE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Marca Claro',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-31T13:31:08Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '7Vsi1VRBGmWqfYvzlisKgIlMshw',
    id: {
      kind: 'youtube#video',
      videoId: 'r1Zhs80DaG4',
    },
    snippet: {
      publishedAt: '2021-08-02T19:01:30Z',
      channelId: 'UC08mnbiC4FykqpHqbEWgFcg',
      title:
        '¿Qué CALIFICACIÓN se lleva México por su participación en la Copa Oro 2021? | Exclusivos',
      description:
        'México terminó su participación en la Copa Oro 2021 con un sabor amargo. El Tri cayó a mano de Estados Unidos en la final y se va con las manos vacías.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/r1Zhs80DaG4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/r1Zhs80DaG4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/r1Zhs80DaG4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ESPN Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T19:01:30Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '1b_zCL5_mDQAtG1yef9oxZZ4QCQ',
    id: {
      kind: 'youtube#video',
      videoId: 'i4B4QZLJ2hw',
    },
    snippet: {
      publishedAt: '2021-08-02T18:05:01Z',
      channelId: 'UC08mnbiC4FykqpHqbEWgFcg',
      title:
        '¿CRISIS en MÉXICO? Estados Unidos &#39;B&#39; derrotó al Tri en la Copa Oro. ¿Fuera el Tata? | Exclusivos',
      description:
        "México fue derrotado por Estados Unidos en la final de la Copa Oro, una selección estadounidense que no contaba con sus máximas estrellas. Este equipo 'B' ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/i4B4QZLJ2hw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/i4B4QZLJ2hw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/i4B4QZLJ2hw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'ESPN Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T18:05:01Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'WCSIHHRjvEEX_LsSIq5wRcLKz6A',
    id: {
      kind: 'youtube#video',
      videoId: 'XordOoC4AWk',
    },
    snippet: {
      publishedAt: '2021-07-25T04:36:10Z',
      channelId: 'UCTIyEyDNHPrwVFPhpi5dm0A',
      title: 'Resumen y goles | México 3-0 Honduras | Copa Oro 2021 - Cuartos | TUDN',
      description:
        'México vence a Honduras de forma contundente y avanza a las semifinales de la Copa Oro 2021. Síguenos en nuestras redes sociales: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/XordOoC4AWk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/XordOoC4AWk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/XordOoC4AWk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'TUDN México',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-25T04:36:10Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '5vPzo7iblDDMGws2v0cXoWbl5BM',
    id: {
      kind: 'youtube#video',
      videoId: 'blCQg-kXchk',
    },
    snippet: {
      publishedAt: '2021-08-02T04:17:01Z',
      channelId: 'UCTIyEyDNHPrwVFPhpi5dm0A',
      title:
        '🔴 EN VIVO | Post Game: Estados Unidos vs México - Gran Final Copa Oro 2021 I TUDN',
      description:
        'Disfruta del mejor análisis post partido y todo lo que debes saber de la GRAN FINAL entre Estados Unidos y México. Síguenos en nuestras redes sociales: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/blCQg-kXchk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/blCQg-kXchk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/blCQg-kXchk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'TUDN México',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T04:17:01Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'KVqErYuzGglV4P0TkEg5Z1UH0js',
    id: {
      kind: 'youtube#video',
      videoId: 'A6krxj6vdgc',
    },
    snippet: {
      publishedAt: '2021-07-22T10:35:48Z',
      channelId: 'UCqfCJBfrFSO4tZM1LNZTBFQ',
      title:
        'México vs Francia [4-1]: El Tri golea en su debut en Juegos Olímpicos Tokyo 2020 | Highlights',
      description:
        'México tuvo un debut aplastante, y dominó a la seleccion de Francia, al punto de golearlos por un marcador 4-1. http://bit.ly/2YAWO4p SUSCRÍBETE y ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/A6krxj6vdgc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/A6krxj6vdgc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/A6krxj6vdgc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Marca Claro',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-22T10:35:48Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'GaPoiyMXciz0Zj6yH95KTlFiKQU',
    id: {
      kind: 'youtube#video',
      videoId: 'or05M_1vdoI',
    },
    snippet: {
      publishedAt: '2021-07-30T05:54:56Z',
      channelId: 'UCe3Ev4a4Sm9L5aO9sJJ_WXw',
      title: 'México 2-1 Canadá | Resumen Semifinal | Copa Oro 2021',
      description:
        'Suscríbete a nuestro canal: https://www.youtube.com/AztecaDeportes?sub_confirmation=1 ------------------------------- Encuentra más información en: Sitio oficial: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/or05M_1vdoI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/or05M_1vdoI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/or05M_1vdoI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'TV Azteca Deportes',
      liveBroadcastContent: 'none',
      publishTime: '2021-07-30T05:54:56Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '9lCMZCjtx3QgeJR8ptF14H-ZniI',
    id: {
      kind: 'youtube#video',
      videoId: 'xptTyqixXB0',
    },
    snippet: {
      publishedAt: '2021-08-02T03:39:34Z',
      channelId: 'UCx6V8eA5gD0NOuh3rwmmEVQ',
      title: 'USA vs Mexico 1−0 - Extеndеd Hіghlіghts &amp; All Gоals 2021 HD',
      description:
        'USA vs Mexico 1−0 - Extеndеd Hіghlіghts & All Gоals 2021 HD United States vs Mexico Mexico vs United States United States vs México México vs United ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/xptTyqixXB0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/xptTyqixXB0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/xptTyqixXB0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Jérôme Bodin',
      liveBroadcastContent: 'none',
      publishTime: '2021-08-02T03:39:34Z',
    },
  },
];

beforeEach(() => render(<Videos videoList={videoList} />));

describe('Videos List', () => {
  it('select the first Video and test if the info is correctly rendered', () => {
    expect(screen.getByText(/mexico/i)).toBeInTheDocument();
  });
});
