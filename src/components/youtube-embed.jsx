import React from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { useIntl } from "gatsby-plugin-intl"
const YoutubeEmbed = () => {
  const intl = useIntl()
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
                {intl.formatMessage({ id: "homeYTUC" })}
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
                {intl.formatMessage({ id: "homeYTLV" })}
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
                {intl.formatMessage({ id: "homeYTJV" })}
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
                {intl.formatMessage({ id: "homeYTUC" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutubeEmbed
