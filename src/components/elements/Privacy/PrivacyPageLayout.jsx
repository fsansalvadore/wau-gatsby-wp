import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import GridMaxWidthContainer from '../Atoms/GridMaxWidthContainer'
import Heading from '../Heading/Heading'
import parse from 'html-react-parser'
import Layout from '../../LayoutComponent'
import { Helmet } from 'react-helmet'
import HeadingIntroHalf from '../Heading/HeadingIntroHalf'

export default ({data, lang}) => {
    const [page, setPage] = useState(null)

    useEffect(() => {
        if(data) {
          setPage(data.wordpress.pages.nodes[0])
        }
      }, [data, setPage])

    return (
        <Layout>
            <Helmet>
                <title>Privacy Policy • WAU Architeti</title>
            </Helmet>
            <StyledPrivacyPage>
                <GridMaxWidthContainer>
                    <Heading className="article-heading" tw="col-span-12">
                        <HeadingIntroHalf
                            heading={page && page.pagesACF && page.pagesACF.title}
                            subheading={page && page.pagesACF && page.pagesACF.introduzione}
                        />
                    </Heading>
                    <hr tw="col-span-12"/>
                </GridMaxWidthContainer>
                <article tw="w-full flex justify-center">
                    <GridMaxWidthContainer className="container-max-900" tw="w-full grid grid-cols-12 pb-8 md:pb-16 my-8 md:my-16">
                        {page && page.content && parse(page.content)}
                    </GridMaxWidthContainer>
                </article>
            </StyledPrivacyPage>
        </Layout>
    )
}

const StyledPrivacyPage = styled.div(() => [
    css`
    .article-heading {
        padding-left: 0;
      }
      article > div {
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
          ${tw`my-4 mb-8 md:mb-8 xl:mb-8`}
        }
    
        ul {
          ${tw`pl-4`}
    
            li {
            ${tw`list-disc`}
          }
        }
    
        p {
          line-height: 1.6rem;
          font-weight: 200;
          ${tw`md:text-lg`}
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
    
          figcaption {
            max-width: 900px;
            ${tw`mx-auto px-8 py-4 md:px-16`}
          }
        }
    
        .wp-block-separator {
          ${tw`my-4 md:my-8 xl:my-16`}
        }
        .wp-block-image {
          ${tw`my-4 md:my-8 xl:my-16`}
          
          img {
            ${tw`w-full h-auto`}
          }
        }
    
        .wp-block-gallery {
          ${tw`my-4 md:my-8 xl:my-16`}
        }
    
        .wp-block-eedee-block-gutenslider {
          position: relative;
        display: block;
        width: 100%;
        padding: 0;
        overflow: visible;
    
        .slick-slider,
        .slick-list {
            overflow: visible;
            line-height: 0;
        }
        
        .slick-slider {
          overflow: visible;
            img {
                cursor: ew-resize !important;
            }
          }
    
          .slick-slide {
              padding: 0px;
          }
          * {
              outline: none !important;
              box-shadow: none !important;
          }
        }
      }
    `
])