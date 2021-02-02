import React, { useEffect, useState } from "react"
import Layout from "../components/LayoutComponent"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Heading from "../components/elements/Heading/Heading"
import tw from 'twin.macro'
import GridMaxWidthContainer from "../components/elements/Atoms/GridMaxWidthContainer"
import Button from '../components/elements/Atoms/Button'
import styled from 'styled-components'

const ExpertisesPageIta = ({data}) => {
  const [expertises, setExpertises] = useState(null)
  const [term, setTerm] = useState("")

  useEffect(() => {
    if(data.wordpress.expertises) {
      setExpertises(data.wordpress.expertises.nodes)
    }
  }, [setExpertises, term, data.wordpress.expertises])
  
  return(
    <Layout isMenuLight>
      <Helmet>
        <title>WAU Architetti • Expertise</title>
      </Helmet>
      <div className="gradientBg">
        <Heading tw="w-full md:w-3/4 lg:w-1/2">
          <p className="breadcrumbs mono">Expertise</p>
          <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
        </Heading>
        <section tw="w-full flex justify-center">
          <GridMaxWidthContainer>
            <hr tw="col-span-12"/>
            <div tw="flex flex-col md:flex-row col-span-12 py-8 md:py-16">
              <h3 tw="w-full md:w-1/2 text-5xl">Architettura</h3>
              <div tw="w-full md:w-1/2 mt-8 md:mt-0 text-xl">
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  <br/><br/>
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>
                <div tw="mt-8">
                  <Button as={Link} to="#" isWhite>Approfondisci</Button>
                </div>
              </div>
            </div>
            <hr tw="col-span-12"/>
            <ul tw="col-span-12 md:col-span-6 md:col-start-7 pb-8 md:pb-16">
              {
                expertises && expertises.length > 0 ?
                expertises.map(expertise => (
                  <li
                    key={`exp-${expertise.id}-${expertise.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}
                    tw="border-0 border-b border-solid border-white py-8 md:py-16"
                  >
                    <h3 tw="text-4xl">{expertise.title}</h3>
                    <div tw="w-full mt-8">
                      {
                        expertise.expertiseACF && expertise.expertiseACF.anteprima &&
                        <p>{expertise.expertiseACF.anteprima}</p>
                      }
                      <div tw="mt-8">
                        <Button as={Link} to={`/expertise/${expertise.slug}`} isWhite>Approfondisci</Button>
                      </div>
                    </div>
                  </li>
                )) : (
                  <li>
                    <p className="not-found">Nessuna expertise trovata</p>
                  </li>
                )
              }
            </ul>
          </GridMaxWidthContainer>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ExpertisesItaQuery {
    wordpress {
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
    }
  }
`

export default ExpertisesPageIta
