import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Search from "../components/search"

const searchIndices = [{ name: `Posts`, title: `Posts` }]

export default function Article({ data }) {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  let posts = data.allWpPost.nodes
  return (
    <Layout>
      <Seo title="Blog page undagi code" />
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Articles</h1>
              <p className="lead text-muted">
                Sebarkan pengetahuanmu sehingga kamu selalu uptodate dengan
                teknologi yang ada pada saat ini, pengembangkan projectmu dengan
                lebih baik bersama Undagi Code Creator
              </p>
            </div>
            <div className="container d-flex d-flex-column justify-content-center">
              <Search indices={searchIndices} />
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {posts.map(post => {
                return (
                  <div className="col" key={post.slug}>
                    <Link
                      className="text-decoration-none"
                      to={`${locale}/article/${post.slug}`}
                    >
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
                          <h4 className="text-dark">{post.title}</h4>
                          <p
                            className="card-text text-secondary"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allWpPost {
//       nodes {
//         title
//         date
//         excerpt
//         slug
//         featuredImage {
//           node {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(layout: FULL_WIDTH)
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
