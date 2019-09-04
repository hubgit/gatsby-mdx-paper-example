const remarkSubSuper = require('remark-sub-super')
const remarkSectionize = require('remark-sectionize')
const citations = require('./remark-plugins/citations')

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
        remarkPlugins: [remarkSubSuper, remarkSectionize, citations],
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
