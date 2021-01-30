import React from "react"
import { graphql } from 'gatsby'
import ProjectsPageLayout from '../components/elements/Projects/ProjectsPageLayout'

const ProjectsPageIta = ({data}) => {
  return(
    <ProjectsPageLayout data={data} />
  )
}

export const query = graphql`
  query ProjectsItaQuery {
    wordpress {
      pages(where: { status: PUBLISH, language: IT, title: "Progetti" }) {
        nodes {
          slug
          title
          pagesACF {
            title
            introduzione
          }
        }
      }
      projects(first: 100, where: { status: PUBLISH, language: IT }) {
        nodes {
          content
          date
          status
          slug
          id
          title
          featuredImage {
            node {
              altText
              link
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 1500, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          tags {
            nodes {
              name
            }
          }
          ProjectAFC {
            projectdate
            location
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
`

export default ProjectsPageIta
