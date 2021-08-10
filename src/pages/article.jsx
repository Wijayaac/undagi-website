import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Search from "../components/search"
import EnArticle from "../components/post/en-article"
import IdArticle from "../components/post/id-article"

const searchIndices = [{ name: `Posts`, title: `Posts` }]

export default function Article() {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <Layout>
      <Seo title="Blog page undagi code" />
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Articles</h1>
              <p className="lead text-muted">
                {intl.formatMessage({ id: "articleHero" })}
              </p>
            </div>
            <div className="container d-flex d-flex-column justify-content-center">
              <Search indices={searchIndices} />
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            {locale === "" ? (
              <EnArticle locale={locale} />
            ) : (
              <IdArticle locale={locale} />
            )}
          </div>
        </div>
      </main>
    </Layout>
  )
}
