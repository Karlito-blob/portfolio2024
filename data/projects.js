export const projects = [
  {
    id: 1,
    number: "01",
    title: "Bourdelle",
    tags: [{
      research: "mapping, interview, user journey, ideation",
      design: "ux writing, visual identity, layout, prototype",
    }],
    description: "AR Bourdelle aims to enhance the museum experience by allowing visitors to explore Bourdelle's sculptures interactively and immersively through augmented reality. The goal was to make classical art more accessible and engaging, providing an educational and entertaining experience that sparks curiosity and appreciation for cultural heritage.",
    category: "application concept",
    cartouche: require('../assets/images/bourdelle/Bourdelle_Cartouche.png'),
    bgColor: '#0B0B0B',
    button1: 'Play Prototype',
    button1Icon: 'PlayCircleFilledWhiteOutlinedIcon',
    button2: 'Read Case Study',
    button2Icon: 'PictureAsPdfOutlinedIcon',
    images: [
      require('../assets/images/bourdelle/MOAB - Recherche.png'),
      require('../assets/images/bourdelle/MOAB - Intro.png'),
      require('../assets/images/bourdelle/MOAB - Identité.png'),
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Capsule",
    tags: [{
      research: "brainstorming, architecture, user storie",
      design: "ux writing, visual identity, UI kit, layout, prototype",
    }],
    description: "Réalisation d’une formation sur l'utilisation des composants et des kits d'interface utilisateur, aidant les participants à maîtriser les bases de Figma. L’objectif de cet atelier était de renforcer leur expertise en intégrant ces connaissances dans leurs projets.",
    category: "workshop",
    cartouche: require('../assets/images/laCapsule/LaCapsule_Cartouche.png'),
    bgColor: '#7D2CCE',
    imgBackground: require('../assets/images/laCapsule/bgImage.png'),
    button1: 'Play Prototype',
    button1Icon: 'PlayCircleFilledWhiteOutlinedIcon',
    button2: 'See work',
    button2Icon: 'LanguageOutlinedIcon',
    url1: 'https://www.figma.com/proto/S7R5gemqnM6OwIHpwaMvZD/Getting-started-with-Figma-%40LaCapsule?page-id=4%3A50&type=design&node-id=13-4624&viewport=396%2C230%2C0.25&t=okK1KOxUykriapXp-1&scaling=scale-down&starting-point-node-id=13%3A4624&mode=design',
    url2:'',
    images: [
    ]
  },
];