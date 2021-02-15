import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ProjectsPageLayout from '../components/elements/Projects/ProjectsPageLayout'

const ProjectsPageIta = () => {
  const data = useStaticQuery(graphql`
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
            language {
              code
              locale
              slug
            }
            seo {
              title
              focuskw
              metaDesc
              metaKeywords
              opengraphDescription
              opengraphImage {
                link
              }
              opengraphTitle
              twitterDescription
              twitterImage {
                link
              }
              twitterTitle
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
  `)
  
  return(
    <ProjectsPageLayout data={data} lang="it" />
  )
}

export default ProjectsPageIta
