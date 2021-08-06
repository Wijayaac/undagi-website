import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const IdPost = ({ locale }) => {
  const data = useStaticQuery(graphql`
    query PostIdQuery {
      allWpPost(
        limit: 4
        filter: { categories: { nodes: { elemMatch: { name: { eq: "id" } } } } }
      ) {
        nodes {
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
          slug
          title
          date(fromNow: true)
          excerpt
        }
      }
    }
  `)
  const posts = data.allWpPost.nodes
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
      {posts.map(post => {
        return (
          <div className="col" key={post.slug}>
            <div className="card shadow-sm">
              {post.featuredImage ? (
                <GatsbyImage
                  alt={post.slug}
                  image={
                    post.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                />
              ) : (
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="0%" y="50%" fill="#eceeef" dy=".1em">
                    {post.title}
                  </text>
                </svg>
              )}

              <div className="card-body">
                <Link
                  className="text-decoration-none"
                  to={`${locale}/article/${post.slug}`}
                >
                  <h4 className="text-dark">{post.title}</h4>
                  <p
                    className="card-text text-secondary"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </Link>
              </div>
              <div className="card-footer">
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

IdPost.propTypes = {
  locale: PropTypes.node.isRequired,
}
export default IdPost
