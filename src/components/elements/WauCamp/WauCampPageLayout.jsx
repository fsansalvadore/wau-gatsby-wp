import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import tw from "twin.macro";
import parse from "html-react-parser";
import Layout from "../../LayoutComponent";
import Heading from "../Heading/Heading";
import ImageWrapper from "../Atoms/ImageWrapper";
import GridMaxWidthContainer from "../Atoms/GridMaxWidthContainer";
import fallbackImg from "../../../images/Wau-Architetti-social-logo.jpg";
import Button from "../Atoms/Button";
import StyledWAUCampPage from "./WauCampPageLayout.styled";
import WauCampContactForm from "./WauCampContactForm";
import WauCampSlider from "./WauCampSlider";

const WauCampPageLayout = ({ data, lang }) => {
  const [page, setPage] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (data) {
      setPage(data.wordpress.pages.nodes[0]);
    }
  }, [data, setPage]);

  useEffect(() => {
    if (data.wordpress.pages.nodes[0].waucampACF.caroselloIntro) {
      setSlides([
        data.wordpress.pages.nodes[0].waucampACF.caroselloIntro.slide1,
        data.wordpress.pages.nodes[0].waucampACF.caroselloIntro.slide2,
        data.wordpress.pages.nodes[0].waucampACF.caroselloIntro.slide3,
        data.wordpress.pages.nodes[0].waucampACF.caroselloIntro.slide4,
      ]);
    }
  }, [data]);

  return (
    <Layout hasNoContactsCta>
      <Helmet>
        <title>WAU Architetti • {page ? `${page.title}` : "page"}</title>
      </Helmet>
      <StyledWAUCampPage>
        <Heading tw="pb-8">
          <div tw="flex w-full flex-col xl:flex-row pb-6">
            <div tw="w-full xl:w-1/3 mb-4">
              <p className="breadcrumbs mono" tw="text-wauGreen">
                {page ? page.title : "page"}
              </p>
              <h1 tw="leading-10 mb-12">{page ? page.pagesACF.title : ""}</h1>
              <div tw="mt-12">
                <Button as="a" href="#contact">
                  Richiedi info
                </Button>
              </div>
            </div>
            <div
              className="waucamp-slider"
              tw="w-full block sm:mb-12 mt-2 sm:mt-4 xl:mt-0 pl-0 xl:pl-8 xl:w-2/3"
            >
              {!!slides.length && <WauCampSlider slides={slides} />}
            </div>
          </div>
        </Heading>
        {!!page && (
          <div
            className="page-content"
            tw="w-full flex flex-col justify-center"
          >
            <section tw="w-full pb-4 xl:pb-16">
              <GridMaxWidthContainer>
                <figure tw="grid grid-cols-12 mb-8 sm:mb-16 col-span-12">
                  <ImageWrapper
                    image={
                      page.waucampACF.sezione3.immagine &&
                      page.waucampACF.sezione3.immagine
                    }
                    imgAlt="WAU Camp"
                    tw="col-span-12"
                  />
                </figure>
                <div tw="relative col-span-12 h-auto xl:col-span-4">
                  <h2>
                    {page.waucampACF.sezione1.titolo &&
                      parse(page.waucampACF.sezione1.titolo)}
                  </h2>
                </div>
                <div tw="col-span-12 xl:col-span-6 xl:col-start-6">
                  {page.waucampACF.sezione1.paragrafo &&
                    parse(page.waucampACF.sezione1.paragrafo)}
                  <figure tw="w-full block mt-8 lg:mt-16">
                    <ImageWrapper
                      image={
                        page.waucampACF.sezione1.immagine &&
                        page.waucampACF.sezione1.immagine
                      }
                      imgAlt="WAU Camp"
                      tw="w-full"
                    />
                  </figure>
                </div>
              </GridMaxWidthContainer>
            </section>
            <section tw="w-full pb-8 xl:pb-16">
              <GridMaxWidthContainer>
                <div tw="relative col-span-12 xl:col-span-4">
                  <h2>
                    {page.waucampACF.sezione3.titolo &&
                      parse(page.waucampACF.sezione3.titolo)}
                  </h2>
                  <Button as="a" href="#contact">
                    Richiedi info
                  </Button>
                </div>
                <div tw="col-span-12 xl:col-span-6 xl:col-start-6">
                  {page.waucampACF.sezione3.paragrafo &&
                    parse(page.waucampACF.sezione3.paragrafo)}
                  <figure tw="w-full mt-4 lg:mt-16">
                    <ImageWrapper
                      image={
                        page.waucampACF.sezione4.immagine &&
                        page.waucampACF.sezione4.immagine
                      }
                      imgAlt="WAU Camp"
                      tw="w-full"
                    />
                  </figure>
                </div>
              </GridMaxWidthContainer>
            </section>
            <section tw="w-full pb-8 xl:pb-16 ">
              <GridMaxWidthContainer>
                <div tw="relative col-span-12 xl:col-span-4">
                  <h2>
                    {page.waucampACF.sezione4.titolo &&
                      parse(page.waucampACF.sezione4.titolo)}
                  </h2>
                </div>
                <div tw="col-span-12 xl:col-span-6 xl:col-start-6">
                  {page.waucampACF.sezione4.paragrafo &&
                    parse(page.waucampACF.sezione4.paragrafo)}
                </div>
              </GridMaxWidthContainer>
            </section>
            <section tw="w-full">
              <GridMaxWidthContainer>
                <div tw="col-span-full border-0 border-solid border-t border-gray-300 block pb-8 xl:pb-16" />
                <div tw="relative col-span-12 xl:col-span-4">
                  <h2>
                    {page.waucampACF.sezione5.titolo &&
                      parse(page.waucampACF.sezione5.titolo)}
                  </h2>
                  <Button as="a" href="#contact">
                    Richiedi info
                  </Button>
                </div>
                <div tw="col-span-12 xl:col-span-6 xl:col-start-6">
                  {page.waucampACF.sezione5.paragrafo &&
                    parse(page.waucampACF.sezione5.paragrafo)}
                  <figure tw="w-full grid grid-cols-12 pt-8 xl:pt-16 col-span-12">
                    <ImageWrapper
                      image={
                        page.waucampACF.sezione6.immagine &&
                        page.waucampACF.sezione6.immagine
                      }
                      imgAlt="WAU Camp"
                      tw="col-span-12"
                    />
                  </figure>
                </div>
              </GridMaxWidthContainer>
            </section>
            <section tw="w-full xl:pt-4">
              <GridMaxWidthContainer>
                <div tw="relative col-span-12 xl:col-span-4">
                  <h2>
                    {page.waucampACF.sezione6.titolo &&
                      parse(page.waucampACF.sezione6.titolo)}
                  </h2>
                </div>
                <div tw="col-span-12 xl:col-span-6 xl:col-start-6">
                  {page.waucampACF.sezione6.paragrafo &&
                    parse(page.waucampACF.sezione6.paragrafo)}
                </div>
              </GridMaxWidthContainer>
            </section>
            <section id="contact" tw="w-full py-8 xl:py-16">
              <GridMaxWidthContainer>
                <div tw="col-span-full border-0 border-solid border-t border-gray-300 block pb-8 xl:pb-16" />
                <div tw="relative col-span-12 xl:col-span-4">
                  <h2>
                    {page.waucampACF.sezione7Form.titolo &&
                      parse(page.waucampACF.sezione7Form.titolo)}
                  </h2>
                  {page.waucampACF.sezione7Form.paragrafo &&
                    parse(page.waucampACF.sezione7Form.paragrafo)}
                </div>
                <div tw="col-span-12 xl:col-span-8 xl:col-start-6">
                  <WauCampContactForm lang={lang} />
                </div>
              </GridMaxWidthContainer>
            </section>
          </div>
        )}
      </StyledWAUCampPage>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WauCampPageLayout;
