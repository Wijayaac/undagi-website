const indexName = `Posts`

const pageQuery = `{
    pages: allWpPost {
        nodes {
          id
          title
          excerpt
          slug
        }
      }
}`

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.nodes,
    indexName,
    matchFields: ["slug", "modified"],
  },
]

module.exports = queries
