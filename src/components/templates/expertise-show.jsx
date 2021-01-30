import React from "react"
import { Link, StaticQuery } from "gatsby"
import Heading from '../elements/Heading/Heading'
import Layout from "../layout"
import ProjectPreviewCard from "../elements/Projects/ProjectPreviewCard/ProjectPreviewCard"
import Img from 'gatsby-image'
import parse from 'html-react-parser'
import GridMaxWidthContainer from '../elements/Atoms/GridMaxWidthContainer'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'

const ExpertisePage = props => {
  const {
    content,
    expertiseACF,
    featuredImage,
    title,
    lang
  } = props.pageContext;

  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <Layout isMenuLight>
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
                      src={featuredImage.node.sourceUrl}
                      alt={featuredImage.node.altText}
                      tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    />
                  }
                </figure>
            }
            <article tw="w-full flex justify-center">
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
                <ul tw="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-px">
                  {
                    expertiseACF.progetti.map(project => (
                      <li key={`exp-proj-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="p-px">
                        <ProjectPreviewCard
                          link={lang.code === "EN" ? `/en/projects/${project.slug}` : `/progetti/${project.slug}`}
                          title={project.title}
                          featuredImage={project.featuredImage}
                          imgSrc={project.featuredImage ? project.featuredImage.node.link : ""}
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
          <Link to="/">Go to Home Page</Link>
        </Layout>
      )}
    />
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

      > figure:last-of-type {
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