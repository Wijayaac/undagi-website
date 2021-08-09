import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"

const Header = ({ siteTitle }) => {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  return (
    <div className="container bg-gray">
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <StaticImage
            src="../images/logo-image.png"
            width={48}
            quality={70}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="undagi code logo"
          />
          <span className="fs-4">{siteTitle}</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item fw-bold ">
            <Link
              to={`${locale}/`}
              className="nav-link text-dark"
              aria-current="page"
            >
              {intl.formatMessage({ id: "home" })}
            </Link>
          </li>
          <li className="nav-item fw-bold ">
            <Link to={`${locale}/product`} className="nav-link text-dark">
              {intl.formatMessage({ id: "products" })}
            </Link>
          </li>
          <li className="nav-item fw-bold">
            <a
              className="nav-link text-dark"
              href="https://doc.undagicode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {intl.formatMessage({ id: "documentation" })}
            </a>
          </li>
          <li className="nav-item fw-bold ">
            <Link to={`${locale}/contact`} className="nav-link text-dark">
              {intl.formatMessage({ id: "contact" })}
            </Link>
          </li>
          <li className="nav-item fw-bold ">
            <Link to={`${locale}/article`} className="nav-link text-dark">
              {intl.formatMessage({ id: "articles" })}
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
