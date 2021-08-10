import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import { useIntl } from "gatsby-plugin-intl"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout/"

export default function BlogPost({ data }) {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const post = data.allWpPost.nodes[0]
  const metaUrl = data.site.siteMetadata.url
  const disqusConfig = {
    url: `${metaUrl}/${locale}/article/${post.slug}`,
    identifier: post.slug,
    title: post.title,
  }
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "200px 0px",
  })
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  })

  return (
    <Layout>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">{post.title}</h1>
            <p
              className="lead my-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></p>
            <p className="lead mb-0">
              <a href="#blogContent" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <article className="blog-post">
              <p className="blog-post-meta">{post.date} by undagicode</p>
            </article>
            <article
              id="blogContent"
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Code Creator is the application to create your CRUD code
                  system automatically. It can make the Java, the Laravel or the
                  CodeIgniter code. Just in five minutes, your application is
                  ready to use.
                </p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Social Media</h4>
                <ol className="list-unstyled">
                  <li>
                    <a
                      className="text-decoration-none d-block text-danger"
                      href="https://www.youtube.com/channel/UCfbr75DW_MZ1RAImm7-py7g"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="me-4 bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none d-block text-primary"
                      href="https://www.facebook.com/undagicode/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="me-4 bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      Facebook
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div ref={ref} className="col-md-8 disqus-thread">
            {inView && <Disqus config={disqusConfig} />}
          </div>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "MMMM DD, YY")
        excerpt
      }
    }
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`

const useElementOnScreen = options => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const callbackFunction = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
      observer.disconnect()
    }
  }, [containerRef, options])
  return [containerRef, isVisible]
}
