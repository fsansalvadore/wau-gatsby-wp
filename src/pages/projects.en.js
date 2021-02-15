import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import ProjectsPageLayout from '../components/elements/Projects/ProjectsPageLayout'

const ProjectsPageIta = () => {
  const data = useStaticQuery(graphql`
    query ProjectsEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "Projects" }) {
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
        projects(first: 100, where: { status: PUBLISH, language: EN }) {
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
  `)

  return(
    <ProjectsPageLayout data={data} lang="en" />
  )
}

export default ProjectsPageIta
