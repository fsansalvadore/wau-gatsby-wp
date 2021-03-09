import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Heading from '../elements/Heading/Heading'
import Layout from "../LayoutComponent"
import ProjectPreviewCard from "../elements/Projects/ProjectPreviewCard/ProjectPreviewCard"
import Img from 'gatsby-image'
import parse from 'html-react-parser'
import GridMaxWidthContainer from '../elements/Atoms/GridMaxWidthContainer'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import { Helmet } from 'react-helmet'
import fallbackImg from '../../images/Wau-Architetti-social-logo.jpg'

const ExpertisePage = props => {
  const {
    content,
    slug,
    expertiseACF,
    featuredImage,
    seo,
    tags,
    title,
    lang
  } = props.pageContext;

  const data = useStaticQuery(graphql`
    query ExpertiseMediaQuery {
      wordpress {
        expertises(first: 100, where: { status: PUBLISH }) {
          nodes {
            title
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
          }
        }
      }
    }
  `)

  return (
    <Layout isMenuLight>
      <Helmet>
        <title>{seo && seo.title ? `${seo.title}` : lang.code === "IT" ? `${title} • Expertise • WAU Architetti` : `${title} • Expertise • WAU Architects`}</title>
        <link rel="canonical" href={lang.code === "IT" ? `https://www.wauarchitetti.com/expertise/${slug}` : `https://www.wauarchitetti.com/en/expertise/${slug}`} />
        <meta name="description" content={`${seo && seo.metaDesc && seo.metaDesc}`} />
        <meta name="keywords" content={`${seo && seo.metaKeywords && seo.metaKeywords}`} />
        <meta itemprop="image" content={`${featuredImage ? featuredImage.node.sourceUrl : fallbackImg}`} />
        <meta property="og:site_name" content={lang.code === "IT" ? `${title} • Expertise • WAU Architetti` : `${title} • Expertise • WAU Architects`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={lang.code === "IT" ? `https://www.wauarchitetti.com/expertise/${slug}` : `https://www.wauarchitetti.com/en/expertise/${slug}`} />
        <meta property="og:title" content={lang.code === "IT" ? `${title} • Expertise • WAU Architetti` : `${title} • Expertise • WAU Architects`} />
        <meta property="og:image" content={`${featuredImage ? featuredImage.node.sourceUrl : fallbackImg}`} />
        <meta property="og:description" content={`${seo && seo.metaDesc && seo.metaDesc}`} />
        <meta property="og:locale" content={lang.locale} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={lang.code === "IT" ? `https://www.wauarchitetti.com/expertise/${slug}` : `https://www.wauarchitetti.com/en/expertise/${slug}`} />
        <meta name="twitter:title" content={lang.code === "IT" ? `${title} • Expertise • WAU Architetti` : `${title} • Expertise • WAU Architects`} />
        <meta name="twitter:description" content={`${seo && seo.metaDesc && seo.metaDesc}`} />
        <meta name="twitter:image" content={`${featuredImage ? featuredImage.node.sourceUrl : fallbackImg}`} />
      </Helmet>
      <ExpertiseContainer className="gradientBg">
        <Heading>
          <p className="breadcrumbs mono">
            <Link to={lang.code === "EN" ? "/en/expertise/" : "/expertise/"}>
              {lang.code === "EN" ? "Expertise" : "Expertise"}</Link> /
          </p>
          <div tw="w-full md:w-3/4">
            <div tw="w-full">
              <h1 tw="leading-10">{title}</h1>
            </div>
            {
              expertiseACF && expertiseACF.introduzione &&
              <div className="intro" tw="w-full">
                {expertiseACF.introduzione}
              </div>
            }
          </div>
        </Heading>
        {
          featuredImage &&
            <figure className="cover-image" tw="mb-10 md:mb-16 xl:mb-32">
              {
                data.wordpress.expertises.nodes.find(expertise => expertise.title === title).featuredImage.node.imageFile ?
                <Img
                    tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    fixed={data.wordpress.expertises.nodes.find(expertise => expertise.title === title).featuredImage.node.imageFile.childImageSharp.fixed}
                /> :
                <img
                  src={featuredImage && featuredImage.node.sourceUrl}
                  alt={featuredImage && featuredImage.node.altText}
                  tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                />
              }
            </figure>
        }
        <article tw="w-full flex justify-center py-8 md:py-16">
          <GridMaxWidthContainer className="expertise-content" tw="w-full grid grid-cols-12">
            {
              content &&
              parse(content)
            }
          </GridMaxWidthContainer>
        </article>
        {
          expertiseACF && expertiseACF.progetti && expertiseACF.progetti &&
          <section>
            <p tw="text-center text-3xl py-16 md:py-32">Ecco qualche esempio:</p>
            <ul tw="w-full grid grid-cols-1 m-0 md:grid-cols-2 lg:grid-cols-3 pb-px">
              {
                expertiseACF.progetti.map(project => (
                  <li key={`exp-proj-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="p-px">
                    <ProjectPreviewCard
                      link={lang.code === "EN" ? `/en/projects/${project.slug}` : `/progetti/${project.slug}`}
                      title={project.title}
                      featuredImage={project.featuredImage}
                      imgSrc={project.featuredImage ? project.featuredImage.node.sourceUrl : ""}
                      imgAlt={project.featuredImage ? project.featuredImage.node.altText : ""}
                      projectdate={project.ProjectAFC.projectdate ? project.ProjectAFC.projectdate : null}
                      location={project.ProjectAFC.location && project.ProjectAFC.location}
                    />
                  </li>
                ))
              }
            </ul>
          </section>
        }
      </ExpertiseContainer>
    </Layout>
  )
}

const ExpertiseContainer = styled.div(() => [
  css`
  article {
    .expertise-content {
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

      > *:last-of-type {
        margin-bottom: 0;
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
        ${tw`my-4 md:my-12 xl:my-32`}
        
        img {
          ${tw`w-full h-auto`}
        }
      }
    }
  }
`])

export default ExpertisePage