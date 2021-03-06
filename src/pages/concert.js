import React from "react"
import { graphql } from "gatsby"
import { formatWithOptions } from "date-fns/fp"
import ru from "date-fns/locale/ru"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"
import { useClientQuery } from "../libs/useClientQuery"
import gql from "graphql-tag"

const clientQuery = gql`
    {
        getHomePage {
            updateAt
            socialList {
                name
                url
                hoverIcon{
                    url
                }
                image {
                    url
                }
            }
        }
        getConcerts {
            updateAt
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
            visibly
            concerts {
                visibly
                name
                city
                address
                date
                url
            }
        }
    }
`

const ConcertPage = props => {
  const { getConcerts, getHomePage } = useClientQuery(props.data.marta, clientQuery, [
    "getConcerts", "getHomePage",
  ])
  const dateToString = formatWithOptions({ locale: ru }, "d MMMM yyyy")
  return (
    <Layout isVisibleConcert={getConcerts && getConcerts.visibly} bg={getConcerts && getConcerts.background}>
      <div className="inner-container">
        <PageTitle title="Концерты"/>
        <div className="concerts">
          {
            getConcerts
            && getConcerts.concerts
            && getConcerts.concerts
              .filter(item => item.visibly === true)
              .map((concert, index) => (
                <a
                  aria-label="concert link"
                  href={concert.url || ""}
                  onClick={(event) => concert.url ? null : event.preventDefault()}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  style={{
                    cursor: concert.url ? "pointer" : "default",
                  }}
                >
                  <div className="concerts_item">
                    <p style={{
                      cursor: concert.url ? "pointer" : "default",
                    }} className="links">{concert.address}</p>
                    <h2 className="title_h2">{concert.city}</h2>
                    <h2 className="title_h2 title_h2--stroke">
                      {dateToString(new Date(concert.date))}
                    </h2>
                  </div>
                </a>
              ))}
        </div>
        <NextPageBlock link="/video" title="Видео"/>
      </div>
      <PageFooter socialList={getHomePage && getHomePage.socialList}/>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
        marta {
            getHomePage {
                updateAt
                socialList {
                    name
                    url
                    hoverIcon{
                        url
                    }
                    image {
                        url
                    }
                }
            }
            getConcerts {
                updateAt
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
                visibly
                concerts {
                    visibly
                    name
                    city
                    address
                    date
                    url
                }
            }
        }
    }
`

export default ConcertPage
