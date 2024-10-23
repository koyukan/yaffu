import { Timeline } from 'yaffu';

const timeline = new Timeline('1080p', true);

/*
        0    5    10   15   20   25   30   35   40   45   50   55   60   65   70   75   80
--------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|--
alice        [===========]                 [=======================================]
bob             [===========]                   [========================]                           
charlie            [===========]                     [==============]                                
david                 [===========]                       [====]                                     
screen                                [=======================================]                      
*/

timeline.addTrack('ce80f86d-916f-4736-b18d-aa634f26055c').addClips([
  {
    path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.ce80f86d-916f-4736-b18d-aa634f26055c.1.1-audio-1.opus',
    startOffset: 0,
    overrideDuration: 313240,
  },
  {
    path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.ce80f86d-916f-4736-b18d-aa634f26055c.1.1-video-0.webm',
    startOffset: 11.063,
    overrideDuration: 313201,
  },
]);

timeline.addTrack('82241280-5a4c-4d8b-a36f-03ab37976333').addClips([
  {
    path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.82241280-5a4c-4d8b-a36f-03ab37976333.1.1-audio-1.opus',
    opts: ['-ss 80'],
    startOffset: 12434.366,
    overrideDuration: 300860,
  },
  {
    path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.82241280-5a4c-4d8b-a36f-03ab37976333.1.1-video-0.webm',
    startOffset: 12449.803,
    overrideDuration: 300815,
  },
]);


timeline.addTrack('c71919ff-75e5-4cc9-a170-094f3fd6ae5e').addClips([
    {
    path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.c71919ff-75e5-4cc9-a170-094f3fd6ae5e.1.1-audio-1.opus',
    startOffset: 26553.75,
    overrideDuration: 286660,
    },
    {
    path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.c71919ff-75e5-4cc9-a170-094f3fd6ae5e.1.1-video-0.webm',
    startOffset: 26554.618,
    overrideDuration: 286632,
    },
]);

timeline.addTrack('a6ee1504-f427-4258-98db-be7a77fa8dae').addClips([
    {
        path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.a6ee1504-f427-4258-98db-be7a77fa8dae.1.1-audio-1.opus',
        startOffset: 163757.697,
        overrideDuration: 149520,
    },
    {
        path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.a6ee1504-f427-4258-98db-be7a77fa8dae.1.1-video-0.webm',
        startOffset: 163776,
        overrideDuration: 149541,
    },
]);

timeline.addTrack('Desktop', 'presentation').addClip({
  path: '/home/anayurt/Downloads/cloud_recordings/1e2de758-7ca8-45f2-b11c-1a810a839b92/1e2de758-7ca8-45f2-b11c-1a810a839b92.ce80f86d-916f-4736-b18d-aa634f26055c.1.2-video-2.webm',
  startOffset: 34422.189,
  overrideDuration: 2001,
});

await timeline.render('timeline424.mp4');
