import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"
const Product = () => {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <Layout>
      <Seo title="Product Undagi Code" />
      <main>
        <div
          id="myCarousel"
          className="carousel slide px-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <StaticImage
                src="../images/ci-hero.png"
                className="img-fluid bg-dark-50"
                alt="Example image"
                width={1440}
                quality={70}
                loading="lazy"
              />

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Undagi Code CodeIgniter</h1>
                  <p>{intl.formatMessage({ id: "productHeroCI" })}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="https://bit.ly/3zAXVR4"
                      target="_blank"
                    >
                      {intl.formatMessage({ id: "productHeroBtnCI" })}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <StaticImage
                src="../images/lara-hero.png"
                className="img-fluid bg-dark-50"
                alt="Example image"
                width={1440}
                quality={70}
                loading="lazy"
              />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Undagi Code Laravel</h1>
                  <p>{intl.formatMessage({ id: "productHeroLV" })}</p>
                  <p>
                    <Link
                      className="btn btn-lg btn-primary"
                      to={`${locale}/checkout`}
                    >
                      {intl.formatMessage({ id: "productHeroBtnLV" })}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <StaticImage
                src="../images/java-hero.png"
                className="img-fluid bg-dark-50"
                alt="Example image"
                width={1440}
                quality={70}
                loading="lazy"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Undagi Code Java</h1>
                  <p>{intl.formatMessage({ id: "productHeroJV" })}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="https://bit.ly/3zAXVR4"
                    >
                      {intl.formatMessage({ id: "productHeroBtnJV" })}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* 
  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. --> */}

        <div className="container marketing">
          {/* <!-- Three columns of text below the carousel --> */}
          <div className="row bg-light p-3">
            <div className="col-lg-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                fill="currentColor"
                className="bi bi-lightning mt-3 mb-3"
                viewBox="0 0 16 16"
              >
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
              </svg>

              <h2>{intl.formatMessage({ id: "productBadgeTLFT" })}</h2>
              <p>{intl.formatMessage({ id: "productBadgeDSFT" })}</p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                fill="currentColor"
                className="bi bi-check2-circle mt-3 mb-3"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>

              <h2>{intl.formatMessage({ id: "productBadgeTLEY" })}</h2>
              <p>{intl.formatMessage({ id: "productBadgeDSEY" })}</p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                fill="currentColor"
                className="bi bi-layout-wtf mt-3 mb-3"
                viewBox="0 0 16 16"
              >
                <path d="M5 1v8H1V1h4zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2v5H9V2h5zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13v2H3v-2h2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1v2H9v-2h6zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z" />
              </svg>

              <h2>{intl.formatMessage({ id: "productBadgeTLFE" })}</h2>
              <p>{intl.formatMessage({ id: "productBadgeDSFE" })}</p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
          </div>
          {/* <!-- /.row --> */}

          {/* <!-- START THE FEATURETTES --> */}

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                <span className="text-muted">Undagi Code</span> Laravel.
              </h2>
              <p className="lead">
                {intl.formatMessage({ id: "productLVDS" })}
              </p>
            </div>
            <div className="col-md-5">
              <StaticImage
                src="../images/lara-hero.png"
                className="img-fluid bg-dark-50"
                alt="Example image"
                height={500}
                width={800}
                quality={70}
                loading="lazy"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette" id="ciFeatured">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                <span className="text-muted">Undagi Code</span> CodeIgniter.
              </h2>
              <p className="lead">
                {intl.formatMessage({ id: "productCIDS" })}
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <StaticImage
                src="../images/ci-hero.png"
                className="img-fluid bg-dark-50"
                alt="Example image"
                height={500}
                width={800}
                quality={70}
                loading="lazy"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                <span className="text-muted">Undagi Code</span> Java.
              </h2>
              <p className="lead">
                {intl.formatMessage({ id: "productJVDS" })}
              </p>
            </div>
            <div className="col-md-5">
              <StaticImage
                src="../images/java-hero.png"
                className="img-fluid bg-dark-50"
                alt="Example image"
                height={500}
                width={800}
                quality={70}
                loading="lazy"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* <!-- /END THE FEATURETTES --> */}
        </div>
        {/* <!-- /.container --> */}
        <div className="container-sm" style={{ minHeight: "40vh" }}>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button text-white bg-info"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  {intl.formatMessage({ id: "faqUC" })}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  {intl.formatMessage({ id: "faqAnswerUC" })}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button bg-info text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  {intl.formatMessage({ id: "faqJVL" })}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  {intl.formatMessage({ id: "faqAnswerJVL" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Product
