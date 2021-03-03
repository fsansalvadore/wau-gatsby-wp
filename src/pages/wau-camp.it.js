import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import WauCampPageLayout from "../components/elements/WauCamp/WauCampPageLayout";

const WauCampIta = () => {
  const data = useStaticQuery(graphql`
    query WauCampItaQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: IT, title: "WAU CAMP" }) {
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

  return(
    <WauCampPageLayout data={data} />
  )
}

export default WauCampIta
