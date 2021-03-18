import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import HomePageLayout from '../components/elements/HomePage/HomePageLayout'

const IndexIta = () => {
  const data = useStaticQuery(graphql`
    query HomePageItaQuery {
      wordpress {
        page(id: "cG9zdDo4NDk=") {
          homePageACF {
            introWords
            testoDentroSfera
            sezioneContatti {
              paragrafo
              tasto {
                link
                testo
              }
              titolo
            }
            sezioneExpertise {
              titoletto
              titolo
              tasto {
                link
                testo
              }
            }
            sezioneStudio {
              paragrafo
              titoletto
              titolo
              tasto {
                link
                testo
              }
            }
            sezioneVision {
              paragrafo
              titoletto
              titolo
              tasto {
                link
                testo
              }
            }
            tastoIniziale {
              link
              testo
            }
          }
        }
        expertises(first: 100, where: { status: PUBLISH, language: IT }) {
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
        articles(first: 3, where: { status: PUBLISH, language: IT }) {
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
  const [lang, setLang] = useState("it")
  let location

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

export default IndexIta
