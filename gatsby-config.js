const path = require('path')

module.exports = {
  pathPrefix: "/deploy-test",
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 's13web0024.peakserver.net',
        hostingWPCOM: false,
        protocol: 'http',
        useACF: true,
        auth: {},
        verboseOutput: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-root-import',
    //   options: {
    //     root: path.join(__dirname, 'src'),
    //   }
    // }
  ],
}
