export type ProjectCategory =
  | 'Freelance Deliverables'
  | 'Personal Projects'
  | 'School Projects';

export const projectCategoryOrder: ProjectCategory[] = [
  'Freelance Deliverables',
  'Personal Projects',
  'School Projects',
];

export interface Project {
  id: number;
  category: ProjectCategory;
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
    category: 'Freelance Deliverables',
    title: 'Advanced Mastery Workbook',
    shortTitle: 'Advanced Mastery',
    time: 'Client Delivery',
    dateCompleted: '03/2026',
    applicationType: 'Frontend',
    collaborators: [],
    technologiesUsed: [
      'Wix Studio',
      'Responsive Design',
      'Content Architecture',
      'Custom Layouts',
      'SEO',
    ],
    description:
      'Advanced Mastery Workbook is a client-facing Wix Studio experience built for the C3 Method course platform. This freelance deliverable packages workbook content into a polished, guided learning flow with clear visual hierarchy, responsive layouts, and streamlined calls to action for course visitors.',
    learningGoals: [
      'Build a polished client deliverable inside the Wix Studio ecosystem.',
      'Create a responsive content experience that keeps course material easy to navigate.',
    ],
    pictures: [
      '/Assets/advanced-mastery-workbook/amw1.png',
      '/Assets/advanced-mastery-workbook/amw2.png',
      '/Assets/advanced-mastery-workbook/amw3.png',
    ],
    githubRepo: '',
    deployedSite:
      'https://witnesswebworksd.wixstudio.com/c3methodcourses/advancedmasteryworkbook',
  },
  {
    id: 2,
    category: 'Freelance Deliverables',
    title: 'Pristine Management',
    time: 'Client Delivery',
    dateCompleted: '03/02/2026',
    applicationType: 'Fullstack',
    collaborators: [],
    technologiesUsed: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'React Hook Form',
      'Resend',
    ],
    description:
      'Pristine Management is a professional marketing site for a Colorado HOA and Metro District management company. Built in Next.js, the project focuses on clearly explaining the difference between traditional HOAs and Metro Districts while guiding homeowners, lenders, and board members to the right service, portal, and contact flows.',
    learningGoals: [
      'Translate a service business brief into a production-ready client website.',
      'Build lead and support workflows with form validation and email delivery.',
    ],
    pictures: [
      '/Assets/pristine-management/pm1.png',
      '/Assets/pristine-management/pm2.png',
      '/Assets/pristine-management/pm3.png',
    ],
    githubRepo: 'https://github.com/shawnmcmahon/pristine-management',
    deployedSite: 'https://www.pristinemgmt.com/',
  },
  {
    id: 3,
    category: 'Personal Projects',
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
  {
    id: 4,
    category: 'Personal Projects',
    title: 'Simpsons DLE',
    time: 'Personal Build',
    dateCompleted: '09/14/2025',
    applicationType: 'Fullstack',
    collaborators: [],
    technologiesUsed: ['Next.js', 'Supabase', 'React', 'Tailwind CSS', 'Vercel'],
    description:
      'Simpsons DLE is a Simpsons-themed daily guessing game inspired by Wordle. Players identify a new character each day using color-coded hints like occupation, first episode, and hair color, while a practice mode offers unlimited random rounds with autocomplete input, guess history, and character reveals.',
    learningGoals: [
      'Design a replayable daily game loop with persistent character data.',
      'Build a polished guessing experience backed by Supabase.',
    ],
    pictures: [
      '/Assets/simpsons-dle/sd1.png',
      '/Assets/simpsons-dle/sd2.png',
    ],
    githubRepo: 'https://github.com/shawnmcmahon/simpsons-dle',
    deployedSite: 'https://simpsons-dle.vercel.app/',
  },
  {
    id: 5,
    category: 'Personal Projects',
    title: 'Community Tier List',
    time: 'Personal Build',
    dateCompleted: '03/08/2026',
    applicationType: 'Fullstack',
    collaborators: [],
    technologiesUsed: ['Next.js', 'Convex', 'Socket.IO', 'Auth.js', 'Twitch OAuth'],
    description:
      'Community Tier List is a real-time ranking platform built for Twitch communities. Hosts can create live sessions, stage items, and let viewers vote together across S, A, B, C, and D tiers while comparing streamer placements against the community board with live presence and board updates.',
    learningGoals: [
      'Coordinate real-time multiplayer interactions across web and socket services.',
      'Build a live session workflow with authentication and persistent ranking data.',
    ],
    pictures: [
      '/Assets/community-tier-list/ctl1.png',
      '/Assets/community-tier-list/ctl2.png',
      '/Assets/community-tier-list/ctl3.png',
    ],
    githubRepo: 'https://github.com/shawnmcmahon/community-tier-list',
    deployedSite: 'https://community-tier-list-web.vercel.app/',
  },
  {
    id: 6,
    category: 'School Projects',
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
    id: 7,
    category: 'School Projects',
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
    id: 8,
    category: 'School Projects',
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
    id: 9,
    category: 'School Projects',
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
    id: 10,
    category: 'School Projects',
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
    id: 11,
    category: 'School Projects',
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
    id: 12,
    category: 'School Projects',
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
    id: 13,
    category: 'School Projects',
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
];
