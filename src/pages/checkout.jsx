import React, { useState } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Checkout() {
  const URL = "https://api.whatsapp.com/send?phone="
  const PHONE = process.env.GATSBY_PHONE || 6281239884949
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [product, setProduct] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    let createLink = URL
    let validName = name.replaceAll(" ", "%20")
    let validEmail = email.replaceAll(" ", "")
    let validAddress = address.replaceAll(" ", "%20")
    let validProduct = product.replaceAll("", "%20")
    let context = await `${PHONE}&text=${
      "Product %3A" +
      validProduct +
      "%0A" +
      "Email %3A" +
      validEmail +
      "%0A" +
      "Name %3A" +
      validName +
      "%0A" +
      "Address %3A" +
      validAddress
    }`
    return window.location.assign(createLink + context)
  }
  return (
    <Layout>
      <div className="container my-5" style={{ maxWidth: "720px" }}>
        <form onSubmit={handleSubmit} className="form-control">
          <p className="h2 fw-bold my-2 text-center">
            Checkout Your Code Creator
          </p>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4">
              <label>
                <input
                  type="radio"
                  name="product"
                  onChange={e => setProduct(e.target.value)}
                  value="Undagi Code Laravel"
                  className="card-input-element"
                />
                <div className="card card-input">
                  <StaticImage
                    src="../images/laravel.svg"
                    width={150}
                    quality={80}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Laravel Logo"
                  />
                  <div className="card-body">
                    <p className="lead card-title">Undagi Code Laravel</p>
                    <small className="card-text text-muted">
                      Make a website application using framework Laravel, just
                      in five minutes.
                    </small>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <label>
                <input
                  type="radio"
                  name="product"
                  onChange={e => setProduct(e.target.value)}
                  value="Undagi Code CodeIgniter"
                  className="card-input-element"
                />

                <div className="card card-input">
                  <StaticImage
                    src="../images/codeigniter.svg"
                    width={128}
                    quality={80}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Laravel Logo"
                  />
                  <div className="card-body">
                    <p className="lead card-title">Undagi Code CodeIgniter</p>
                    <small className="card-text text-muted">
                      Make a website application using framework Code Igniter,
                      just in five minutes.
                    </small>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <label>
                <input
                  type="radio"
                  name="product"
                  onChange={e => setProduct(e.target.value)}
                  value="Undagi Code Java"
                  className="card-input-element"
                />

                <div className="card card-input">
                  <StaticImage
                    src="../images/java.svg"
                    width={150}
                    quality={80}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Laravel Logo"
                  />
                  <div className="card-body">
                    <p className="lead card-title">Undagi Code Java</p>
                    <small className="card-text text-muted">
                      Make a desktop application using Java Language. Just in
                      five minutes
                    </small>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Your Name
            </label>
            <input
              id="inputName"
              onChange={e => setName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="ex. John Deep"
              aria-label="default input example"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Physical Address
            </label>
            <textarea
              onChange={e => setAddress(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Jalan Bajataki VII No. 7, Dalung, Badung, Bali"
            ></textarea>
          </div>
          <button className="btn btn-success" type="submit">
            Buy Code Creator
          </button>
        </form>
      </div>
    </Layout>
  )
}
