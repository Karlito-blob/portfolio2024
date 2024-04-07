export const projects = [
  {
    id: 1,
    number: "Projet n°01",
    title: "Capsule",
    tags: [{
      research: "brainstorming, architecture, user stories",
      design: "ux writing, visual identity, UI kit, layout, prototype",
    }],
    description: "Réalisation d’une formation sur l'utilisation des composants et des kits d'interface utilisateur, aidant les participants à maîtriser les bases de Figma. L’objectif de cet atelier était de renforcer leur expertise en intégrant des connaissances pour la conception de leurs projets.",
    category: "App Education",
    cartouche: require('../assets/images/laCapsule/LaCapsule_Cartouche.png'),
    bgColor: '#7D2CCE',
    imgBackground: require('../assets/images/laCapsule/bgImage.png'),
    button1: 'Voir prototype',
    button1Icon: 'PlayCircleFilledWhiteOutlinedIcon',
    button2: 'Voir le projet',
    button2Icon: 'LanguageOutlinedIcon',
    url1: 'https://www.figma.com/proto/S7R5gemqnM6OwIHpwaMvZD/Getting-started-with-Figma-%40LaCapsule?page-id=4%3A50&type=design&node-id=128-1719&viewport=-534%2C215%2C0.19&t=Uw6jRM2K0qBsVxVv-1&scaling=scale-down&starting-point-node-id=128%3A1719&mode=design',
    url2: 'https://www.figma.com/community/file/1342654436378351302/getting-started-with-figma-lacapsule',
    images: [
      require('../assets/images/laCapsule/laCapsule01.png'),
      require('../assets/images/laCapsule/laCapsule02.png'),
      require('../assets/images/laCapsule/laCapsule03.png'),
      require('../assets/images/laCapsule/laCapsule04.png'),
      require('../assets/images/laCapsule/laCapsule05.png'),
    ]
  },
  {
    id: 2,
    number: "Projet n°02",
    title: "Bourdelle",
    tags: [{
      research: "mapping, interview, user journey, ideation",
      design: "ux writing, visual identity, layout, prototype",
    }],
    description: "AR Bourdelle aims to enhance the museum experience by allowing visitors to explore Bourdelle's sculptures interactively and immersively through augmented reality. The goal was to make classical art more accessible and engaging, providing an educational and entertaining experience that sparks curiosity and appreciation for cultural heritage.",
    category: "Augmented reality",
    cartouche: require('../assets/images/bourdelle/Bourdelle_Cartouche.png'),
    bgColor: '#0B0B0B',
    imgBackground: require('../assets/images/bourdelle/bgImage.png'),
    button1: 'Play Prototype',
    button1Icon: 'PlayCircleFilledWhiteOutlinedIcon',
    button2: 'Read Case Study',
    button2Icon: 'PictureAsPdfOutlinedIcon',
    url2:  '',
    images: [
      require('../assets/images/bourdelle/MOAB - Recherche.png'),
      require('../assets/images/bourdelle/MOAB - Intro.png'),
      require('../assets/images/bourdelle/MOAB - Identité.png'),
    ]
  },
];