import React, { useEffect, useState } from "react"
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Heading from "../Heading/Heading"
import tw from 'twin.macro'
import GridMaxWidthContainer from "../Atoms/GridMaxWidthContainer"
import Button from '../Atoms/Button'
import styled from 'styled-components'
import ClientsSection from "../Clients/ClientsSection"

const ExpertisePageLayout = ({data, lang}) => {
  const [expertises, setExpertises] = useState(null)

  useEffect(() => {
    if(data.wordpress.expertises) {
      setExpertises(data.wordpress.expertises.nodes)
    }
  }, [setExpertises, data.wordpress.expertises])
  
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
            {
                expertises && expertises.length > 0 &&
                <div tw="flex flex-col md:flex-row col-span-12 py-8 md:py-16">
                    <h3 tw="w-full md:w-1/2 text-5xl">{expertises[0].title}</h3>
                    <div tw="w-full md:w-1/2 mt-8 md:mt-0 text-xl">
                        <p>
                            {expertises[0].expertiseACF.anteprima}
                        </p>
                        <div tw="mt-8">
                            <Button
                                as={Link}
                                to={lang === "it" ? `/expertise/${expertises[0].slug}` : `/en/expertise/${expertises[0].slug}`}
                                isWhite
                            >Approfondisci</Button>
                        </div>
                    </div>
                </div>
            }
            <hr tw="col-span-12"/>
            <ul tw="col-span-12 md:col-span-6 md:col-start-7 pb-8 md:pb-16">
              {
                expertises && expertises.length > 0 ?
                expertises.slice(1).map(expertise => (
                  <li
                    key={`exp-${expertise.id}-${expertise.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}
                    tw="border-0 border-b border-solid border-white py-6 md:py-12"
                  >
                    <h3 tw="text-4xl">{expertise.title}</h3>
                    <div tw="w-full mt-8">
                      {
                        expertise.expertiseACF && expertise.expertiseACF.anteprima &&
                        <p>{expertise.expertiseACF.anteprima}</p>
                      }
                      <div tw="mt-8">
                        <Button as={Link} to={lang === "it" ? `/expertise/${expertise.slug}` : `/en/expertise/${expertise.slug}`} isWhite>Approfondisci</Button>
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
        <ClientsSection />
    </Layout>
  )
}

export default ExpertisePageLayout