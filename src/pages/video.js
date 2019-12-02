import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import VideoCard from "../components/video-card/video-card"
import NextPageBlock from "../components/next-page-block/next-page-block"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"

const videoPage = {
  videos: [
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Маленький шаг",
      url: "KCtLAqD63G4",
    },
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Аэропорты",
      url: "KCtLAqD63G4",
    },
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Иду на красный",
      url: "KCtLAqD63G4",
    },
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Баста",
      url: "KCtLAqD63G4",
    },
  ],
  background: {
    xs: "/images/videopage-bg-fullsize.jpg",
    sm: "/images/videopage-bg-fullsize.jpg",
    md: "/images/videopage-bg-fullsize.jpg",
    lg: "/images/videopage-bg-fullsize.jpg",
  },
  moreVideosUrl: "https://www.youtube.com/user/MartaKotMusic",
}

const VideoPage = props => {
  const { getVideo } = props.data.marta
  console.log("getHomePage", getVideo)
  return (
    <Layout bg={videoPage.background}>
      <div className="inner-container">
        <PageTitle title="Видео" />
        <div className="video">
          {videoPage.videos.map((video, index) => (
            <VideoCard {...video} key={index} />
          ))}
        </div>
        <ButtonMore title="Больше видео" moreUrl={videoPage.moreVideosUrl} />
        <NextPageBlock link="/music" title="Музыка" />
      </div>
      <PageFooter />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    marta {
      getVideo {
        background {
          xs {
            url
          }
          sm {
            url
          }
          md {
            url
          }
          lg {
            url
          }
        }
        moreVideosUrl
        videos {
          visibly
          preview {
            mp4 {
              url
            }
            webm {
              url
            }
            ogg {
              url
            }
          }
          name
          url
        }
      }
    }
  }
`

export default VideoPage
