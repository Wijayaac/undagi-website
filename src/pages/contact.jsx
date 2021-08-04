import React from "react"
import { Link } from "gatsby"
import "../../src/components/layout.css"
import Seo from "../components/seo"
// import { StaticImage } from "gatsby-plugin-image"

export default function Contact() {
  return (
    <div className="d-flex vh-100 text-white bg-dark">
      <Seo title="Contact" />
      <div className="cover-container d-flex w-100 h-100 p-3  mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Undagi Code</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/product">
                Product
              </Link>
              <Link className="nav-link" to="/documentation">
                Documentation
              </Link>
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/blog">
                Articles
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
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                  />
                </div>
                <div className="form-floating">
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
                  Send Email
                </button>
              </form>
            </div>
            <div className="col-md-6 col-lg-6">
              <h1>Cover your page.</h1>
              <p className="lead">
                Cover is a one-page template for building simple and beautiful
                home pages. Download, edit the text, and add your own fullscreen
                background photo to make it your own.
              </p>
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
