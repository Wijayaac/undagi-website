import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  let posts = data.allWpPost.nodes
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <Layout>
      <Seo title="Home" />
      {/* Hero Sections */}
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Undagi Code Creator</h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">
            Buat dengan cepat dan tanpa coding sedikitpun aplikasi website
            maupun desktop, dengan Undagi Code creator kamu tidka perlu belajar
            coding dari nol untuk membuat aplikasi yang bisa kamu gunakan untuk
            kebutuhan tugas, kantor, maupun untuk kamu kembangkan menjadi
            aplikasi yang lebih besar.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Coba Gratis
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm px-4"
            >
              Cara Penggunaan
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: `80vh` }}>
          <div className="container px-5">
            <StaticImage
              src="../images/hero.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width={1200}
              quality={70}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Product Links Sections */}
      <div
        className="row row-cols-1 row-cols-md-3 mb-3 mx-auto text-center"
        style={{ maxWidth: `50vw` }}
      >
        <div className="col">
          <div className="card-body">
            <StaticImage
              src="../images/UCCodeIgniter.svg"
              className="mb-4"
              alt="Example image"
              width={100}
              quality={80}
              loading="lazy"
            />
            <Link
              to="/undagi"
              className="d-block card-title pricing-card-title fs-6 fw-bold text-decoration-none"
            >
              Undagi Code CodeIgniter
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card-body">
            <StaticImage
              src="../images/UCJava.svg"
              className="mb-4"
              alt="Example image"
              width={100}
              quality={80}
              loading="lazy"
            />
            <Link
              to="/undagi"
              className="d-block card-title pricing-card-title fs-6 fw-bold text-decoration-none"
            >
              Undagi Code Java
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card-body">
            <StaticImage
              src="../images/UCLaravel.svg"
              className="mb-4"
              alt="Example image"
              width={100}
              quality={80}
              loading="lazy"
            />
            <Link
              to="/undagi"
              className="d-block card-title pricing-card-title fs-6 fw-bold text-decoration-none"
            >
              Undagi Code Laravel
            </Link>
          </div>
        </div>
      </div>

      {/* Youtube Videos Sections */}
      <div className="album py-5 bg-light">
        <div className="container">
          <p className="fs-3">Watch on Youtube</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/jeR2mGXSO-o?rel=0"
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    Video guide on how to install Undagi Code CodeIgniter, and
                    start create a new project soon, with rich features, and
                    fast development time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/DTzxp5EXFLM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    Web development tutorial with Undagi Code Laravel, create
                    fast, CRUD features website application, in just five
                    minutes development time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/JUC2VC0bbOA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    Create desktop application with CRUD module, in just five
                    minutes. Dinamic data storage using MySQL and soon another
                    DBMS. Undagi Code Java.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/jeR2mGXSO-o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    Video guide on how to install Undagi Code CodeIgniter, and
                    start create a new project soon, with rich features, and
                    fast development time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Sections */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/features.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width={800}
              quality={70}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Dilengkapi berbagai fitur
            </h1>
            <p className="lead">
              Dengan Undagi Code Creator kamu bisa membuat sebuah aplikasi yang
              memiliki fitur Validasi, Export laporan ke file MS. Excel / PDF,
              Upload gambar dan file document seperti PDF/ Ms. Word. Dan yang
              paling penting adalah bisa di berbagai platform, Desktop , Website
              hanya dalam waktu 5 menit.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Coba Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Blogs Sections */}
      <div className="album py-5 bg-light">
        <div className="container">
          <p className="fs-3">Read our article</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {posts.map(post => {
              return (
                <div className="col" key={post.slug}>
                  <div className="card shadow-sm">
                    <GatsbyImage
                      image={
                        post.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                    />
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
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(limit: 4) {
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
`
