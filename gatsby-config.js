const remarkSubSuper = require('remark-sub-super')
const remarkSectionize = require('remark-sectionize')
const remarkCitations = require('remark-citations')

module.exports = {
  siteMetadata: {
    title: `Articles`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [remarkSubSuper, remarkSectionize, remarkCitations],
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'popper',
        id: 'popper',
      },
    },
  ],
}
