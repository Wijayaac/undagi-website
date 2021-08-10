import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="bg-light">
    <div className="container" id="featured-3">
      <div className="row mt-3 g-4 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-shop"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg>
            <h2 className="d-inline px-3">About Us</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link className="text-decoration-none" to="/product">
                What is Undagi Code
              </Link>
            </li>
          </ul>
          <p className="text-muted mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt me-4"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            Jl. Baja Taki VII No.7, Dalung, Kec. Kuta Utara, Kabupaten Badung,
            Bali 80117
          </p>
          <p className="text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-open me-4"
              viewBox="0 0 16 16"
            >
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg>
            <a
              className="text-decoration-none text-dark"
              href="mailto:candrawinetra@pnb.ac.id"
            >
              Candra Winetra
            </a>
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
            </svg>
            <h2 className="d-inline px-3">Support</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                className="text-decoration-none"
                href="https://hardcore-cray-abde93.netlify.app/"
              >
                Documentation
              </a>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                className="text-decoration-none"
                to="/product/#accordionPanelsStayOpenExample"
              >
                FAQs
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" to="/article">
                Article
              </Link>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                className="text-decoration-none"
                to="https://doc.undagicode.com/"
              >
                How To Tutorials
              </a>
            </li>
          </ul>
        </div>
        <div className="feature col">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
            <h2 className="d-inline px-3">Inquiries</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                target="_blank"
                className="text-decoration-none"
                href="http://grahailmu.id/product/simple-fun-java-membuat-crud-data-master-dalam-5-menit-java-mysql-json-eclipse-ide/"
              >
                Simple Fun Java-CRUD Master
              </a>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                className="text-decoration-none"
                href="http://grahailmu.id/product/simple-fun-java-pemograman-java-gui-dengan-eclipse-ide-dan-project-game/"
              >
                Simple Fun Java-Game Project
              </a>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                className="text-decoration-none"
                href="https://www.facebook.com/undagicode/"
              >
                Find on Facebook
              </a>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                className="text-decoration-none"
                href="https://www.youtube.com/channel/UCfbr75DW_MZ1RAImm7-py7g"
              >
                Find on Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-muted">
        <small>undagicode &copy; 2021 </small>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
