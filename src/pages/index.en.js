import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import HomePageLayout from '../components/elements/HomePage/HomePageLayout'

const IndexEng = () => {
  const data = useStaticQuery(graphql`
    query HomePageEngQuery {
      wordpress {
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
        articles(first: 3, where: { status: PUBLISH, language: EN }) {
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
            categories {
              nodes {
                name
                id
              }
            }
            ArticleACF {
              anteprima
            }
          }
        }
      }
    }
  `)

  let location
  const [lang, setLang] = useState("it")

  useEffect(() => {
    if (typeof window !== `undefined`) {
        location = window.location.href
        if(location.includes("00/en") || location.includes("app/en") || location.includes("com/en")) {
          setLang("en")
        }
    }
  }, [lang])
  
  return(
    <HomePageLayout lang={lang} data={data} />
  )
}

export default IndexEng
