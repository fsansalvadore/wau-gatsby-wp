import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import WauCampPageLayout from "../components/elements/WauCamp/WauCampPageLayout";

const WauCampIta = () => {
  const data = useStaticQuery(graphql`
    query WauCampItaQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: IT, title: "WAU CAMP" }) {
          nodes {
            slug
            title
            pagesACF {
              title
              introduzione
            }
            waucampACF {
              caroselloIntro {
                immaginecarosello1 {
                  sourceUrl
                }
                immaginecarosello2 {
                  sourceUrl
                }
                immaginecarosello3 {
                  sourceUrl
                }
                immaginecarosello4 {
                  sourceUrl
                }
              }
              sezione1 {
                paragrafo
                titolo
                immagine {
                  sourceUrl
                }
              }
              sezione2 {
                paragrafo
                titolo
              }
              sezione3 {
                paragrafo
                titolo
                immagine {
                  sourceUrl
                }
              }
              sezione4 {
                titolo
                paragrafo
                immagine {
                  sourceUrl
                }
              }
              sezione5 {
                paragrafo
                titolo
                immagine {
                  sourceUrl
                }
              }
              sezione6 {
                paragrafo
                titolo
                immagine {
                  sourceUrl
                }
              }
              sezione7Form {
                titolo
                paragrafo
              }
            }
          }
        }
      }
    }
  `)

  return(
    <WauCampPageLayout data={data} lang="it" />
  )
}

export default WauCampIta
