import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EnPost from "../components/post/en-home"
import IdPost from "../components/post/id-home"
import YoutubeEmbed from "../components/youtube-embed"

export default function Home() {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <Layout>
      <Seo title="Home" />
      {/* Hero Sections */}
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Undagi Code Creator</h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">{intl.formatMessage({ id: "homeHero" })}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              <Link
                className="text-decoration-none text-white fw-bold"
                to={`${locale}/product`}
              >
                {intl.formatMessage({ id: "homeBtnHeroPrim" })}
              </Link>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm px-4"
            >
              <a
                className="text-decoration-none text-secondary"
                href="https://doc.undagicode.com/"
                target="_blank"
              >
                {intl.formatMessage({ id: "homeBtnHeroSec" })}
              </a>
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
              alt="UCCodeIgniter"
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
              alt="UCJava"
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
              alt="UcLaravel"
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
        <YoutubeEmbed />
      </div>

      {/* Banner Sections */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/features.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="features"
              width={800}
              quality={70}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              {intl.formatMessage({ id: "homeFeaturedTL" })}
            </h1>
            <p className="lead">{intl.formatMessage({ id: "homeFeatured" })}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                <Link
                  className="text-decoration-none text-white fw-bold"
                  to={`${locale}/product`}
                >
                  {intl.formatMessage({ id: "homeBtnFeatured" })}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Blogs Sections */}
      <div className="album py-5 bg-light">
        <div className="container">
          <p className="fs-3">{intl.formatMessage({ id: "homeArticleTL" })}</p>
          {locale === "" ? (
            <EnPost locale={locale} />
          ) : (
            <IdPost locale={locale} />
          )}
        </div>
      </div>
    </Layout>
  )
}
