import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Layout from "../layout"
// import ComponentParser from '../ComponentParser'
import Heading from '../elements/Heading/Heading'
import tw, { css } from 'twin.macro'
import parse from 'html-react-parser'
import Img from 'gatsby-image'

const ProjectPage = (props) => {
  const {
    slug,
    blocks,
    index,
    title,
    featuredImage,
    ProjectAFC,
    lang,
    content,
    seo,
    tags,
    project
  } = props.pageContext;
  const { data } = props;

  console.log("props", props)
  console.log("data", data)
  console.log("project", project)
  console.log("data.wordpress.projects", data.wordpress.projects)
  console.log(ProjectAFC.projectdate.split("/").slice(-1)[0])
  const proj = data.wordpress.projects.nodes.find(project => project.title === title)

  console.log("proj", proj)
  return (
    <Layout>
      <ProjectContainer>
        <Heading tw="flex flex-col lg:flex-row">
          <div tw="w-full md:w-3/4">
            <p className="breadcrumbs mono" >
              <Link to={lang.code === "EN" ? "/en/projects/" : "/progetti/"}>{lang.code === "EN" ? "Projects" : "Progetti"}</Link> /
            </p>
            <div tw="w-full p-0 md:pr-32">
              <div tw="w-full">
                <h1 tw="leading-10">{title}</h1>
              </div>
              {
                ProjectAFC && ProjectAFC.introduzione &&
                <div className="intro" tw="w-full">
                  {parse(ProjectAFC.introduzione)}
                </div>
              }
            </div>
          </div>
          <aside tw="w-full md:w-1/4 mt-8 lg:mt-0" className="project-aside-info">
            <hr/>
            {
              ProjectAFC && ProjectAFC.location &&
              <div>
                <p>{ProjectAFC.location}</p>
                <hr/>
              </div>
            }
            {
              ProjectAFC && ProjectAFC.projectdate &&
              <div>
                <p>{ProjectAFC.projectdate.split("/").slice(-1)[0]}</p>
                <hr/>
              </div>
            }
            {
              ProjectAFC && ProjectAFC.location &&
              <div>
                <p>{ProjectAFC.location}</p>
                <hr/>
              </div>
            }
          </aside>
        </Heading>
        {
          proj.featuredImage &&
          <figure className="proj-featuredImage" tw="mb-10 md:mb-16 xl:mb-32">
            <Img
                tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                fixed={proj.featuredImage.node.imageFile.childImageSharp.fixed}
                // fluid={proj.featuredImage.node.imageFile.childImageSharp.fluid}
            />
          </figure>
        }
        <article tw="w-full flex justify-center">
          <div className="project-content" tw="grid grid-cols-12 px-4">
            {content && parse(content)}
          </div>
        </article>
      </ProjectContainer>
    </Layout>
  )
}

const ProjectContainer = styled.div(() => [
  css`
  .proj-featuredImage {

    .gatsby-image-wrapper {
      width: 100% !important;
      height: 800px !important;
    }
  }

  .project-aside-info {
    p {
      ${tw`py-2 font-light`}
    }
  }
  article {
    .project-content {
      max-width: 1600px;

      > * {
        ${tw`col-span-12`}
      }
      
      > p, 
      > ul,
      > ol,
      > h1,
      > h2,
      > h3,
      > h4 {
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

export const query = graphql`
  query PrevNextQuery {
    wordpress {
      projects(first: 100, where: { status: PUBLISH }) {
        nodes {
          id
          title
          date
          slug
          language {
            code
          }
          featuredImage {
            node {
              altText
              link
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 1920, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectPage