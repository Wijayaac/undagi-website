require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Undagi Code`,
    url: process.env.GATSBY_URL,
    description: `Create a fast, complex application using undagi code creator, just in 5 minutes`,
    author: `@wijayaac`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: process.env.GATSBY_API_URL,
        schema: {
          timeout: 30000,
          perPage: 1,
          requestConcurrency: 0,
          previewRequestConcurrency: 0,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
          hardCacheData: false,
        },
        production: {
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  15
                : // and we don't actually need more than 5000 in production for this particular site
                  15,
          },
          Page: {
            limit: 0,
          },
          MenuItem: {
            limit: 0,
          },
          Tag: {
            limit: 0,
          },
        },
        html: {
          useGatsbyImage: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins`],
        display: `swap`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-image.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: [`id`, `en`],
        // Default site language
        defaultLanguage: `en`,
        // redirects to `/en` in the route `/`
        redirect: false,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // Adding Algolia Search Service
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
      enablePartialUpdates: true, // default: false
      matchFields: ["timestamps", "modified"], // Array<String> default: ['modified']
      concurrentQueries: false, // default: true
      skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
      continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
    },
    // this (optional) plugin enables Progressive We  b App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_SHORTNAME,
      },
    },
  ],
}
