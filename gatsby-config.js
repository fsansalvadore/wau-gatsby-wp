// const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `WAU Architetti`,
    titleTemplate: "%s",
    description: `WAU ARCHITETTI description`,
    author: ``,
    url: "https://wauarchitetti.com/", // No trailing slash allowed!
    siteUrl: `https://wauarchitetti.com/`,
    image: "src/images/Wau-Architetti-social.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: ""
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WORDPRESS",
        fieldName: "wordpress",
        url: "https://www.fsansalvadore.com/dev/wau/wp/graphql",
        refetchInterval: 60,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'it',
        langKeyForNull: 'it ',
        prefixDefault: false,
        useLangKeyLayout: false
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
        // path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WAU Architetti`,
        short_name: `WAU`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
        // crossOrigin: `use-credentials`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            // Add any options here
        },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ]
}