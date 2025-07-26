/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "hMphj1XwhEfNR1XHvuwErP",
        token: "RbWg5nWWcBK5MLfpY4dUReG38OU7GgvhygxOtKfypKIOJrl2x7rVANOSr93FfKWq3LKIhAllVC7fff7j6gbg",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
