/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AA_SE', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, there! My name is',
  name: 'Ali Azimi',
  subtitle: "I'm a Full-Stack Software Engineer",
  cta: 'Know_more',
};

// ABOUT DATA
export const aboutData = {
  img: 'smlAli.PNG',
  paragraphOne:
    'I have experience working using languages such as HTML5,CSS and JavaScript as well as the React.js , .NET/C# and SQL frameworks.',
  paragraphTwo:
    'I have a diverse background and various experiences in different Industries, but I have found the technical fields to be the most rewarding. It is a challenging field that allows me to use my knowledge and experience to solve complex problems. ',
  paragraphThree:
    'In addition to my technical skills, I have strong interpersonal skills, which allow me to collaborate well in teams to meet project goals. I also have the ability to work independently as well as in a team setting.',
  paragraphFour: "I'm determined, driven and pride myself on my work ethic and positive attitude.",
  resume: '../images/AliAzimi-Software_Engineer.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'AnalyticsDashboard.PNG',
    title: 'Interrogas',
    info: 'Interrogas is an online platform guiding users through historical election data generated by Pollsters and providing forecast projections for upcoming elections based on this information,incorporating data visualization and georeferenced mapping.',
    info2: " Connected Google Analytics to the Interrogas web page in order to track page traffic and user behaviors on the Google Analytics website.",
    info3: "Set up OAuth2.0 in React to allow users to sign in to an analytics page, using an approved Google account, and constructed endpoints to connect to the Google Analytics API and retrieve specified data for users.",
    info4:"Created a Google service account and made API endpoint controllers, services, and interfaces in .NET(C#) to automatically submit proper credentials for site admins.",
    info5: "Constructed the analytics dashboard and integrated the use of apex charts in React to display data through dynamic interactive charts.",
    url: 'https://interrogas.azurewebsites.net/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ali-azimi-software-engineer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ali-Azimi00',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
