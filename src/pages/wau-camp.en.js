import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import WauCampPageLayout from "../components/elements/WauCamp/WauCampPageLayout";

const WauCampEng = () => {
  const data = useStaticQuery(graphql`
    query WauCampEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "WAU CAMP" }) {
          nodes {
            slug
            title
            pagesACF {
              title
              introduzione
            }
          }
        }
      }
    }
  `)

  return (
    <WauCampPageLayout data={data} />
  )
}

export default WauCampEng
