const JAVASCRIPT = {
  url: 'https://www.svgrepo.com/show/349419/javascript.svg',
  alt: 'JavaScript',
};

const CSS = {
  url: 'https://www.svgrepo.com/show/349330/css3.svg',
  alt: 'Css'
};

const REACT = {
  url: 'https://www.svgrepo.com/show/354259/react.svg',
  alt: 'React',
};

const REDUX = {
  url: 'https://www.svgrepo.com/show/354274/redux.svg',
  alt: 'Redux'
}

const HTML = {
  url: 'https://www.svgrepo.com/show/349402/html5.svg',
  alt: 'Html',
};

const JEST = {
  url: 'https://www.svgrepo.com/show/353930/jest.svg',
  alt: 'Jest',
}

const RTL = {
  url: 'https://testing-library.com/img/octopus-128x128.png',
  alt: 'React Testing Library'
}

const projects = [
  {
    name: 'Star Wars',
    thumb: 'https://i.imgur.com/Bpc8uLB.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Projeto-StarWars',
    urlSite: 'https://projeto-star-wars-alpha.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, CSS],
  },
  {
    name: 'Generate Password',
    thumb: 'https://i.imgur.com/inBdcGf.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Project-Password-Generator',
    urlSite: 'https://project-password-generator.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, RTL, JEST, CSS],
  },
  {
    name: 'Card Trunfo',
    thumb: 'https://i.imgur.com/0ZMWnT5.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Projeto-Tryunfo',
    urlSite: 'https://projeto-tryunfo.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, CSS]
  },
  {
    name: 'TrybeTunes',
    thumb: 'https://i.imgur.com/0aHrPxn.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Projeto-Trybetunes',
    urlSite: 'https://projeto-trybetunes.vercel.app/',
    technologyIcons: [REACT, JAVASCRIPT, CSS]
  },
  {
    name: 'Solar System',
    thumb: 'https://i.imgur.com/HB0Bami.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Sistema-Solar',
    urlSite: 'https://matheus-ferreira02.github.io/Sistema-Solar/',
    technologyIcons: [REACT, JAVASCRIPT, CSS]
  },
  {
    name: 'Trybe Wallet',
    thumb: 'https://i.imgur.com/nkVj5ta.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Project-TrybeWallet',
    urlSite: 'https://project-trybe-wallet-five.vercel.app/',
    technologyIcons: [REACT, REDUX, JAVASCRIPT, CSS],
  },
  {
    name: 'Pixels Art',
    thumb: 'https://i.imgur.com/VrAwj3y.png',
    urlGitHub: 'https://github.com/matheus-ferreira02/Pixels-Art',
    urlSite: 'https://matheus-ferreira02.github.io/Pixels-Art/',
    technologyIcons: [HTML, JAVASCRIPT, CSS],
  },
]

export default projects;
