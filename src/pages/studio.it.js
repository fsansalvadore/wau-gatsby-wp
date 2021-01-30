import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import Heading from "../components/elements/Heading/Heading"
import HeadingIntroHalf from "../components/elements/Heading/HeadingIntroHalf"
import tw, { css } from 'twin.macro'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import GridMaxWidthContainer from "../components/elements/Atoms/GridMaxWidthContainer"
import styled from 'styled-components'
import Embed from 'react-embed';
import ReactPlayer from 'react-player'
import parse from 'html-react-parser'

const StudioPageIta = () => {
  const data = useStaticQuery(graphql`
    query StudioItaQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: IT, title: "Studio" }) {
          nodes {
            slug
            title
            pagesACF {
              title
              introduzione
            }
            studioACF {
              valuesSection {
                values {
                  value1 {
                    title
                    description
                  }
                  value2 {
                    title
                    description
                  }
                  value3 {
                    title
                    description
                  }
                }
                title
              }
              video
              videonative {
                sourceUrl
                uri
                altText
                mediaItemUrl
              }
              image1 {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 1500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              image2 {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 1500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              sectionEnd {
                title
                content
              }
              sectionApproach {
                title
                content
              }
            }
          }
        }
      }
    }
  `)
  const [studio, setStudio] = useState(null)
  const [values, setValues] = useState([])

  useEffect(() => {
    if(data) {
      setStudio(data.wordpress.pages.nodes[0])
    }
    if(data && data.wordpress.pages.nodes[0].studioACF.valuesSection.values) {
      setValues(
        [
          {
            title: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value1.title,
            description: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value1.description
          },
          {
            title: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value2.title,
            description: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value2.description
          },
          {
            title: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value3.title,
            description: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value3.description
          },
        ]
      )
    }
  }, [data, setStudio, setValues])

  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Studio</title>
      </Helmet>
        <StyledStudioPage>
          <Heading>
            <HeadingIntroHalf
              breadcrumb={studio ? studio.title : "Studio"}
              heading={studio ? studio.pagesACF.title : ""}
              subheading={studio ? studio.pagesACF.introduzione : ""}
            />
          </Heading>
          <div className="studio-content" tw="w-full flex justify-center">
            <GridMaxWidthContainer>
              {
                studio && studio.studioACF.videonative &&
                <div className="cover-image cover-image-fullscreen video-container" tw="mb-8 md:mb-0">
                  {/* <ReactPlayer url={studio.studioACF.video} autoplay="true" controls="false" options={{autoplay:true}} /> */}
                  {/* <Embed url={studio.studioACF.video} autoplay={true} controls={false} /> */}
                  {/* <iframe width="1920" height="1080" src="https://www.youtube.com/embed/cW7VDF0HI9Y?controls=0&autoplay=1&allowfullscreen=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe> */}
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    id="myVideo">
                    <source src={studio.studioACF.videonative.mediaItemUrl} type="video/mp4" />
                  </video>
                </div>
              }
              {
                studio && studio.studioACF &&
                <section tw="my-6 md:my-16 xl:my-48">
                  <div tw="grid grid-cols-12">
                    {
                      studio.studioACF.valuesSection.title &&
                      <div tw="text-3xl md:text-5xl text-center col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">{parse(studio.studioACF.valuesSection.title)}</div>
                    }
                    <figure tw="col-span-full text-center flex flex-col items-center">
                      <ul tw="my-8 md:my-16 w-full flex justify-center">
                      {
                        values &&
                        values.map(value => (
                            <li key={Math.floor(Math.random() * (100 - 999) + 100)} tw="p-8 list-none" >
                              {value.title}
                            </li>
                        ))
                      }
                      </ul>
                      <figcaption tw="text-center w-full lg:w-1/2 mx-auto">{values[1].description}</figcaption>
                    </figure>
                  </div>
                </section>
              }
              {
                studio && studio.studioACF && studio.studioACF.image1 &&
                <figure className="cover-image cover-image-fullscreen" tw="my-8">
                  {
                    studio.studioACF.image1.imageFile ?
                    <Img
                        tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                        fixed={studio.studioACF.image1.imageFile.childImageSharp.fixed}

                    /> :
                    <img
                      src={studio.studioACF.image1.sourceUrl}
                      alt={studio.studioACF.image1.altText}
                      tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    />
                  }
                </figure>
              }
              {
                studio && studio.studioACF &&
                <section tw="my-10 md:my-16 xl:my-48">
                  <div tw="grid grid-cols-12">
                    {
                      studio.studioACF.sectionApproach.title &&
                      <div tw="text-3xl md:text-5xl col-span-12 md:col-span-6 mb-8">{parse(studio.studioACF.sectionApproach.title)}</div>
                    }
                    {
                      studio.studioACF.sectionApproach.content &&
                      <p tw="text-lg col-span-12 md:col-span-6 md:col-start-7">{parse(studio.studioACF.sectionApproach.content)}</p>
                    }
                  </div>
                </section>
              }
              {
                studio && studio.studioACF && studio.studioACF.image2 &&
                <figure className="cover-image cover-image-fullscreen" tw="my-8">
                  {
                    studio.studioACF.image2.imageFile ?
                    <Img
                        tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                        fixed={studio.studioACF.image2.imageFile.childImageSharp.fixed}

                    /> :
                    <img
                      src={studio.studioACF.image2.sourceUrl}
                      alt={studio.studioACF.image2.altText}
                      tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    />
                  }
                </figure>
              }
              {
                studio && studio.studioACF &&
                <section tw="my-10 md:my-16 xl:my-48">
                  <div tw="grid grid-cols-12">
                    {
                      studio.studioACF.sectionEnd.title &&
                      <div tw="text-3xl md:text-5xl col-span-12 md:col-span-6 mb-8">{parse(studio.studioACF.sectionEnd.title)}</div>
                    }
                    {
                      studio.studioACF.sectionEnd.content &&
                      <p tw="text-lg col-span-12 md:col-span-6 md:col-start-7">{parse(studio.studioACF.sectionEnd.content)}</p>
                    }
                  </div>
                </section>
              }
            </GridMaxWidthContainer>
          </div>
        </StyledStudioPage>
    </Layout>
  )
}

