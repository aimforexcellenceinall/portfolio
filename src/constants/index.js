import {
  frontend,
  backend,
  ux,
  prototyping,
  linkedin,
  github,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  postman,
  rspec,
  tailwind,
  salesforce,
  nodejs,
  git,
  visily,
  jest,
  postgresql,
  rubyrails,
  firebase,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Rspec",
    icon: rspec,
  },
  {
    name: 'Salesforce',
    icon: salesforce,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "visily",
    icon: visily,
  },
  {
    name: "jest",
    icon: jest,
  },
];

const socialProfiles = [
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/jeremiejoseph",
    icon: linkedin,
    extraClasses: "bg-night",
  },
  {
    name: "Github",
    url: "https://github.com/aimforexcellenceinall",
    icon: github,
    extraClasses: "bg-night",
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "LEARN Academy",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Nov 2023 - Present",
  },
  {
    title: "Chaplain Candidate",
    company_name: "US Army",
    icon: microverse,
    iconBg: "#333333",
    date: "Apr 2023 - Present",
  },
  {
    title: "Strategic Operations Specialist (MOS 13J)",
    company_name: "US Army",
    icon: microverse,
    iconBg: "#333333",
    date: "Jul 2020 - Mar 2023",
  },
  {
    title: "Professional Chauffeur",
    company_name: "Independent",
    icon: dcc,
    iconBg: "#333333",
    date: "Jul 2015 - Jul 2020",
  },
  {
    title: "Media Production Lead (MOS 25V)",
    company_name: "US Army",
    icon: microverse,
    iconBg: "#333333",
    date: "Feb 2008 - Feb 2016",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Cat Tinder",
    description: "A playful matchmaking app for cats.",
    tags: [
      {
        name: "react",
        color: "react-blue",
      },
      {
        name: "rails",
        color: "rails-pink",
      },
      {
        name: "css",
        color: "css-blue",
      },
    ],
    image: komikult,
    repo: "https://github.com/aimforexcellenceinall/cat-tinder-frontend",
    demo: "https://cat-tinder-frontend-9lwp.onrender.com",
  },
  {
    id: "project-2",
    name: "Pig Latin Translator",
    description:
      "An English-to-Pig Latin translator for playful language exploration.",
    tags: [
      {
        name: "react",
        color: "react-blue",
      },
      {
        name: "css",
        color: "css-blue",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/aimforexcellenceinall/pig-latin",
    demo: "https://jeremiejoseph-pig-latin-translator.netlify.app",
  },
  {
    id: "project-3",
    name: "Treasure Hunt Game",
    description: "An app where players navigate a grid to find hidden treasures.",
    tags: [
      {
        name: "react",
        color: "react-blue",
      },
      {
        name: "css",
        color: "css-blue",
      },
    ],
    image: math,
    repo: "https://github.com/aimforexcellenceinall/treasure-hunt",
    demo: "https://jeremiejoseph-treasure-hunt.netlify.app",
  },
  {
    id: "project-4",
    name: "Tic Tac Toe",
    description: `A digital rendition of the classic two-player strategy game.`,
    tags: [
      {
        name: "react",
        color: "react-blue",
      },
      {
        name: "css",
        color: "css-blue",
      },
    ],
    image: movie,
    repo: "https://github.com/aimforexcellenceinall/tic-tac-toe",
    demo: "https://jeremiejoseph-tic-tac-toe.netlify.app",
  },
  // {
  //   id: "project-5",
  //   name: "Text-based Game",
  //   description:
  //     "A monster-battle RPG focusing on team building and battles.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "react-blue",
  //     },
  //     {
  //       name: "ruby",
  //       color: "ruby-red",
  //     },
  //     {
  //       name: "css",
  //       color: "css-blue",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/aimforexcellenceinall/text-based-pikachu-game",
  //   demo: "https://github.com/aimforexcellenceinall/text-based-pikachu-game",
  // },
];

export { services, technologies, experiences, projects, socialProfiles };