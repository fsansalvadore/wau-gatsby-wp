import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import TeamPageLayout from '../components/elements/Team/TeamPageLayout'

const TeamPageIta = () => {
  const data = useStaticQuery(graphql`
    query TeamEngQuery {
      wordpress {
        team_members(first: 100, where: { status: PUBLISH, language: IT }) {
          nodes {
            date
            title
            featuredImage {
              node {
                altText
                link
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 1200, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            teamMemberAFC {
              ruolo
              descrizione
              email
              founder
            }
            language {
              code
              locale
              slug
            }
          }
        }
        collaborators(first: 100, where: { status: PUBLISH }) {
          nodes {
            date
            title
          }
        }
        pages(where: { status: PUBLISH, language: IT, title: "Team" }) {
          nodes {
            slug
            title
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
    <TeamPageLayout data={data} lang="it" />
  )
}

export default TeamPageIta
