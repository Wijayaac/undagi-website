import React from "react"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import "../../src/components/layout/layout.css"
import Seo from "../components/seo"

export default function Contact() {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <div className="d-flex vh-100 text-white bg-dark">
      <Seo title="Contact" />
      <div className="cover-container d-flex w-100 h-100 p-3  mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Undagi Code</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link" aria-current="page" to={`${locale}/`}>
                {intl.formatMessage({ id: "home" })}
              </Link>
              <Link className="nav-link" to={`${locale}/product`}>
                {intl.formatMessage({ id: "products" })}
              </Link>
              <Link className="nav-link" to={`${locale}/documentation`}>
                {intl.formatMessage({ id: "documentation" })}
              </Link>
              <Link className="nav-link active" to={`${locale}/contact`}>
                {intl.formatMessage({ id: "contact" })}
              </Link>
              <Link className="nav-link" to={`${locale}/article`}>
                {intl.formatMessage({ id: "articles" })}
              </Link>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <div className="row row-cols-md-3 text-left">
            <div className="col-md-6 col-lg-6">
              <form>
                <div className="mb-3">
                  <label forHtml="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="john@doe.com"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label forHtml="exampleInputtext" className="form-label">
                    Subject
                  </label>
                  <input
                    placeholder="ex: ask Undagi Code"
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                  />
                </div>
                <div className="mb-3">
                  <label forHtml="floatingTextarea2 text-dark-50">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: `100px` }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-6 col-lg-6">
              <h1>{intl.formatMessage({ id: "contactTL" })}</h1>
              <p className="lead">{intl.formatMessage({ id: "contactDS" })}</p>
            </div>
          </div>
        </main>

        <footer className="mt-auto text-center text-white-50">
          <p>undagicode &copy; 2021.</p>
        </footer>
      </div>
    </div>
  )
}
