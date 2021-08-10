import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from "gatsby-plugin-intl"
import React, { Component } from "react"
import { Helmet } from "react-helmet"

import enFlag from "../../images/en-flag.svg"
import idFlag from "../../images/id-flag.svg"
class LanguageSwitcher extends Component {
  getImageByCode(code) {
    return code === "en" ? enFlag : idFlag
  }

  renderLanguageChoice(code, label, currentLocale) {
    return (
      <button
        key={code}
        className={`dropdown-item link-button ${
          currentLocale === code ? "active" : ""
        }`}
        onClick={() => changeLocale(code)}
      >
        <img
          src={this.getImageByCode(code)}
          alt={label}
          className="mr-2"
          width="24px"
        />
        {label}
      </button>
    )
  }

  render() {
    const languageNames = [
      { code: "en", label: " English" },
      { code: "id", label: " Indonesia" },
    ]

    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <li className="nav-item dropdown ml-lg-2">
            <Helmet>
              <html lang={currentLocale} />
            </Helmet>
            <button
              className="nav-link dropdown-toggle link-button"
              id="langDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={this.getImageByCode(currentLocale)}
                alt="Language"
                width="24px"
              />
            </button>
            <div className="dropdown-menu" aria-labelledby="langDropdown">
              {languageNames.map(l =>
                this.renderLanguageChoice(l.code, l.label, currentLocale)
              )}
            </div>
          </li>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)
