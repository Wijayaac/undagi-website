import React from "react"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
// import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"

export default function About() {
  const intl = useIntl()
  const locale = intl.locale !== "en" ? `${intl.locale}` : ""

  return (
    <Layout>
      <Seo title="About" />
      <h1 className="display-4 fw-bold">
        {intl.formatMessage({ id: "about" })}
      </h1>
      <div className="col-lg-8 mx-auto">
        {intl.locale === "en" ? (
          <p className="lead mb-4">
            Create quickly and without coding a website application or desktop,
            with Undagi Code creator you don't need to learn coding from scratch
            to create applications that you can use for the needs of tasks,
            offices, or for you to develop into larger application.
          </p>
        ) : (
          <p className="lead mb-4">
            Buat dengan cepat dan tanpa coding sedikitpun aplikasi website
            maupun desktop, dengan Undagi Code creator kamu tidka perlu belajar
            coding dari nol untuk membuat aplikasi yang bisa kamu gunakan untuk
            kebutuhan tugas, kantor, maupun untuk kamu kembangkan menjadi
            aplikasi yang lebih besar.
          </p>
        )}
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
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
    </Layout>
  )
}
