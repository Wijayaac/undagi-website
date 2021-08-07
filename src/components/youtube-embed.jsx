import React from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"

const YoutubeEmbed = () => {
  return (
    <div className="container">
      <p className="fs-3">Watch on Youtube</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <LiteYouTubeEmbed
              id="jeR2mGXSO-o"
              poster="default"
              title="YouTube video player"
            />
            <div className="card-body">
              <p className="card-text">
                Video guide on how to install Undagi Code CodeIgniter, and start
                create a new project soon, with rich features, and fast
                development time.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <LiteYouTubeEmbed
              id="DTzxp5EXFLM"
              poster="default"
              title="YouTube video player"
            />
            <div className="card-body">
              <p className="card-text">
                Web development tutorial with Undagi Code Laravel, create fast,
                CRUD features website application, in just five minutes
                development time.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <LiteYouTubeEmbed
              id="JUC2VC0bbOA"
              poster="default"
              title="YouTube video player"
            />
            <div className="card-body">
              <p className="card-text">
                Create desktop application with CRUD module, in just five
                minutes. Dinamic data storage using MySQL and soon another DBMS.
                Undagi Code Java.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <LiteYouTubeEmbed
              id="jeR2mGXSO-o"
              poster="default"
              title="YouTube video player"
            />
            <div className="card-body">
              <p className="card-text">
                Video guide on how to install Undagi Code CodeIgniter, and start
                create a new project soon, with rich features, and fast
                development time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutubeEmbed
