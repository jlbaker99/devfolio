module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Joseph Baker',
    // Main Site Title
    title: `Joseph Baker | Full-Stack Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer | Full Stack | Entrepreneur`,
    // Optional: Twitter account handle
    
    // Optional: Github account URL
    github: `https://github.com/jlbaker99/`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/joseph-l-baker/`,
    // Content of the About Me section
    about: `I am a full stack software engineer coming from a background in food production and safety. I know keeping the consumer safe is always top priority. I hold true to that key value when it comes to my code, making sure user information is protected at all times.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Green Sphere Training',
        description:
          'Training Platform built for Green Sphere Landscaping to use with employees.',
        link: 'https://ga-capstone-project-joe.web.app/',
      },
      {
        name: 'GamesXpress',
        description:
          'Games library with social aspects such as likes, comments, and messaging.',
        link: 'https://gamesxpress.herokuapp.com/games',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'General Assembly | Software Engineering Immersive Student',
        description: 'Developed four projects during a 12-week 480+ hours immersive software engineering course focusing on full-stack front-end/back-end web development, problem-solving, and collaboration using proper version control.',
        link: 'https://www.linkedin.com/school/general-assemb-ly/mycompany/',
      },
      {
        name: 'Cargill | Line Operator',
        description: 'Maintained food safety and production on 7 different production lines to produce safe food for consumers.',
        link: 'https://www.linkedin.com/company/cargill/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, HTML, CSS, jQuery, Node, Express, React, Python, Django',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostgresSQL, Firestore',
      },
      {
        name: 'Other',
        description:
          'Object Oriented Programming, MVC Pattern, Responsive Design, Authentication, User Stories, ERDs, Wireframing, Agile Development/Scrum'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
