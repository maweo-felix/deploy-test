module.exports = {
  pathPrefix: "/deploy-test",
}

module.exports = {
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
  ],
}
