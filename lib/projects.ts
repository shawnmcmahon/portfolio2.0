export interface Project {
  id: number;
  title: string;
  shortTitle?: string;
  time: string;
  dateCompleted: string;
  applicationType: 'Frontend' | 'Fullstack';
  collaborators: string[];
  technologiesUsed: string[];
  description: string;
  learningGoals: string[];
  pictures: string[];
  githubRepo: string;
  deployedSite: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Better Jeopardy',
    time: '60 Hours / 2 weeks',
    dateCompleted: '08/02/2021',
    applicationType: 'Fullstack',
    collaborators: ['Dean Cook', 'Bobby Vasquez'],
    technologiesUsed: ['React', 'Express', 'PostgreSQL', 'Cypress', 'Heroku'],
    description:
      'Better Jeopardy is a full-stack trivia game that reimagines the classic game show for users who want a more accessible experience. Built with React frontend and Express backend, this application features a PostgreSQL database storing authentic Jeopardy questions. Users can play through trivia rounds, save their scores, and compete for top positions on the leaderboard.',
    learningGoals: [
      'Create a custom API utilizing Express JS.',
      'Use PostgreSQL to create a database to store questions and saved games.',
    ],
    pictures: ['/Assets/better-jeopardy/bj1.png', '/Assets/better-jeopardy/bj2.png', '/Assets/better-jeopardy/bj3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/better-jeopardy',
    deployedSite: 'https://better-jeopardy.netlify.app/',
  },
  {
    id: 2,
    title: 'Rancid Tomatillos',
    time: '60 Hours / 2 weeks',
    dateCompleted: '07/26/2021',
    applicationType: 'Frontend',
    collaborators: ['Bobby Vasquez'],
    technologiesUsed: ['React', 'CSS3', 'Github', 'Cypress', 'Heroku'],
    description:
      'Rancid Tomatillos is a React-based movie browsing application that provides users with comprehensive movie information and ratings. This frontend application consumes a movie API to display detailed film data including ratings, cast information, and movie posters.',
    learningGoals: [
      'Build a solid understanding of React fundamentals.',
      'Incorporate Cypress to test React components and asynchronous JS.',
    ],
    pictures: ['/Assets/rancid-tomatillos/rt1.png', '/Assets/rancid-tomatillos/rt2.png', '/Assets/rancid-tomatillos/rt3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/rancid-tomatillos',
    deployedSite: 'https://rancid-tomatillos-iota.vercel.app',
  },
  {
    id: 3,
    title: 'CodeHerd',
    time: '60 Hours / 2 weeks',
    dateCompleted: '09/15/2021',
    applicationType: 'Fullstack',
    collaborators: ['Zach Green', 'Ashton Huxable', 'Leigh Pulzone', 'Taija Warbelow'],
    technologiesUsed: ['React', 'GraphQL', 'PostgreSQL', 'Cypress', 'CircleCI'],
    description:
      'CodeHerd is a comprehensive project management application designed specifically for Turing School students to organize and track their development projects. Students can create project profiles, store GitHub links, track collaborators, and maintain resource libraries for each project.',
    learningGoals: [
      'Utilize Apollo/GraphQL to query and mutate data from the backend.',
      'Apply continuous integration with CircleCI.',
    ],
    pictures: ['/Assets/codeherd/ch1.png', '/Assets/codeherd/ch2.png', '/Assets/codeherd/ch3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/CodeHerd',
    deployedSite: '',
  },
  {
    id: 4,
    title: "What's Cooking?",
    time: '60 Hours / 2 weeks',
    dateCompleted: '06/15/2021',
    applicationType: 'Frontend',
    collaborators: ['Claire Fields', 'Lourdes Mendoza'],
    technologiesUsed: ['Javascript', 'Sass', 'Github', 'Mocha', 'Webpack'],
    description:
      "What's Cooking? is a smart recipe recommendation application that helps users discover meals they can prepare based on available ingredients in their pantry. Users can input their available ingredients and receive personalized recipe suggestions with cooking instructions.",
    learningGoals: [
      'Refactor a pre-existing, broken code base into a functional application.',
      'Incorporate Sass/SCSS framework to dry up CSS.',
    ],
    pictures: ['/Assets/whats-cookin/wc1.png', '/Assets/whats-cookin/wc2.png', '/Assets/whats-cookin/wc3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/refactor-tractor-wc',
    deployedSite: '',
  },
  {
    id: 5,
    title: 'Static Comp',
    time: '6 Hours / 1 day',
    dateCompleted: '05/30/2021',
    applicationType: 'Frontend',
    collaborators: [],
    technologiesUsed: ['HTML5', 'CSS', 'Github', 'Mocha', 'Normalize'],
    description:
      'Static Comp is a rapid-prototyping project that showcases the ability to quickly translate design mockups into functional HTML/CSS implementations. Completed in just 6 hours, this project features a responsive layout displaying the top 10 Billboard artists of the 2010 decade.',
    learningGoals: [
      'Replicate a comp as quickly as possible.',
      'Render elements more consistently with normalize.css.',
    ],
    pictures: ['/Assets/static-comp/sc1.png', '/Assets/static-comp/sc2.png', '/Assets/static-comp/sc3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/static-comp-2',
    deployedSite: 'https://shawnmcmahon.github.io/static-comp-2/',
  },
  {
    id: 6,
    title: 'Fit Lit',
    time: '30 Hours / 1 week',
    dateCompleted: '04/07/2021',
    applicationType: 'Frontend',
    collaborators: ['Peter Muellerleile'],
    technologiesUsed: ['Javascript', 'CSS', 'Github', 'Mocha', 'Chart.js'],
    description:
      'Fit Lit is a comprehensive fitness tracking application designed for mobile users to monitor their health and wellness data. The application features data visualization using Chart.js to display user hydration, sleep patterns, and activity metrics.',
    learningGoals: [
      'Study responsive design by creating a mobile-friendly application.',
      'Data visualization of user information with Chart.js.',
    ],
    pictures: ['/Assets/fit-lit/fl1.png', '/Assets/fit-lit/fl2.png', '/Assets/fit-lit/fl3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/refactor-tractor-wc',
    deployedSite: 'https://fitlit-sm.netlify.app/',
  },
  {
    id: 7,
    title: 'Tic Tac Toe',
    time: '30 Hours / 1 week',
    dateCompleted: '03/10/2021',
    applicationType: 'Frontend',
    collaborators: [],
    technologiesUsed: ['Javascript', 'CSS3', 'Github', 'Git', 'HTML5'],
    description:
      'Tic Tac Toe is a classic game implementation that demonstrates fundamental JavaScript programming concepts and user interface design. This vanilla JavaScript application features a complete game engine with win detection, turn management, and persistent score tracking using local storage.',
    learningGoals: [
      'Learn the fundamentals of vanilla Javascript.',
      'Incorporate local storage to have win count persist upon refresh.',
    ],
    pictures: ['/Assets/tic-tac-toe/ttt1.png', '/Assets/tic-tac-toe/ttt2.png', '/Assets/tic-tac-toe/ttt3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/tic-tac-toe',
    deployedSite: 'https://shawnmcmahon.github.io/tic-tac-toe/',
  },
  {
    id: 8,
    title: 'Self Care Center',
    time: '12 Hours / 3 Days',
    dateCompleted: '02/21/2021',
    applicationType: 'Frontend',
    collaborators: [],
    technologiesUsed: ['Javascript', 'CSS3', 'Github', 'Git', 'HTML5'],
    description:
      'Self Care Center is a wellness application designed to provide users with daily inspiration through mantras and affirmations. The application features a clean, calming interface that randomly generates motivational content to help users maintain positive mental health practices.',
    learningGoals: [
      'Gain experience with Javascript, HTML, and CSS.',
      'Understand the purpose of event listeners.',
    ],
    pictures: ['/Assets/self-care-center/scc1.png', '/Assets/self-care-center/scc2.png', '/Assets/self-care-center/scc3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/self-care-center',
    deployedSite: 'https://shawnmcmahon.github.io/self-care-center/',
  },
  {
    id: 9,
    title: 'Link Shortening Service (SMLSS)',
    shortTitle: 'SMLSS',
    time: '6 hours / 1 day',
    dateCompleted: '11/02/2025',
    applicationType: 'Fullstack',
    collaborators: [],
    technologiesUsed: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vercel'],
    description:
      'Link Shortening Service (SMLSS) is a modern, full-featured URL shortener built with Next.js, Firebase, and Tailwind CSS. This full-stack application enables users to create, manage, and track shortened links with comprehensive real-time analytics. Key features include custom alias creation, automatic short code generation, and click tracking with detailed analytics.',
    learningGoals: [
      'Build a production-ready full-stack application with Next.js and Firebase.',
      'Implement real-time analytics and data tracking with Firestore.',
    ],
    pictures: ['/Assets/smlss/smlss-1.png', '/Assets/smlss/smlss-2.png', '/Assets/smlss/smlss-3.png'],
    githubRepo: 'https://github.com/shawnmcmahon/link-shortening-service',
    deployedSite: 'https://smlss.vercel.app',
  },
];
