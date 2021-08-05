const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  theme: '#b7daff',
  loop: 'all',
  order: 'list',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  listFolded: true,
  listMaxHeight: '200px',
  lrcType: 3,
  audio: [

    {
      name: '蕭憶情 不完美小孩',
      artist: '中文',
      url: 'https://drive.google.com/uc?export=download&id=1O2CiRbm7XcnwL0gkpJucTtDmXqVfn0Cj',
      cover: '/music/cover/不完美小孩.jpg',
      lrc: '/music/lrc/不完美小孩.lrc'
    },
    {
      name: "崔開潮 聲聲慢",
      artist: '古風',
      url: 'https://drive.google.com/uc?export=download&id=1iNYdBS0lWGfSZ3hNQiIQ6Y_5MTxAufw_',
      cover: '/music/cover/聲聲慢.jpg',
      lrc: '/music/lrc/聲聲慢.lrc',
    }
  ]
});
