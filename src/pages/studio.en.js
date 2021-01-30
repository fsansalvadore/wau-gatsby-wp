import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import StudioPageLayout from "../components/elements/Studio/StudioPageLayout"

const StudioPageIta = () => {
  const data = useStaticQuery(graphql`
    query StudioEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "Studio" }) {
          nodes {
            slug
            title
            pagesACF {
              title
              introduzione
            }
            studioACF {
              valuesSection {
                values {
                  value1 {
                    title
                    description
                  }
                  value2 {
                    title
                    description
                  }
                  value3 {
                    title
                    description
                  }
                }
                title
              }
              video
              videonative {
                sourceUrl
                uri
                altText
                mediaItemUrl
              }
              image1 {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 1500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              image2 {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 1500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              sectionEnd {
                title
                content
              }
              sectionApproach {
                title
                content
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StudioPageLayout data={data} />
  )
}

export default StudioPageIta