const StyledStudioPage = styled.div(() => [
  css`
  .studio-content > div {
    // max-width: 1600px;

    > * {
      ${tw`col-span-12`}
    }
    
    > p, 
    > ul,
    > ol,
    > h1,
    > h2,
    > h3,
    > h4,
    > .wp-block-quote {
      ${tw`col-span-12 md:col-span-7 md:col-start-6 my-4 mb-8 md:mb-8 xl:mb-8`}
    }

    ul {
      ${tw`pl-4`}
    }

    iframe.p4-_1gxhi00 {
      height: 56vw !important;
    }
    
    .video-container {
      iframe, video {
        width: 100vw !important;
        // height: 56vw !important;
      }
      video:focus { outline: none; }
    }

    .player-wrapper {
      position: relative;
      padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
    }
    
    .react-player {
      position: absolute;
      top: 0;
      left: 0;
    }

    p {
      line-height: 1.6rem;
      font-weight: 200;
      ${tw`md:text-lg mb-4 md:mb-8`}
    }
    
    section p:last-of-type {
      ${tw`md:text-lg mb-0`}
    }

    > .wp-block-columns {
      ${tw`flex flex-col md:flex-row`}

      .wp-block-column {
        flex-grow: 1;
        ${tw`mr-0 md:mr-4`}
      }
      
      .wp-block-column:last-of-type {
        ${tw`mr-0`}
      }
    }

    .wp-block-embed {
      iframe {
        width: 100%;
        height: 57vw;
      }
    }

    > .wp-block-image.size-large {
      grid-column: 1 / span 12;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      max-width: 1000%;
      width: auto;
      
      img {
        width: 100%;
        height: auto;
      }
    }

    .wp-block-separator {
      ${tw`my-6 md:my-12 xl:my-32`}
    }
    .wp-block-image {
      ${tw`my-12 xl:my-32`}
      
      img {
        ${tw`w-full h-auto`}
      }
    }
  }
  `
])

export default StudioPageIta
