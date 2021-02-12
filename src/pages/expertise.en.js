import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import ExpertisesPageLayout from '../components/elements/Expertise/ExpertisePageLayout'

const ExpertisesPageIta = () => {
  const data = useStaticQuery(graphql`
    query ExpertisesEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "Studio" }) {
          nodes {
            slug
            title
            pagesACF {
              title
              introduzione
            }
          }
        }
        expertises(first: 100, where: { status: PUBLISH, language: EN }) {
          nodes {
            date
            status
            slug
            id
            title
            expertiseACF {
              anteprima
            }
            language {
              code
              locale
              slug
            }
          }
        }
      }
    }
  `)

  return(
    <ExpertisesPageLayout data={data} lang="en" />
  )
}

export default ExpertisesPageIta
