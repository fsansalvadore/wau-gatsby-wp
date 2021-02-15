import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import PrivacyPageLayout from '../components/elements/Privacy/PrivacyPageLayout'

const PrivacyPageEng = () => {
  const data = useStaticQuery(graphql`
    query PrivacyEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "Privacy policy" }) {
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
    <PrivacyPageLayout data={data} lang="en" />
  )
}

export default PrivacyPageEng
