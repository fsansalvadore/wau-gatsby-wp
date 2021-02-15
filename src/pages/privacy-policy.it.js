import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import PrivacyPageLayout from '../components/elements/Privacy/PrivacyPageLayout'

const PrivacyPageIta = () => {
  const data = useStaticQuery(graphql`
    query PrivacyItaQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: IT, title: "Privacy policy" }) {
          nodes {
            slug
            title
            content
            pagesACF {
              titoletto
              title
              introduzione
            }
          }
        }
      }
    }
  `)
  
  return(
    <PrivacyPageLayout data={data} lang="it" />
  )
}

export default PrivacyPageIta
