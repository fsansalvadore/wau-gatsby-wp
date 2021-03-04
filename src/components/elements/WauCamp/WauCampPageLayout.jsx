import React, { useEffect, useState } from "react"
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../Heading/Heading"
import tw from 'twin.macro'
import ImageWrapper from '../Atoms/ImageWrapper';
import GridMaxWidthContainer from "../Atoms/GridMaxWidthContainer"
import parse from 'html-react-parser'
import StyledWAUCampPage from './WauCampPageLayout.styled'
import fallbackImg from '../../../images/Wau-Architetti-social-logo.jpg'
import Button from '../Atoms/Button';
import ContactForm from "../Contacts/Form/ContactForm"

const WauCampPageLayout = ({data, lang}) => {
  const [page, setPage] = useState(null)

  useEffect(() => {
    if(data) {
      setPage(data.wordpress.pages.nodes[0])
    }
  }, [data, setPage])

  return (
    <Layout>
        <Helmet>
            <title>WAU Architetti • {page ? `${page.title}` : "page"}</title>
        </Helmet>
        <StyledWAUCampPage>
          <Heading>
            <p className="breadcrumbs mono" tw="text-wauGreen">{page ? page.title : "page"}</p>
            <div tw="flex w-full flex-col md:flex-row">
              <div tw="w-full md:w-1/3 mb-8">
                <h1 tw="leading-10 mb-8">{page ? page.pagesACF.title : ""}</h1>
                <Button as="a" href="#contact">Richiedi info</Button>
              </div>
              <div className="intro" tw="w-full pl-0 md:pl-8 md:w-2/3">
                <p>{page ? page.pagesACF.introduzione : ""}</p>
              </div>
            </div>
          </Heading>
          {
            !!page && (
              <div className="page-content" tw="w-full flex flex-col justify-center">
                <section tw="w-full py-16 lg:py-32 bg-wauGreen text-white">
                  {console.log(page)}
                  <GridMaxWidthContainer>
                    <div tw="relative col-span-12 h-auto md:col-span-4">
                      <h2>{page.waucampACF.sezione1.titolo && parse(page.waucampACF.sezione1.titolo)}</h2>
                      <figure tw="w-full block relative md:absolute md:top-52">
                        <ImageWrapper
                          image={page.waucampACF.sezione1.immagine && page.waucampACF.sezione1.immagine}
                          imgAlt="WAU Camp"
                          tw="w-full"
                        />
                      </figure>
                    </div>
                    <div tw="col-span-12 md:col-span-7 md:col-start-6">
                      {page.waucampACF.sezione1.paragrafo && parse(page.waucampACF.sezione1.paragrafo)}
                    </div>
                  </GridMaxWidthContainer>
                </section>
                <section tw="w-full py-16 lg:py-32">
                  <GridMaxWidthContainer>
                    <div tw="relative col-span-12 md:col-span-4">
                    </div>
                    <div tw="col-span-12 md:col-span-7 md:col-start-6">
                      <h2>{page.waucampACF.sezione2.titolo && parse(page.waucampACF.sezione2.titolo)}</h2>
                      {page.waucampACF.sezione2.paragrafo && parse(page.waucampACF.sezione2.paragrafo)}
                    </div>
                  </GridMaxWidthContainer>
                </section>
                <section tw="w-full mt-32 py-16 lg:py-32 bg-wauGreen text-white">
                  <GridMaxWidthContainer>
                    <figure tw="md:-mt-64 mb-16 md:mb-32 col-span-12">
                      <ImageWrapper
                          image={page.waucampACF.sezione3.immagine && page.waucampACF.sezione3.immagine}
                          imgAlt="WAU Camp"
                          tw="w-full"
                        />
                    </figure>
                    <div tw="relative col-span-12 md:col-span-4">
                      <h2>{page.waucampACF.sezione3.titolo && parse(page.waucampACF.sezione3.titolo)}</h2>
                      <Button as="a" href="#contact">Richiedi info</Button>
                    </div>
                    <div tw="col-span-12 md:col-span-7 md:col-start-6">
                      {page.waucampACF.sezione3.paragrafo && parse(page.waucampACF.sezione3.paragrafo)}
                    </div>
                  </GridMaxWidthContainer>
                </section>
                <section tw="w-full py-16 lg:py-32 ">
                  <GridMaxWidthContainer>
                    <div tw="relative col-span-12 md:col-span-4">
                      <h2>{page.waucampACF.sezione4.titolo && parse(page.waucampACF.sezione4.titolo)}</h2>
                      <figure tw="w-full">
                        <ImageWrapper
                          image={page.waucampACF.sezione4.immagine && page.waucampACF.sezione4.immagine}
                          imgAlt="WAU Camp"
                          tw="w-full"
                        />
                      </figure>
                    </div>
                    <div tw="col-span-12 md:col-span-7 md:col-start-6">
                      {page.waucampACF.sezione4.paragrafo && parse(page.waucampACF.sezione4.paragrafo)}
                    </div>
                  </GridMaxWidthContainer>
                </section>
                <section tw="w-full py-16 lg:py-32 bg-wauGreen text-white">
                  <GridMaxWidthContainer>
                    <div tw="relative col-span-12 md:col-span-4">
                      <h2>{page.waucampACF.sezione5.titolo && parse(page.waucampACF.sezione5.titolo)}</h2>
                      <Button as="a" href="#contact">Richiedi info</Button>
                      <figure tw="w-full mt-16 md:absolute md:-bottom-64">
                        <ImageWrapper
                          image={page.waucampACF.sezione5.immagine && page.waucampACF.sezione5.immagine}
                          imgAlt="WAU Camp"
                          tw="w-full"
                        />
                      </figure>
                    </div>
                    <div tw="col-span-12 md:col-span-7 md:col-start-6">
                      {page.waucampACF.sezione5.paragrafo && parse(page.waucampACF.sezione5.paragrafo)}
                    </div>
                  </GridMaxWidthContainer>
                </section>
                <section tw="w-full pt-16 lg:pt-32">
                  <GridMaxWidthContainer>
                    <div tw="relative col-span-12 md:col-span-4">
                    </div>
                    <div tw="col-span-12 md:col-span-7 md:col-start-6">
                      <h2>{page.waucampACF.sezione6.titolo && parse(page.waucampACF.sezione6.titolo)}</h2>
                      {page.waucampACF.sezione6.paragrafo && parse(page.waucampACF.sezione6.paragrafo)}
                    </div>
                    <figure tw="mt-16 md:mt-32 col-span-12">
                      <ImageWrapper
                        image={page.waucampACF.sezione6.immagine && page.waucampACF.sezione6.immagine}
                        imgAlt="WAU Camp"
                        tw="w-full"
                      />
                    </figure>
                  </GridMaxWidthContainer>
                </section>
                <section id="contact" tw="w-full py-16 lg:py-32">
                  <GridMaxWidthContainer>
                    <div tw="relative col-span-12 md:col-span-5">
                      <h2>{page.waucampACF.sezione7Form.titolo && parse(page.waucampACF.sezione7Form.titolo)}</h2>
                      {page.waucampACF.sezione7Form.paragrafo && parse(page.waucampACF.sezione7Form.paragrafo)}
                    </div>
                    <div tw="col-span-12 md:col-span-5 md:col-start-8">
                      <ContactForm lang={lang} />
                    </div>
                  </GridMaxWidthContainer>
                </section>
              </div>
            )
          }
        </StyledWAUCampPage>
     </Layout>
    )
}

export default WauCampPageLayout
