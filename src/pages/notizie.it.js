import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import ArticlesPageLayout from '../components/elements/Articles/ArticlesPageLayout'

const NewsPageIta = () => {
  const data = useStaticQuery(graphql`
    query ArticlesItaQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: IT, title: "Notizie" }) {
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
        articles(first: 100, where: { status: PUBLISH, language: IT }) {
          nodes {
            date
            content
            slug
            id
            title
            language {
              code
              locale
              slug
            }
            featuredImage {
              node {
                sourceUrl(size: LARGE)
                imageFile {
                  childImageSharp {
                    fixed(width: 1500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            categories {
              nodes {
                name
                id
              }
            }
            ArticleACF {
              anteprima
              introduzione
            }
          }
        }
      }
    }
  `)

  return(
    <ArticlesPageLayout data={data} lang="it" />
  )
}

export default NewsPageIta
